import React, {
    Fragment
} from 'react';
import {
    Link
} from 'react-router-dom';
import throttle from 'lodash/throttle';
import Crest from '../images/crest.svg';
import Settings from './Settings';
import Help from './Help';
import Language from './Language';
import NavButton from './NavButton';
import BodyCopy from './Copy/BodyCopy';
import Copy from '../utils/CopyManager';
import styles from './Header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderModal: '', //help, language, settings
            showButtonsMobileTablet: false, // determines whether will show nav buttons in mobile and Tablet.
        };

        /* since don't know the height of the header, instead
          comparing top values of getBoundClientRect() to determine
          if landing page scrolled down from initial position. */
        this.landingTop = undefined;

        this.openHelpModal = this.openHelpModal.bind(this);
        this.openLanguageModal = this.openLanguageModal.bind(this);
        this.openSettingsModal = this.openSettingsModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleShowButtonsMobileTablet = this.handleShowButtonsMobileTablet.bind(this);
        this.openReview = this.openReview.bind(this);
        this.selectEnglishBallotFromModal = this.selectEnglishBallotFromModal.bind(this);
    }

    handleShowButtonsMobileTablet() {
        const {
            pathname
        } = this.props.location;
        const {
            showButtonsMobileTablet
        } = this.state;
        const onLandingPage = pathname === '/' || pathname === '/landing';

        const landingTop =
            document.getElementById('landing') &&
            document.getElementById('landing').getBoundingClientRect().top;

        /* first landingTop value will be the initial height of the landing page */
        if (landingTop && !this.firstLandingTop) {
            this.firstLandingTop = landingTop;
            /*if you're on the landing page and haven't scrolled down (this.firstLandingTop === landingTop), hide buttons in mobile and tablet */
        } else if (showButtonsMobileTablet && onLandingPage && this.firstLandingTop === landingTop) {
            this.setState({
                showButtonsMobileTablet: false
            });
            /* if you've left the landing page or have scrolled down, show the buttons in mobile and tablet */
        } else if (!showButtonsMobileTablet &&
            (!onLandingPage || this.firstLandingTop - landingTop > 0)
        ) {
            this.setState({
                showButtonsMobileTablet: true
            });
        }
    }

    componentDidMount() {
        this.props.setRenderLanguagesModal(() => {
            this.setState({
                renderModal: 'language'
            });
        });
        this.props.setCloseHeaderModals(() => {
            this.setState({
                renderModal: ''
            });
        });
        this.handleShowButtonsMobileTablet();
        document.body.addEventListener('scroll', throttle(this.handleShowButtonsMobileTablet, 200));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.handleShowButtonsMobileTablet();
        }
    }

    openHelpModal() {
        this.setState({
            renderModal: 'help'
        });
    }

    openLanguageModal() {
        this.setState({
            renderModal: 'language'
        });
    }

    openSettingsModal() {
        this.setState({
            renderModal: 'settings'
        });
    }

    selectEnglishBallotFromModal() {
        this.props.updateSelectedLanguage('EN');
        this.closeSecondaryModal();
    }

    closeModal() {
        this.setState({
            renderModal: ''
        });
    }

    openReview() {
        this.setState({
            renderModal: ''
        });
        this.props.history.push('/review');
    }

    render() {
        const {
            language,
            updateSelectedLanguage,
            showPrivacy,
            updateSelectedPrivacy,
            selectedPrivacy,
            history,
            mode,
            copy,
            location,
            statementModal,
        } = this.props;
        const {
            renderModal,
            showButtonsMobileTablet
        } = this.state;

        const {
            pathname
        } = this.props.location;

        //for mobile and tablet only:
        const showBallotButton = pathname.startsWith('/ballot') || pathname.startsWith('/review');

        return ( <
            Fragment > {
                /* The statementModal comes from the Ballot component. Because of some rough edges
                 * w.r.t. fixed positioning, rendering modals deep in our DOM tree is thorny. So we
                 * bind the statement modals' data in the Ballot component and pass the modals back
                 * up the App component and then to this Header component.
                 * The statementModal is actually a WriteInModal when it's passed as a function. I don't
                 * think it's worth disentangling these 2 cases at the moment because the whole
                 * situation needs to be refactored. */
            } {
                typeof statementModal === 'function' ?
                    statementModal(this.props.writeInValues || {}) :
                    statementModal
            } {
                renderModal === 'help' && ( <
                    Help copy = {
                        Copy('Help', mode, language)
                    }
                    mode = {
                        mode
                    }
                    onClose = {
                        this.closeModal
                    }
                    />
                )
            } {
                renderModal === 'settings' && ( <
                    Settings showPrivacy = {
                        showPrivacy
                    }
                    updateSelectedPrivacy = {
                        updateSelectedPrivacy
                    }
                    selectedPrivacy = {
                        selectedPrivacy
                    }
                    history = {
                        history
                    }
                    mode = {
                        mode
                    }
                    language = {
                        language
                    }
                    copy = {
                        Copy('Settings', mode, language)
                    }
                    onClose = {
                        this.closeModal
                    }
                    />
                )
            } {
                renderModal === 'language' && ( <
                    Language selectedLanguage = {
                        language
                    }
                    updateSelectedLanguage = {
                        updateSelectedLanguage
                    }
                    onClose = {
                        this.closeModal
                    }
                    copy = {
                        Copy('Language', mode, language)
                    }
                    />
                )
            } <
            div className = {
                styles.header
            } >
            <
            div className = {
                `${showBallotButton ? styles.adjustHeaderForBallot : ''} ${styles.content}`
            } >
            <
            div className = {
                styles.left
            } >
            <
            Link className = {
                `${showBallotButton ? styles.hideMobileHeaderSpecial : ''} ${
                  styles.crestLink
                }`
            }
            to = '/'
            title = {
                copy.ti
            }
            id = {
                'Crest' /*used for managing tab index */
            } >
            <
            img key = 'img'
            src = {
                Crest
            }
            alt = {
                copy.tj
            }
            className = {
                styles.crest
            }
            /> <
            /Link> <
            BodyCopy className = {
                `${showButtonsMobileTablet && 'hiddenMobile'} ${styles.title} ${
                  styles.siteName
                }`
            }
            style = {
                {
                    margin: '0'
                }
            }
            text = {
                copy.aa
            }
            tabIndex = {
                0
            }
            /> <
            /div> <
            div className = {
                `${!showButtonsMobileTablet && 'hiddenMobile'} ${styles.right}`
            } > {
                showBallotButton && ( <
                    React.Fragment >
                    <
                    NavButton className = {
                        `hiddenDesktop ${styles.navButton}`
                    }
                    colorOption = {
                        location.pathname.startsWith('/review') ? 'black' : 'white'
                    }
                    text = {
                        copy.jn
                    }
                    typeOption = 'iconTopMobile'
                    iconOption = 'review'
                    onClick = {
                        this.openReview
                    }
                    /> <
                    /React.Fragment>
                )
            } <
            NavButton className = {
                `${!showButtonsMobileTablet && 'hiddenMobile'} ${styles.navButton}`
            }
            colorOption = {
                renderModal === 'language' ? 'black' : 'white'
            }
            text = {
                copy.ab
            }
            typeOption = 'iconTopMobile'
            iconOption = 'language'
            onClick = {
                this.openLanguageModal
            }
            /> <
            NavButton className = {
                `${!showButtonsMobileTablet && 'hiddenMobile'} ${styles.navButton}`
            }
            colorOption = {
                renderModal === 'settings' ? 'black' : 'white'
            }
            text = {
                copy.ac
            }
            typeOption = 'iconTopMobile'
            iconOption = 'settings'
            onClick = {
                this.openSettingsModal
            }
            /> <
            NavButton className = {
                `${!showButtonsMobileTablet && 'hiddenMobile'} ${styles.navButton}`
            }
            colorOption = {
                renderModal === 'help' ? 'black' : 'white'
            }
            typeOption = 'iconTopMobile'
            iconOption = 'help'
            text = {
                copy.ad
            }
            onClick = {
                this.openHelpModal
            }
            /> <
            /div> <
            /div> <
            /div> <
            /Fragment>
        );
    }
}

export default Header;