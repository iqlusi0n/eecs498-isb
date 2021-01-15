import React, {
    Component,
    Fragment
} from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import BallotLayout from '../../components/LayoutWrappers/BallotLayout';
import Copy from '../../utils/CopyManager';
import ContestList from './ContestList';
import Contest from './Contest';
import BallotNavigation from './BallotNavigation';
import {
    getBallotItem,
    getBallotItemsInOrder,
    getFirstBallotItem,
    getPrevBallotItem,
    getNextBallotItem,
    getOrder,
    getId,
    getContestsInOrder,
    updateSelections,
    getVoteForMax,
    getIsContest,
} from '../../utils/BallotGetters';
import {
    getParties,
    getElectionShortTitle
} from '../../utils/ElectionGetters';
import {
    History
} from '../../utils/types';
import {
    getUserWasNotified,
    setUserWasNotified
} from './../../utils/PrivacyManager';
import PrivacyModal from './../../utils/PrivacyModal';
import CustomContent from './CustomContent';
import NavButton from '../../components/NavButton';
import styles from './Ballot.module.css';

/** 
 * ISB Client BallotContainer Page Component 
 * @module BallotContainer 
 * @exports module:BallotContainer */
export default class BallotContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverVoteModal: false,
            overvoteCandidateId: undefined,
            userWasNotified: getUserWasNotified(),
        };

        this.userHasStoredSelections = !isEmpty(props.selectedCandidates) || !isEmpty(props.writeInValues);

        this.onSelectCandidate = this.onSelectCandidate.bind(this);
        this.toggleShowOverVoteModal = this.toggleShowOverVoteModal.bind(this);
    }

    componentDidMount() {
        /* If the user doesn't have saved selections, consider them adequately notified for this session */
        if (!this.userHasStoredSelections) {
            this.updateUserWasNotified(true);
        }
    }

    onSelectCandidate(contestId, candidateId) {
        const {
            selectedCandidates,
            updateSelectedCandidates,
            ballot
        } = this.props;
        const newSelections = updateSelections(contestId, candidateId, selectedCandidates, ballot);
        if (newSelections) {
            updateSelectedCandidates(newSelections);
        } else {
            this.toggleShowOverVoteModal(true, candidateId);
        }
    }

    /**
     * When modal is opened, save candidateId responsible for opening.
     * On close, clear value in state since the candidateId is copied over
     * to local state of child component and this component is no longer concerned.
     * @param {boolean} bool 
     * @param {string} candidateId 
     */
    toggleShowOverVoteModal(bool, candidateId) {
        this.setState({
            showOverVoteModal: bool,
            overvoteCandidateId: bool ? candidateId : undefined,
        });
    }

    updateUserWasNotified(bool) {
        this.setState({
            userWasNotified: bool
        });
        setUserWasNotified(bool);
    }

    clearSaved = () => {
        this.updateUserWasNotified(true);
        this.props.clearCandidatesAndWriteIns();
    };

    useSaved = () => {
        this.updateUserWasNotified(true);
    };

    render() {
        const {
            selectedBallotItemId,
            updateSelectedBallotItemId,
            selectedCandidates,
            history,
            writeInValues,
            updateWriteInValues,
            mode,
            copy,
            selectedLanguage,
            selectedElection,
            contentTabIndex,
            ballot,
            queuedContestFocus,
        } = this.props;

        const {
            showOverVoteModal,
            userWasNotified,
            overvoteCandidateId
        } = this.state;

        if (!userWasNotified && this.userHasStoredSelections) {
            return ( <
                PrivacyModal clearSaved = {
                    this.clearSaved
                }
                useSaved = {
                    this.useSaved
                }
                copy = {
                    Copy('PrivacyModal', mode, selectedLanguage)
                }
                />
            );
        }

        const displayedBallotItem =
            getBallotItem(selectedBallotItemId, ballot) || getFirstBallotItem(ballot);
        if (!displayedBallotItem) return null;

        const displayedContestSelections = get(selectedCandidates, getId(displayedBallotItem), []);

        const numContests = get(getContestsInOrder(ballot), 'length', 0);

        const contestXOfTotal = `${copy.fy} ${getOrder(displayedBallotItem) + 1}/${numContests}`;

        return ( <
            Fragment >
            <
            BallotLayout > {
                (doScroll, scrollIsMore, canScroll) => ( <
                    div className = {
                        styles.contentWrapper
                    } >
                    <
                    div className = {
                        `hiddenMobileTablet ${styles.contestListWrapper}`
                    } >
                    <
                    ContestList mode = {
                        mode
                    }
                    selectedLanguage = {
                        selectedLanguage
                    }
                    copy = {
                        Copy('ContestList', mode, selectedLanguage)
                    }
                    ballotItemsInOrder = {
                        getBallotItemsInOrder(ballot)
                    }
                    displayedBallotItemId = {
                        selectedBallotItemId
                    }
                    onSelectBallotItem = {
                        updateSelectedBallotItemId
                    }
                    selections = {
                        selectedCandidates
                    }
                    contentTabIndex = {
                        contentTabIndex
                    }
                    /> <
                    /div> <
                    div className = {
                        styles.contestWrapper
                    } > {
                        getIsContest(displayedBallotItem) ? ( <
                            Contest electionShortTitle = {
                                getElectionShortTitle(selectedElection, selectedLanguage)
                            }
                            contest = {
                                displayedBallotItem
                            }
                            parties = {
                                getParties(selectedElection, selectedLanguage)
                            }
                            selections = {
                                displayedContestSelections
                            }
                            onSelectCandidate = {
                                this.onSelectCandidate
                            }
                            writeInValues = {
                                writeInValues
                            }
                            updateWriteInValues = {
                                updateWriteInValues
                            }
                            queuedContestFocus = {
                                queuedContestFocus
                            }
                            mode = {
                                mode
                            }
                            selectedLanguage = {
                                selectedLanguage
                            }
                            copy = {
                                Copy('Contest', mode, selectedLanguage)
                            }
                            toggleShowOverVoteModal = {
                                this.toggleShowOverVoteModal
                            }
                            showOverVoteModal = {
                                showOverVoteModal
                            }
                            contentTabIndex = {
                                contentTabIndex
                            }
                            contestXOfTotal = {
                                contestXOfTotal
                            }
                            setStatementModal = {
                                this.props.setStatementModal
                            }
                            clearQueuedContestFocus = {
                                this.props.clearQueuedContestFocus
                            }
                            doScroll = {
                                doScroll
                            }
                            scrollIsMore = {
                                scrollIsMore
                            }
                            canScroll = {
                                canScroll
                            }
                            overvoteCandidateId = {
                                overvoteCandidateId
                            }
                            />
                        ) : ( <
                            CustomContent contentTabIndex = {
                                contentTabIndex
                            }
                            selectedElection = {
                                selectedElection
                            }
                            header = {
                                displayedBallotItem.header[selectedLanguage]
                            }
                            body = {
                                displayedBallotItem.body[selectedLanguage]
                            }
                            electionShortTitle = {
                                getElectionShortTitle(selectedElection, selectedLanguage)
                            }
                            copy = {
                                Copy('Contest', mode, selectedLanguage)
                            }
                            />
                        )
                    } <
                    /div> {
                        canScroll && ( <
                            div className = {
                                styles.scrollerContainer
                            } >
                            <
                            div className = {
                                styles.scrollerCenter
                            } >
                            <
                            NavButton className = {
                                `${styles.scrollerBtn} ${selectedLanguage === 'FA' ? 'content-flip' : ''}`
                            }
                            colorOption = "gray"
                            typeOption = {
                                scrollIsMore ? 'down' : 'up'
                            }
                            onClick = {
                                doScroll
                            }
                            text = {
                                scrollIsMore ? copy.fw : copy.cw
                            }
                            tabIndex = {
                                contentTabIndex
                            }
                            /> <
                            /div> <
                            /div>
                        )
                    } <
                    /div>
                )
            } <
            /BallotLayout> <
            BallotNavigation copy = {
                Copy('BallotNavigation', mode, selectedLanguage)
            }
            numCurrentContestSelections = {
                displayedContestSelections.length
            }
            maxSelections = {
                getVoteForMax(displayedBallotItem)
            }
            prevBallotItem = {
                getPrevBallotItem(displayedBallotItem, ballot)
            }
            nextBallotItem = {
                getNextBallotItem(displayedBallotItem, ballot)
            }
            onSelectBallotItem = {
                updateSelectedBallotItemId
            }
            onReadyToReview = {
                () => history.push('/review')
            }
            contentTabIndex = {
                contentTabIndex
            }
            contestXOfTotal = {
                contestXOfTotal
            }
            hideBack = {!selectedBallotItemId || selectedBallotItemId === getFirstBallotItem(ballot).id
            }
            selectedItemIsContest = {
                getIsContest(displayedBallotItem)
            }
            /> <
            /Fragment>
        );
    }
}

BallotContainer.propTypes = {
    selectedLanguage: PropTypes.string,
    mode: PropTypes.string,
    selectedElection: PropTypes.object,
    selectedContestId: PropTypes.string,
    updateSelectedBallotItemId: PropTypes.func,
    updateSelectedCandidates: PropTypes.func,
    updateWriteInValue: PropTypes.func,
    history: History,
};

BallotContainer.defaultProps = {
    mode: 'ISB',
    selectedElection: {},
    selectedContestId: null,
    selectedLanguage: 'EN',
    updateSelectedCandidate: () => null,
    updateSelectedBallotItemId: () => null,
    onConfirmSelection: () => null,
    updateWriteInValue: () => null,
    history: History,
};