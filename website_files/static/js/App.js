import React, {
    Suspense,
    lazy
} from 'react';
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';
import queryString from 'query-string';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import cloneDeep from 'lodash/cloneDeep';
import './App.css';
import Header from './components/Header';
import RestrictedRoute from './components/RestrictedRoute';
import NoLangBallotModal from './pages/NoLangBallotModal';
import NoActiveBallotModal from './pages/NoActiveBallotModal';
import {
    getPrivacy,
    setPrivacy,
    getItem,
    setItem,
    setTimeStampOnUnload,
    useOrDiscardSessionStorage,
} from './utils/PrivacyManager';
import {
    reloadSavedThemes
} from './utils/Theme';
import {
    fetchAvailableElections,
    fetchPartyBallotMap,
    fetchBallot,
    fetchElection,
    fetchFont,
} from './utils/api';
import {
    getContestsInOrder,
    getBallotItemsInOrder,
    shouldRefetch,
    getFetchPath,
    hasIncompleteBallots,
} from './utils/BallotGetters';
import {
    getElectionId,
    getPartyId,
    langIsActive
} from './utils/ElectionGetters';
import {
    getElectionBallotKey,
    getBallotStyleId
} from './utils/PartyBallotMapGetters';
import Copy from './utils/CopyManager';
import {
    getLoadingScreen
} from './utils/loadingHelpers';
import {
    setLanguageCSS
} from './utils/cssHelpers';
import InactivityModal from './pages/InactivityModal';
import {
    getFontFilenames
} from './utils/pdfHelpers';
import {
    IS_DEV,
    MODE,
    VERSION
} from './utils/process';

/** for dev use */
const SwitchMode = lazy(() =>
    import ('./components/SwitchMode'));

/*
  These page components are only loaded when the user navigates to these pages and uses them.
  In the future, we may decide we want to preload them as well.
 */
const Landing = lazy(() =>
    import ('./pages/Landing'));
const AddressLookupContainer = lazy(() =>
    import ('./pages/AddressLookup/AddressLookupContainer'));
const VoterLookup = lazy(() =>
    import ('./pages/VoterLookup/VoterLookupContainer'));
const Elections = lazy(() =>
    import ('./pages/Elections/Elections'));
const Parties = lazy(() =>
    import ('./pages/Parties/PartiesContainer'));
const Privacy = lazy(() =>
    import ('./pages/Privacy'));
const Overview = lazy(() =>
    import ('./pages/Overview'));

/* **********************
 *
 *   Preloading Components:
 *
 ************************ */
/*
Function to let you initiate preload when desired. Will be called in componentDidMount when page is done loading:
Source: https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d
Also useful: https://stackoverflow.com/a/58509569
*/
function lazyWithPreload(factory) {
    const Component = React.lazy(factory);
    Component.preload = factory;
    return Component;
}
/*
  The BundledPages are pages for the ballot marking and printing process.
  They will be preloaded when App first loads.
  Project specs require that no network calls are made once ballot is loaded through end of process.
  This make sures all network calls are either preloaded or made at start of loading ballot instead.
*/
const BundledPages = lazyWithPreload(() =>
    import ('./pages/BundledPages'));

function updateModalTabbing(modalsAreOpen) {
    const insideModal = document.querySelectorAll('#modal-wrapper a');
    /* add a class to anchors inside modal so that we can excludde them later */
    for (let i = 0; i < insideModal.length; i += 1) {
        const elem = insideModal[i];
        elem.classList.add('insideModal');
    }
    /* turn off tabbing on all anchors that don't have "insideModal" class */
    const outsideModal = document.querySelectorAll('a:not(.insideModal)');
    for (let i = 0; i < outsideModal.length; i++) {
        const elem = outsideModal[i];
        elem.tabIndex = modalsAreOpen ? -1 : 0;
    }
    /* the crest is always tabbable */
    const crest = document.querySelectorAll('#Crest')[0];
    crest.tabIndex = 0;
}

const INITIAL_SELECTION_STATE = {
    selectedPrecincts: {},
    selectedElection: undefined,
    registeredParty: undefined,
    selectedBallotItemId: undefined,
    selectedParty: undefined,
    selectedBallot: undefined,
    selectedCandidates: {},
    selectedPartyBallotMap: undefined,
    selectedPartyBallotMapFetchPath: null,
    writeInValues: {},
    completedBallots: {},
    agreedToAttestation: false,
};

useOrDiscardSessionStorage(INITIAL_SELECTION_STATE);

class App extends React.Component {
    constructor(props) {
        super(props);

        document.addEventListener('onModalStateChange', this.handleModalStateChange);

        this.numModalsOpen = 0;
        this.closeHeaderModals = () => null;

        this.state = {
            mode: MODE,
            showInactivityModal: false,
            availableElections: [],
            inactiveElections: [],
            selectedPrivacy: getPrivacy(),
            selectedLanguage: getItem('selectedLanguage', 'EN'),
            renderLanguagesModal: () => null,
            selectedPrecincts: getItem('selectedPrecincts', {}),
            selectedElection: getItem('selectedElection', null),
            registeredParty: getItem('registeredParty'),
            selectedBallotItemId: getItem('selectedBallotItemId'),
            selectedParty: getItem('selectedParty'),
            selectedBallot: getItem('selectedBallot'),
            selectedCandidates: getItem('selectedCandidates', {}),
            selectedPartyBallotMap: getItem('selectedPartyBallotMap'),
            selectedPartyBallotMapFetchPath: getItem('selectedPartyBallotMapFetchPath', null),
            writeInValues: getItem('writeInValues', {}),
            completedBallots: getItem('completedBallots', {}),
            agreedToAttestation: getItem('agreedToAttestation', false),
            /* When a modal is open, tab index of page content behind modal should be -1 (= not tabable).
            Otherwise, set value to 0, which keeps tab order
            This only applies to focusable elements - mostly a, input, select, and button */
            contentTabIndex: 0,
            fetchedPath: null, // path for last ballot fetched
            ballotFetchInProgress: false,
            loaded: false,
            /* This state field exists only as a hoisted go-between for the Header component
             * and the Ballot component. Headers render modals but the required data is in
             * the Ballot component. */
            statementModal: null,
        };

        this.userHasAvailableElections = this.userHasAvailableElections.bind(this);
        this.updateRenderLanguagesModal = this.updateRenderLanguagesModal.bind(this);
        this.updateRegisteredParty = this.updateRegisteredParty.bind(this);
        this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
        this.updateSelectedPrecinct = this.updateSelectedPrecinct.bind(this);
        this.updateSelectedElection = this.updateSelectedElection.bind(this);
        this.updateSelectedParty = this.updateSelectedParty.bind(this);
        this.updateSelectedBallot = this.updateSelectedBallot.bind(this);
        this.updateSelectedBallotItemId = this.updateSelectedBallotItemId.bind(this);
        this.updateSelectedPartyBallotMap = this.updateSelectedPartyBallotMap.bind(this);
        this.updateSelectedPartyBallotMapFetchPath = this.updateSelectedPartyBallotMapFetchPath.bind(
            this
        );
        this.updateSelectedCandidates = this.updateSelectedCandidates.bind(this);
        this.updateSelectedCandidatesForBallot = this.updateSelectedCandidatesForBallot.bind(this);
        this.updateWriteInValues = this.updateWriteInValues.bind(this);
        this.updateSelectedPrivacy = this.updateSelectedPrivacy.bind(this);
        this.clearSelections = this.clearSelections.bind(this);
        this.clearQueuedContestFocus = this.clearQueuedContestFocus.bind(this);
    }

    componentDidMount() {
        /* Certification requires all apps to display a hash-based version
         * number. The version displayed below is the first 12 digits of the
         * SHA-256 git commit hash and may be used to verify the version of the
         * ISB Client App. */
        console.log(`ISB Client App Version: ${VERSION}`);
        /* if the user has any themes saved in localStorage (textSize, contrast), they'll
         * be loaded here */
        reloadSavedThemes();
        setLanguageCSS(getItem('selectedLanguage', 'EN'));
        fetchAvailableElections().then(([activeElections, inactiveElections]) => {
            const activeIds = activeElections.map((election) => get(election, 'id'));
            const inactiveIds = inactiveElections.map((election) => get(election, 'id'));
            this.setState({
                loaded: true,
                availableElections: activeIds,
                inactiveElections: inactiveIds,
            });
        });

        const {
            location
        } = this.props;
        this.fetchBallot(location.pathname);

        /*
    Initiating preload per use of lazyWithPreload function.
    Once the initial requests for loading the page are completed, the preload will begin.
    The BundledPages  will be fetched ahead of the preload if they are needed by the code - for example,
    if user is at /ballot and refreshes, the BundledPages will load right away, even before the preload below.
  */
        const intervalRef = setInterval(checkLoadStatus, 200);

        function checkLoadStatus() {
            if (document.readyState === 'complete') {
                BundledPages.preload();
                clearInterval(intervalRef);
            }
        }

        MODE === 'RAV' && this.handleInactivityModal();

        setTimeStampOnUnload();
        this.setFontPrefetchTimeout();
    }

    componentDidUpdate(prevProps) {
        const {
            selectedPrecincts,
            selectedElection,
            selectedPartyBallotMapFetchPath,
            ballotFetchInProgress,
        } = this.state;
        const {
            location
        } = this.props;

        if (location !== prevProps.location) {
            document.body.scrollTo(0, 0);
        }

        /* if condition exists so don't reattempt to fetch in middle of a fetch
          prevents infinite loop */
        if (!ballotFetchInProgress) {
            this.fetchBallot(location.pathname);
        }

        const electionId = getElectionId(selectedElection);
        const precinctId = get(selectedPrecincts, electionId, undefined);
        const fetchPath = `${electionId}${precinctId}`;
        if (!electionId || !precinctId || fetchPath === selectedPartyBallotMapFetchPath) {
            return;
        }

        this.updateSelectedPartyBallotMapFetchPath(fetchPath);
        fetchPartyBallotMap(electionId, precinctId)
            .then((pbm) => this.updateSelectedPartyBallotMap(pbm))
            .catch(() => {
                this.clearSelections();
                this.props.history.push('/');
            });
    }

    componentWillUnmount() {
        document.removeEventListener('onModalStateChange', this.handleModalStateChange);
    }

    hasASelection() {
        let hasASelection = false;
        Object.keys(INITIAL_SELECTION_STATE).forEach((stateItem) => {
            if (this.state[stateItem] && !isEmpty(this.state[stateItem])) {
                hasASelection = true;
            }
        });
        return hasASelection;
    }

    /**
     * On language select / initial set compare previous selected language with current
     * to see if user has been using same language for more than 10 seconds
     * if so prefetch pdf fonts to speed up pdf generation
     */
    setFontPrefetchTimeout() {
        const TEN_SECONDS = 10000;
        const {
            selectedLanguage: prevLang
        } = this.state;

        if (this.prefetchPdfFontsTimeout) {
            clearTimeout(this.prefetchPdfFontsTimeout);
        }

        this.prefetchPdfFontsTimeout = setTimeout(() => {
            const {
                selectedLanguage: currLang
            } = this.state;

            if (prevLang === currLang) {
                const {
                    regular,
                    bold
                } = getFontFilenames(currLang);

                fetchFont(regular);
                fetchFont(bold);
            }
        }, TEN_SECONDS);
    }

    handleInactivityModal() {
        const FIVE_MINUTES = 300000; // 1000 * 60 * 5;
        const TWO_MINUTES = 120000; // 1000 * 60 * 2;

        let clearSessionTimer;
        let showModalTimer;

        const handleActivity = () => {
            clearTimeout(clearSessionTimer);
            clearTimeout(showModalTimer);
            if (!getPrivacy() && this.hasASelection()) {
                clearSessionTimer = setTimeout(() => {
                    const {
                        history,
                        location
                    } = this.props;
                    if (location.pathname !== '/') {
                        history.push('/');
                    }
                    this.clearSelections();
                }, FIVE_MINUTES);

                showModalTimer = setTimeout(() => {
                    this.closeHeaderModals();
                    this.setState({
                        showInactivityModal: true
                    });
                }, TWO_MINUTES);
            }
        };

        /* this'll capture if e.g. user refreshes page and doesn't have any initial activity */
        handleActivity();

        /* true parameter below tells it to capture all scrolling everywhere on page */
        document.addEventListener('scroll', handleActivity, true);
        document.addEventListener('keydown', handleActivity);
        document.addEventListener('click', handleActivity);
    }

    userHasAvailableElections() {
        const {
            selectedPrecincts,
            availableElections
        } = this.state;
        const availableToUser = Object.keys(selectedPrecincts);
        return Boolean(availableToUser.find((eid) => availableElections.includes(eid)));
    }

    fetchBallot(path) {
        const {
            selectedElection,
            selectedLanguage,
            selectedParty,
            selectedPartyBallotMap,
            selectedBallot,
            fetchedPath,
        } = this.state;

        const selectedBallotStyleId = getBallotStyleId(
            getPartyId(selectedParty),
            selectedPartyBallotMap
        );

        if (
            shouldRefetch(
                selectedElection,
                selectedLanguage,
                selectedBallotStyleId,
                selectedBallot,
                fetchedPath,
                path
            )
        ) {
            this.updateSelectedBallot(undefined);
            this.setState({
                ballotFetchInProgress: true,
                fetchedPath: getFetchPath(selectedElection, selectedLanguage, selectedBallotStyleId),
            });
            fetchBallot(getElectionId(selectedElection), selectedLanguage, selectedBallotStyleId)
                .then((ballot) => {
                    this.setState({
                        ballotFetchInProgress: false
                    });
                    this.updateSelectedBallot(ballot);
                })
                .catch(() => {
                    this.setState({
                        ballotFetchInProgress: false
                    });
                });
        }
    }

    updateRenderLanguagesModal(func) {
        this.setState({
            renderLanguagesModal: func
        });
    }

    updateCloseHeaderModals = (func) => {
        this.closeHeaderModals = func;
    };

    handleModalStateChange = (e) => {
        const {
            isOpen
        } = e.detail;

        isOpen ? (this.numModalsOpen += 1) : (this.numModalsOpen -= 1);

        updateModalTabbing(this.numModalsOpen > 0);

        this.setState({
            contentTabIndex: this.numModalsOpen > 0 ? -1 : 0,
        });
    };

    updateSelectedPrecinct(electionId, precinctId) {
        this.setState((prevState) => {
            const {
                selectedPrecincts
            } = prevState;
            const newSelectedPrecincts = { ...selectedPrecincts
            };
            newSelectedPrecincts[electionId] = precinctId;
            setItem('selectedPrecincts', newSelectedPrecincts);
            return {
                selectedPrecincts: newSelectedPrecincts
            };
        });
    }

    clearSelectedPrecincts = () => {
        this.setState({
            selectedPrecincts: {}
        });
        setItem('selectedPrecincts', {});
    };

    updateSelectedLanguage(selectedLanguage) {
        this.setState({
            selectedLanguage
        }, () => {
            this.setFontPrefetchTimeout();
        });
        setItem('selectedLanguage', selectedLanguage);
        setLanguageCSS(selectedLanguage);
    }

    updateSelectedElection(selectedElection, callback) {
        /* whenever you change elections, you need to unset the
         * selectedPartyBallotMap. This is a kluge, it's probably a better idea
         * to do something like fetching all the partyBallotMaps together, and then
         * choosing which to use based on selectedElection. */
        this.setState({
                selectedElection,
                selectedPartyBallotMap: null,
                selectedPartyBallotMapFetchPath: null,
            },
            callback
        );
        setItem('selectedPartyBallotMap', null);
        setItem('selectedPartyBallotMapFetchPath', null);
        setItem('selectedElection', selectedElection);
    }

    updateRegisteredParty(registeredParty) {
        this.setState({
            registeredParty
        });
        setItem('registeredParty', registeredParty);
    }

    updateSelectedParty(selectedParty) {
        this.setState({
            selectedParty
        });
        setItem('selectedParty', selectedParty);
        this.updateSelectedBallot(undefined);
    }

    updateSelectedCandidates(selectedCandidates) {
        this.setState({
            selectedCandidates
        });
        setItem('selectedCandidates', selectedCandidates);
    }

    updateSelectedCandidatesForBallot(selectedCandidatesForBallot) {
        const {
            selectedElection,
            selectedParty,
            selectedPartyBallotMap
        } = this.state;
        const selectedCandidatesCopy = cloneDeep(this.state.selectedCandidates);
        const electionBallotKey = getElectionBallotKey(
            selectedElection,
            getPartyId(selectedParty),
            selectedPartyBallotMap
        );
        selectedCandidatesCopy[electionBallotKey] = selectedCandidatesForBallot;
        this.updateSelectedCandidates(selectedCandidatesCopy);
    }

    updateWriteInValues(candidateId, writeInValue) {
        const {
            selectedElection,
            selectedParty,
            selectedPartyBallotMap
        } = this.state;
        const {
            writeInValues
        } = this.state;
        const newWriteInValues = { ...writeInValues
        };
        const electionBallotKey = getElectionBallotKey(
            selectedElection,
            getPartyId(selectedParty),
            selectedPartyBallotMap
        );
        newWriteInValues[electionBallotKey] = newWriteInValues[electionBallotKey] || {};
        newWriteInValues[electionBallotKey][candidateId] = writeInValue;
        this.setState({
            writeInValues: newWriteInValues
        });
        setItem('writeInValues', newWriteInValues);
    }

    updateSelectedBallot(selectedBallot) {
        this.setState({
            selectedBallot
        });
        setItem('selectedBallot', selectedBallot);
    }

    updateSelectedBallotItemId(selectedBallotItemId) {
        this.setState({
            selectedBallotItemId,
            queuedContestFocus: true
        });
        setItem('selectedBallotItemId', selectedBallotItemId);
    }

    updateSelectedPartyBallotMap(selectedPartyBallotMap) {
        this.setState({
            selectedPartyBallotMap
        });
        setItem('selectedPartyBallotMap', selectedPartyBallotMap);
    }

    updateSelectedPartyBallotMapFetchPath(selectedPartyBallotMapFetchPath) {
        this.setState({
            selectedPartyBallotMapFetchPath
        });
        setItem('selectedPartyBallotMapFetchPath', selectedPartyBallotMapFetchPath);
    }

    /* Whenever the user tells us the device is private, we must push current
     * state into localStorage. Whenever the user tells us the device is public,
     * we must pull sessionStorage into current state. sessionStorage will only
     * be corrupted by saved selections if the user loaded saved selections
     * and then marked the ballot, but if that's the case, then the user must
     * have already said "yes, use these saved selections". Note that the order
     * of operations in this function is important. */
    updateSelectedPrivacy(selectedPrivacy) {
        setPrivacy(selectedPrivacy);
        if (selectedPrivacy) {
            setItem('selectedCandidates', this.state.selectedCandidates);
            setItem('writeInValues', this.state.writeInValues);
        } else {
            setItem('selectedCandidates', {});
            setItem('writeInValues', {});
        }
        const selectedCandidates = getItem('selectedCandidates', {});
        const writeInValues = getItem('writeInValues', {});
        this.setState({
            selectedPrivacy,
            selectedCandidates,
            writeInValues
        });
    }

    updateCompletedBallots = electionId => {
        this.setState(prevState => {
            const {
                completedBallots
            } = prevState;
            const newCompletedBallots = { ...completedBallots
            };
            newCompletedBallots[electionId] = true;
            setItem('completedBallots', newCompletedBallots);
            return {
                completedBallots: newCompletedBallots
            };
        });
    };

    clearCompletedBallots = () => {
        this.setState({
            completedBallots: {}
        });
        setItem('completedBallots', {});
    };

    clearQueuedContestFocus() {
        this.setState({
            queuedContestFocus: false
        });
    }

    setAgreedToAttestation = () => {
        this.setState({
            agreedToAttestation: true
        });
        setItem('agreedToAttestation', true);
    };

    clearCandidatesAndWriteIns = () => {
        this.setState({
            selectedCandidates: INITIAL_SELECTION_STATE.selectedCandidates,
            writeInValues: INITIAL_SELECTION_STATE.writeInValues,
        });
        sessionStorage.removeItem('selectedCandidates');
        localStorage.removeItem('selectedCandidates');
        sessionStorage.removeItem('writeInValues');
        localStorage.removeItem('writeInValues');
    };

    clearSelections() {
        this.setState(INITIAL_SELECTION_STATE);
        Object.keys(INITIAL_SELECTION_STATE).forEach(stateItem => {
            sessionStorage.removeItem(stateItem);
            localStorage.removeItem(stateItem);
        });
    }

    render() {
        const {
            mode,
            selectedPrivacy,
            writeInValues,
            availableElections,
            selectedPrecincts,
            selectedElection,
            selectedParty,
            selectedPartyBallotMap,
            registeredParty,
            selectedCandidates,
            selectedBallot,
            selectedBallotItemId,
            selectedLanguage,
            contentTabIndex,
            inactiveElections,
            completedBallots,
            agreedToAttestation,
            showInactivityModal,
            queuedContestFocus,
        } = this.state;

        const {
            history,
            location
        } = this.props;

        const selectedCandidatesForBallot =
            selectedCandidates[
                getElectionBallotKey(selectedElection, getPartyId(selectedParty), selectedPartyBallotMap)
            ] || {};

        const writeInValuesForBallot =
            writeInValues[
                getElectionBallotKey(selectedElection, getPartyId(selectedParty), selectedPartyBallotMap)
            ] || {};

        return ( <
            >
            <
            Header updateSelectedLanguage = {
                this.updateSelectedLanguage
            }
            language = {
                selectedLanguage
            }
            showPrivacy = {!isEmpty(selectedParty) || selectedPrivacy
            }
            selectedPrivacy = {
                selectedPrivacy
            }
            updateSelectedPrivacy = {
                this.updateSelectedPrivacy
            }
            copy = {
                Copy('Header', mode, selectedLanguage)
            }
            setRenderLanguagesModal = {
                this.updateRenderLanguagesModal
            }
            setCloseHeaderModals = {
                this.updateCloseHeaderModals
            }
            statementModal = {
                this.state.statementModal
            }
            writeInValues = {
                writeInValuesForBallot
            }
            mode = {
                mode
            }
            history = {
                history
            }
            location = {
                location
            }
            /> {
                /* If user is inactive for 2min, show this modal.
                 * After 5 min, clear selections and return user to homepage. */
            } {
                showInactivityModal && ( <
                    InactivityModal copy = {
                        Copy('', mode, selectedLanguage)
                    }
                    handleClose = {
                        () => this.setState({
                            showInactivityModal: false
                        })
                    }
                    />
                )
            } {
                /* Once the user goes through election selection, if the current
                 * language isn't active, we want to block the ballot-based pages
                 * with a modal */
            } <
            Route path = '/(elections|parties|overview|ballot|review|pollpass)'
            render = {
                (props) => {
                    if (!selectedElection) return null;
                    return (
                        langIsActive(selectedElection, selectedLanguage) || ( <
                            NoLangBallotModal copy = {
                                Copy('NoLangBallotModal', mode, selectedLanguage)
                            }
                            selectedLanguage = {
                                selectedLanguage
                            }
                            onTryEnglish = {
                                () => this.updateSelectedLanguage('EN')
                            }
                            onTryAnother = {
                                this.state.renderLanguagesModal
                            }
                            />
                        )
                    );
                }
            }
            /> {
                /* Once the user goes through lookup, if the user doesn't match with
                 * any active elections, we want to block the ballot-based pages with
                 * a modal. */
            } <
            Route path = '/(elections|parties|overview|ballot|review|pollpass)'
            render = {
                (props) => {
                    if (!this.state.loaded) return null;
                    return (
                        this.userHasAvailableElections(selectedPrecincts) || ( <
                            NoActiveBallotModal copy = {
                                Copy('NoActiveBallotModal', mode, selectedLanguage)
                            }
                            goBack = {
                                () => history.goBack()
                            }
                            />
                        )
                    );
                }
            }
            /> <
            Route path = '/'
            render = {
                (props) => {
                    /* This route is essentially a shortcut through the beginning
                     * of the normal user flow, it skips lookup and election
                     * selection. Accordingly, it sets the state in the way that
                     * the skipped components would have set the state, and then
                     * jumps to the Parties component. */
                    const queryParams = queryString.parse(props.location.search);
                    const {
                        eid,
                        pid,
                        rid
                    } = queryParams || {};
                    if (rid && pid && eid) {
                        fetchElection(eid).then((selectedElection) => {
                            const selectedPrecincts = {
                                [eid]: rid
                            };
                            const registeredParty = pid === 'NPP' ? undefined : pid;
                            /* The following few lines of code are implicitly coupled with
                             * the updateRegisteredParty, updateSelectedPrecinct, and
                             * updateSelectedElectin methods. The poor coupling comes from
                             * the choice to do routing/redirects based on state. Rethinking
                             * this choice will end up fixing the following code. */
                            setItem('registeredParty', registeredParty);
                            setItem('selectedPrecincts', selectedPrecincts);
                            setItem('selectedPartyBallotMap', null);
                            setItem('selectedPartyBallotMapFetchPath', null);
                            setItem('selectedElection', selectedElection);
                            this.setState({
                                    selectedElection,
                                    selectedPrecincts,
                                    registeredParty
                                }, () =>
                                history.replace('/parties')
                            );
                        });
                    } else {
                        return null;
                    }
                }
            }
            /> <
            Suspense fallback = {
                getLoadingScreen(location.pathname)
            } >
            <
            Switch >
            <
            Redirect from = '/landing'
            to = '/' / >
            <
            Route exact path = '/'
            render = {
                (props) => ( <
                    Landing { ...props
                    }
                    copy = {
                        Copy('Landing', mode, selectedLanguage)
                    }
                    language = {
                        selectedLanguage
                    }
                    mode = {
                        mode
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    agreedToAttestation = {
                        agreedToAttestation
                    }
                    setAgreedToAttestation = {
                        this.setAgreedToAttestation
                    }
                    />
                )
            }
            /> <
            Route path = '/addresslookup'
            render = {
                (props) => {
                    if (mode !== 'ISB') props.history.push('/voterlookup');
                    return ( <
                        AddressLookupContainer { ...props
                        }
                        inactiveElections = {
                            inactiveElections
                        }
                        availableElections = {
                            availableElections
                        }
                        setSelectedPrecinct = {
                            this.updateSelectedPrecinct
                        }
                        clearSelectedPrecincts = {
                            this.clearSelectedPrecincts
                        }
                        clearRegisteredParty = {
                            () => this.updateRegisteredParty(undefined)
                        }
                        language = {
                            selectedLanguage
                        }
                        mode = {
                            mode
                        }
                        contentTabIndex = {
                            contentTabIndex
                        }
                        clearCompletedBallots = {
                            this.clearCompletedBallots
                        }
                        />
                    );
                }
            }
            /> <
            RestrictedRoute isAllowed = {
                agreedToAttestation || mode !== 'RAV'
            }
            path = '/voterlookup'
            render = {
                (props) => ( <
                    VoterLookup { ...props
                    }
                    inactiveElections = {
                        inactiveElections
                    }
                    availableElections = {
                        availableElections
                    }
                    setSelectedPrecinct = {
                        this.updateSelectedPrecinct
                    }
                    clearSelectedPrecincts = {
                        this.clearSelectedPrecincts
                    }
                    setRegisteredParty = {
                        this.updateRegisteredParty
                    }
                    language = {
                        selectedLanguage
                    }
                    mode = {
                        mode
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    clearCompletedBallots = {
                        this.clearCompletedBallots
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/elections'
            isAllowed = {!isEmpty(selectedPrecincts)
            }
            render = {
                (props) => ( <
                    Elections { ...props
                    }
                    onSelectElection = {
                        (selectedElection) => {
                            this.updateSelectedElection(selectedElection, () =>
                                props.history.push('/parties')
                            );
                        }
                    }
                    matchedElections = {
                        Object.keys(selectedPrecincts)
                    }
                    language = {
                        selectedLanguage
                    }
                    copy = {
                        Copy('Elections', mode, selectedLanguage)
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    completedBallots = {
                        completedBallots
                    }
                    clearSelections = {
                        this.clearSelections
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/parties'
            isAllowed = {!isEmpty(selectedElection)
            }
            render = {
                (props) => ( <
                    Parties { ...props
                    }
                    clearSelections = {
                        this.clearSelections
                    }
                    onSelectParty = {
                        this.updateSelectedParty
                    }
                    skipPrivacy = {!!Object.keys(completedBallots).length
                    }
                    selectedElection = {
                        selectedElection
                    }
                    selectedPartyBallotMap = {
                        selectedPartyBallotMap
                    }
                    registeredParty = {
                        registeredParty
                    }
                    language = {
                        selectedLanguage
                    }
                    mode = {
                        mode
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/privacy'
            isAllowed = {!isEmpty(selectedParty) || selectedPrivacy
            }
            render = {
                (props) => ( <
                    Privacy { ...props
                    }
                    selectedPrivacy = {
                        selectedPrivacy
                    }
                    updateSelectedPrivacy = {
                        this.updateSelectedPrivacy
                    }
                    copy = {
                        Copy('Privacy', mode, selectedLanguage)
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    />
                )
            }
            /> <
            RestrictedRoute isAllowed = {!isEmpty(selectedParty)
            }
            path = '/overview'
            render = {
                (props) => ( <
                    Overview { ...props
                    }
                    copy = {
                        Copy('Overview', mode, selectedLanguage)
                    }
                    mode = {
                        mode
                    }
                    language = {
                        selectedLanguage
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/ballot'
            isAllowed = {!isEmpty(selectedParty)
            }
            render = {
                (props) => ( <
                    BundledPages component = 'BallotContainer' { ...props
                    }
                    selectedElection = {
                        selectedElection
                    }
                    writeInValues = {
                        writeInValuesForBallot
                    }
                    selectedCandidates = {
                        selectedCandidatesForBallot
                    }
                    selectedBallotItemId = {
                        selectedBallotItemId
                    }
                    selectedLanguage = {
                        selectedLanguage
                    }
                    queuedContestFocus = {
                        queuedContestFocus
                    }
                    mode = {
                        mode
                    }
                    copy = {
                        Copy('Ballot', mode, selectedLanguage)
                    }
                    ballot = {
                        selectedBallot
                    }
                    updateSelectedBallotItemId = {
                        this.updateSelectedBallotItemId
                    }
                    updateSelectedCandidates = {
                        this.updateSelectedCandidatesForBallot
                    }
                    updateWriteInValues = {
                        this.updateWriteInValues
                    }
                    clearQueuedContestFocus = {
                        this.clearQueuedContestFocus
                    }
                    clearCandidatesAndWriteIns = {
                        this.clearCandidatesAndWriteIns
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    setStatementModal = {
                        (statementModal) => this.setState({
                            statementModal
                        })
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/review'
            isAllowed = {!isEmpty(selectedParty)
            }
            render = {
                (props) => ( <
                    BundledPages component = 'BallotReview' { ...props
                    }
                    ballotItemsInOrder = {
                        getBallotItemsInOrder(selectedBallot)
                    }
                    contestsInOrder = {
                        getContestsInOrder(selectedBallot)
                    }
                    selections = {
                        selectedCandidatesForBallot
                    }
                    onSelectBallotItem = {
                        this.updateSelectedBallotItemId
                    }
                    updateSelectedCandidates = {
                        this.updateSelectedCandidatesForBallot
                    }
                    updateWriteInValues = {
                        this.updateWriteInValues
                    }
                    writeInValues = {
                        writeInValuesForBallot
                    }
                    selectedLanguage = {
                        selectedLanguage
                    }
                    copy = {
                        Copy('BallotReview', mode, selectedLanguage)
                    }
                    mode = {
                        mode
                    }
                    selectedPrivacy = {
                        selectedPrivacy
                    }
                    updateSelectedPrivacy = {
                        this.updateSelectedPrivacy
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/pollpass'
            isAllowed = {!isEmpty(selectedParty)
            }
            render = {
                (props) => ( <
                    BundledPages component = 'PollPassContainer' { ...props
                    }
                    election = {
                        selectedElection
                    }
                    selectedPrecincts = {
                        selectedPrecincts
                    }
                    ballot = {
                        selectedBallot
                    }
                    partyId = {
                        getPartyId(selectedParty)
                    }
                    selections = {
                        selectedCandidatesForBallot
                    }
                    mode = {
                        mode
                    }
                    writeInValues = {
                        writeInValuesForBallot
                    }
                    language = {
                        selectedLanguage
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    clearSelections = {
                        this.clearSelections
                    }
                    hasIncompleteBallots = {
                        hasIncompleteBallots(
                            Object.keys(selectedPrecincts),
                            completedBallots,
                            inactiveElections
                        )
                    }
                    updateCompletedBallots = {
                        this.updateCompletedBallots
                    }
                    updateSelectedLanguage = {
                        this.updateSelectedLanguage
                    }
                    />
                )
            }
            /> <
            RestrictedRoute path = '/oath'
            isAllowed = {
                mode === 'UOC' && !isEmpty(selectedParty)
            }
            render = {
                (props) => ( <
                    BundledPages component = 'Oath' { ...props
                    }
                    copy = {
                        Copy('Valediction', mode, selectedLanguage)
                    }
                    mode = {
                        mode
                    }
                    language = {
                        selectedLanguage
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    updateCompletedBallots = {
                        this.updateCompletedBallots
                    }
                    electionId = {
                        getElectionId(selectedElection)
                    }
                    clearSelections = {
                        this.clearSelections
                    }
                    hasIncompleteBallots = {
                        hasIncompleteBallots(
                            Object.keys(selectedPrecincts),
                            completedBallots,
                            inactiveElections
                        )
                    }
                    />
                )
            }
            /> <
            Route path = '/valediction'
            render = {
                (props) => ( <
                    BundledPages component = 'Valediction' { ...props
                    }
                    copy = {
                        Copy('Valediction', mode, selectedLanguage)
                    }
                    mode = {
                        mode
                    }
                    language = {
                        selectedLanguage
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    />
                )
            }
            /> <
            /Switch> <
            /Suspense> {
                IS_DEV && ( <
                    SwitchMode mode = {
                        mode
                    }
                    onSwitch = {
                        (newMode) => {
                            this.setState({
                                mode: newMode
                            });
                        }
                    }
                    />
                )
            } <
            />
        );
    }
}

export default withRouter(App);