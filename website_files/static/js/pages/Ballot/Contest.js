import React, {
    Fragment,
    Component
} from 'react';
import get from 'lodash/get';
import SubtitleCopy from '../../components/Copy/SubtitleCopy';
import BodyCopy from '../../components/Copy/BodyCopy';
import {
    getId,
    getContestTitle,
    getCandidates,
    getCandidateIsWriteIn,
    getLongDescription,
    getVoteForText,
    getContestStatements,
} from '../../utils/BallotGetters';
import Candidate from './Candidate';
import StatementModal from './StatementModal';
import OverVoteModal from './OverVoteModal';
import Copy from '../../utils/CopyManager';
import styles from './Contest.module.css';
import {
    scrollBodyTo
} from '../../utils/scroller';

function candidateIsSelected(candidateId, selections) {
    return selections.includes(candidateId);
}

class Contest extends Component {
    constructor(props) {
        super(props);
        this.contestRef = React.createRef();
        this.contestCountRef = React.createRef();
        this.analysisRef = React.createRef();

        this.state = {};
    }

    componentDidMount() {
        scrollBodyTo({
            toTop: true,
            smooth: false
        });
        this.setFocus();
    }

    /**
     * Focus is handled through componentDidUpdate since focus requires a node to exist
     * @param {Object} prevProps 
     * @param {Object} prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        const {
            contest
        } = this.props;
        const prevContestId = getId(prevProps.contest);
        const contestId = getId(contest);
        /**
         * queuedContestFocus indicates focus needs to be set in this component
         * and allow a way to focus when a contest is already displaying
         */
        if (!prevProps.queuedContestFocus && this.props.queuedContestFocus) {
            this.setFocus();
        }

        if (prevState.queuedFocusRef !== this.state.queuedFocusRef && this.state.queuedFocusRef) {
            this.resetFocus();
        }

        if (prevContestId !== contestId) scrollBodyTo({
            toTop: true,
            smooth: false
        });
    }

    /**
     * sets focus on first item of page
     * this prop is handled through state in App.js
     */
    setFocus() {
        this.contestCountRef.current.focus();
        this.props.clearQueuedContestFocus();
    }

    /**
     * used to reset focus to button that called modal when modal closes
     */
    resetFocus() {
        this[this.state.queuedFocusRef].current.focus();
        this.setState({
            queuedFocusRef: undefined
        });
    }

    render() {
            const {
                contest,
                parties,
                selections,
                onSelectCandidate,
                updateWriteInValues,
                writeInValues,
                mode,
                selectedLanguage,
                showOverVoteModal,
                toggleShowOverVoteModal,
                electionShortTitle,
                contentTabIndex,
                contestXOfTotal,
                copy,
                setStatementModal,
                overvoteCandidateId,
            } = this.props;
            const {
                queuedCandidateFocus
            } = this.state;
            const candidates = getCandidates(contest);
            const contestId = getId(contest);
            const heading = getContestTitle(contest);
            const voteForText = getVoteForText(contest);
            const longDescription = getLongDescription(contest);

            /* We bind arguments to the modal here but render it as part of the header. This
             * is awkward but necessary because the application data and UI hierarchy do not
             * align. This might be unavoidable, by definition, when using modals. We should
             * probably add some instrumentation for pushing modals up the DOM tree. */
            const statementModal = ( <
                StatementModal statements = {
                    getContestStatements(contest)
                }
                onClose = {
                    () => {
                        setStatementModal(null);
                        this.setState({
                            queuedFocusRef: 'analysisRef'
                        });
                    }
                }
                copy = {
                    Copy('AnalysisModal', mode, selectedLanguage)
                }
                />
            );

            const presidentHeading = {
                CC: '總​統​和​副​總​統',
                EN: 'PRESIDENT AND VICE PRESIDENT',
                ES: 'PRESIDENTE Y VICEPRESIDENTE',
                FA: 'رئیس جمهور و معاون رئیس جمهور',
                HI: 'राष्ट्रपति और उप राष्ट्रपति',
                HY: 'ՆԱԽԱԳԱՀ ԵՎ ՓՈԽՆԱԽԱԳԱՀ',
                JA: '大​統​領​お​よ​び​副​大​統​領',
                KM: 'ប្រធានា​ធិបតី និង អ​នុ​ប្រធានា​ធិបតី',
                KO: '대통령 및 부통령',
                RU: 'ПРЕЗИДЕНТ И ВИЦЕ-ПРЕЗИДЕНТ',
                TH: 'ประธานาธิบดี​และ​รอง​ประธานาธิบดี',
                TL: 'PRESIDENTE AT BISE-PRESIDENTE',
                VI: 'TỔNG THỐNG VÀ PHÓ TỔNG THỐNG',
                ZH: '總​統​和​副​總​統'
            };

            return ( <
                Fragment > {
                    showOverVoteModal && ( <
                        OverVoteModal onCancel = {
                            () => {
                                toggleShowOverVoteModal(false);
                                this.setState({
                                    queuedCandidateFocus: overvoteCandidateId
                                });
                            }
                        }
                        copy = {
                            Copy('OverVoteModal', mode, selectedLanguage)
                        }
                        />
                    )
                } <
                div className = {
                    styles.contest
                } >
                <
                div className = {
                    styles.header
                } >
                <
                div className = 'hiddenMobile'
                tabIndex = {
                    contentTabIndex
                } > {
                    electionShortTitle
                } <
                /div> <
                div tabIndex = {
                    contentTabIndex
                }
                ref = {
                    this.contestCountRef
                } > {
                    contestXOfTotal
                } <
                /div> <
                /div> <
                div className = {
                    styles.content
                }
                onScroll = {
                    this.handleScroll
                }
                ref = {
                    this.contestRef
                } >
                <
                SubtitleCopy className = {
                    styles.heading
                }
                text = {
                    heading
                }
                tabIndex = {
                    contentTabIndex
                }
                /> {
                    voteForText && ( <
                            BodyCopy tabIndex = {
                                contentTabIndex
                            }
                            text = { < div dangerouslySetInnerHTML = {
                                    {
                                        __html: voteForText
                                    }
                                }
                                />} /
                                >
                            )
                        } <
                        hr className = {
                            styles.hr
                        }
                    /> {
                        longDescription && ( <
                                Fragment >
                                <
                                BodyCopy tabIndex = {
                                    contentTabIndex
                                }
                                text = { < div dangerouslySetInnerHTML = {
                                        {
                                            __html: longDescription
                                        }
                                    }
                                    />} /
                                    >
                                    <
                                    hr className = {
                                        styles.hr
                                    }
                                    /> <
                                    /Fragment>
                                )
                            }

                            <
                            div className = {
                                styles.candidates
                            } > {
                                candidates.map((cand) => ( <
                                    Candidate key = {
                                        cand.id
                                    }
                                    isWriteIn = {
                                        getCandidateIsWriteIn(cand)
                                    }
                                    isSelected = {
                                        candidateIsSelected(getId(cand), selections)
                                    }
                                    candidate = {
                                        cand
                                    }
                                    parties = {
                                        parties
                                    }
                                    onSelectCandidate = {
                                        () => onSelectCandidate(contestId, getId(cand))
                                    }
                                    writeInValue = {
                                        get(writeInValues, `${getId(cand)}`, null)
                                    }
                                    updateWriteInValues = {
                                        value => updateWriteInValues(getId(cand), value)
                                    }
                                    mode = {
                                        mode
                                    }
                                    language = {
                                        selectedLanguage
                                    }
                                    copy = {
                                        Copy('Candidate', mode, selectedLanguage)
                                    }
                                    contentTabIndex = {
                                        contentTabIndex
                                    }
                                    setStatementModal = {
                                        setStatementModal
                                    }
                                    isFocusQueued = {
                                        queuedCandidateFocus && cand.id === queuedCandidateFocus
                                    }
                                    clearQueuedCandidateFocus = {
                                        () => this.setState({
                                            queuedCandidateFocus: undefined
                                        })
                                    }
                                    isPresidential = {
                                        presidentHeading[selectedLanguage] === heading
                                    }
                                    />
                                ))
                            } <
                            /div>

                        {
                            Boolean(getContestStatements(contest).length) && ( <
                                button type = "button"
                                ref = {
                                    this.analysisRef
                                }
                                className = {
                                    styles.analysis
                                }
                                onClick = {
                                    () => {
                                        setStatementModal(statementModal);
                                    }
                                }
                                tabIndex = {
                                    contentTabIndex
                                } >
                                {
                                    copy.gc
                                } <
                                /button>
                            )
                        } <
                        div className = {
                            `hideDesktop ${styles.endOfList}`
                        }
                        tabIndex = {
                                contentTabIndex
                            } > {
                                copy.uj
                            } <
                            /div> <
                            /div>

                            <
                            /div> <
                            /Fragment>
                    );
                }
            }

            export default Contest;