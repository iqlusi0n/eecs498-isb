import React, {
    Fragment
} from 'react';
import {
    Link
} from 'react-router-dom';
import get from 'lodash/get';
import SelectionsModal from './SelectionsModal';
import TitleCopy from '../../components/Copy/TitleCopy';
import BodyCopy from '../../components/Copy/BodyCopy';
import NavButton from '../../components/NavButton';
import DefaultStickyFooter from '../../components/LayoutWrappers/DefaultStickyFooter';
import DefaultColumnLayout from '../../components/LayoutWrappers/DefaultColumnLayout';
import {
    ReactComponent as LeftCarrot
} from '../../images/left_carrot.svg';
import styles from './BallotReview.module.css';

import {
    getId,
    getContestTitle,
    getVoteForMax,
    getCandidateName,
    getCandidate,
    getCandidateIsWriteIn,
    getNumCompletedContests,
    getTotalNumSelected,
    getIsContest,
} from '../../utils/BallotGetters';
import LinkButton from '../../components/LinkButton';

/** 
 * ISB Client BallotReview Page Component 
 * @module BallotReview 
 * @exports module:BallotReview */
export default class BallotReview extends React.Component {
        constructor(props) {
            super(props);
            // Values: '', 'clearSelectionsModal', 'saveSelectionsModal', 'confirmSaveModal'
            this.state = {
                selectionsModal: ''
            };

            this.renderContest = this.renderContest.bind(this);
            this.onSelectChange = this.onSelectChange.bind(this);
            this.onSaveSelections = this.onSaveSelections.bind(this);
            this.onClearSelections = this.onClearSelections.bind(this);
            this.toPollPass = this.toPollPass.bind(this);
            this.showClearSelectionsModal = this.showClearSelectionsModal.bind(this);
            this.showSaveSelectionsModal = this.showSaveSelectionsModal.bind(this);
            this.hideSelectionsModal = this.hideSelectionsModal.bind(this);
        }

        toPollPass() {
            const {
                history
            } = this.props;
            history.push('/pollpass');
        }

        onClearSelections() {
            const {
                updateSelectedCandidates,
                updateWriteInValues
            } = this.props;
            updateSelectedCandidates({});
            updateWriteInValues({});
            this.hideSelectionsModal();
        }

        onSaveSelections() {
            const {
                updateSelectedPrivacy,
                updateSelectedCandidates,
                updateWriteInValues,
                selections,
                writeInValues,
            } = this.props;
            updateSelectedPrivacy(true);
            //Re-saving the existing selections, but this time it will also save them to localStorage because of updateSelectedPrivacy(true)
            updateSelectedCandidates(selections);
            updateWriteInValues(writeInValues);
            this.showConfirmSaveModal();
        }

        onSelectChange(contest) {
            const {
                history,
                onSelectBallotItem
            } = this.props;
            onSelectBallotItem(getId(contest));
            history.push('/ballot');
        }

        showClearSelectionsModal() {
            this.setState({
                selectionsModal: 'clearSelectionsModal'
            });
        }

        showSaveSelectionsModal() {
            this.setState({
                selectionsModal: 'saveSelectionsModal'
            });
        }

        showConfirmSaveModal() {
            this.setState({
                selectionsModal: 'confirmSaveModal'
            });
        }

        hideSelectionsModal() {
            this.setState({
                selectionsModal: ''
            });
        }

        renderCustomContent(customContent, key) {
            const {
                contentTabIndex,
                selectedLanguage,
                copy
            } = this.props;

            return ( <
                div
                /* key needs to be idx since can have the exact same custom content appear more than once */
                key = {
                    key
                }
                className = {
                    `hiddenDesktop ${styles.customContent} ${styles.contest}`
                } >
                <
                div className = {
                    styles.left
                } >
                <
                BodyCopy tabIndex = {
                    contentTabIndex
                }
                className = {
                    styles.contestTitle
                }
                text = {
                    customContent.header[selectedLanguage]
                }
                /> <
                /div> <
                div className = {
                    styles.right
                } >
                <
                NavButton className = {
                    styles.navButton
                }
                colorOption = 'white'
                text = {
                    copy.zta
                }
                onClick = {
                    () => this.onSelectChange(customContent)
                }
                tabIndex = {
                    contentTabIndex
                }
                /> <
                /div> <
                /div>
            );
        }

        renderContest(contest) {
            const {
                selections,
                writeInValues,
                copy,
                contentTabIndex
            } = this.props;
            const selectionsForContest = get(selections, `${getId(contest)}`, []);
            const maxSelections = getVoteForMax(contest);
            const numSelectionsRem = maxSelections - selectionsForContest.length;

            /* TODO(achilles) the copy for multiple selections available is incorrect */
            let selectionsAvailableText;
            if (numSelectionsRem < 1) {
                selectionsAvailableText = '';
            } else if (numSelectionsRem === 1) {
                selectionsAvailableText = copy.go;
            } else {
                selectionsAvailableText = `${numSelectionsRem} ${copy.gp}`;
            }

            return ( <
                div key = {
                    getId(contest)
                }
                className = {
                    styles.contest
                } >
                <
                div className = {
                    styles.left
                } >
                <
                BodyCopy tabIndex = {
                    contentTabIndex
                }
                className = {
                    styles.contestTitle
                }
                text = {
                    getContestTitle(contest) || copy.tm
                }
                />

                {
                    selectionsForContest.map(candidateId => {
                        const candidate = getCandidate(candidateId, contest);
                        const name = getCandidateName(candidate);
                        const writeInValue = get(writeInValues, candidateId, null);
                        const isWriteIn = getCandidateIsWriteIn(candidate);
                        return ( <
                            div key = {
                                candidateId
                            }
                            className = {
                                `${isWriteIn && styles.writeInWrapper}`
                            } > {
                                isWriteIn && ( <
                                    span className = {
                                        styles.writeIn
                                    }
                                    tabIndex = {
                                        contentTabIndex
                                    } > {
                                        copy.ul
                                    } <
                                    /span>
                                )
                            } <
                            BodyCopy className = {
                                styles.candidate
                            }
                            text = {
                                writeInValue || name || copy.tn
                            }
                            tabIndex = {
                                contentTabIndex
                            }
                            /> <
                            /div>
                        );
                    })
                }

                {
                    Boolean(numSelectionsRem) && ( <
                        BodyCopy tabIndex = {
                            contentTabIndex
                        }
                        className = {
                            styles.blankCandidate
                        }
                        style = {
                            {
                                backgroundColor: 'var(--review-gray)'
                            }
                        }
                        text = {
                            selectionsAvailableText
                        }
                        />
                    )
                } <
                /div>

                <
                div className = {
                    styles.right
                } >
                <
                NavButton className = {
                    styles.navButton
                }
                colorOption = 'white'
                text = {
                    copy.gq
                }
                onClick = {
                    () => this.onSelectChange(contest)
                }
                tabIndex = {
                    contentTabIndex
                }
                /> <
                /div> <
                /div>
            );
        }

        render() {
                const {
                    selectionsModal
                } = this.state;
                const {
                    copy,
                    contestsInOrder,
                    ballotItemsInOrder,
                    selections,
                    mode,
                    selectedPrivacy,
                    contentTabIndex,
                } = this.props;
                if (!ballotItemsInOrder) return null;
                const hasSelections = getTotalNumSelected(selections) > 0;

                let selectionsModalContinue;
                if (selectionsModal === 'clearSelectionsModal') {
                    selectionsModalContinue = this.onClearSelections;
                } else if (selectionsModal === 'saveSelectionsModal') {
                    selectionsModalContinue = this.onSaveSelections;
                } else if (selectionsModal === 'confirmSaveModal') {
                    selectionsModalContinue = this.hideSelectionsModal;
                }

                return ( <
                    Fragment > {
                        selectionsModal && ( <
                            SelectionsModal onCancel = {
                                this.hideSelectionsModal
                            }
                            onContinue = {
                                selectionsModalContinue
                            }
                            copy = {
                                copy
                            }
                            type = {
                                selectionsModal
                            }
                            />
                        )
                    } <
                    DefaultColumnLayout >
                    <
                    div className = {
                        styles.review
                    } >
                    <
                    TitleCopy tabIndex = {
                        contentTabIndex
                    }
                    text = {
                        copy.gl
                    }
                    /> <
                    BodyCopy tabIndex = {
                        contentTabIndex
                    }
                    className = {
                        `hiddenMobileTablet ${styles.bodyCopy}`
                    }
                    text = { < div dangerouslySetInnerHTML = {
                            {
                                __html: `${copy.gm}<br/>${copy.gn}`
                            }
                        }
                        />} /
                        >
                        <
                        BodyCopy
                        tabIndex = {
                            contentTabIndex
                        }
                        className = {
                            `hiddenDesktop ${styles.bodyCopy}`
                        }
                        text = { < div dangerouslySetInnerHTML = {
                                {
                                    __html: `${copy.kl}<br/>${copy.km}`
                                }
                            }
                            />} /
                            >
                            <
                            Link to = '/ballot'
                            className = {
                                styles.returnButton
                            }
                            tabIndex = {
                                contentTabIndex
                            } >
                            <
                            LeftCarrot / >
                            <
                            span className = {
                                styles.returnCopy
                            } > {
                                copy.kq
                            } < /span> <
                            /Link> <
                            div className = {
                                styles.contests
                            } > {
                                ballotItemsInOrder.map((item, idx) =>
                                    getIsContest(item) ? this.renderContest(item) : this.renderCustomContent(item, idx)
                                )
                            } <
                            div className = {
                                styles.eol
                            }
                            tabIndex = {
                                contentTabIndex
                            } > {
                                copy.gr
                            } <
                            /div> <
                            /div> <
                            /div> <
                            LinkButton
                            className = {
                                `hiddenDesktop ${styles.linkButton}`
                            }
                            text = {
                                copy.gs
                            }
                            onClick = {
                                this.showClearSelectionsModal
                            }
                            tabIndex = {
                                contentTabIndex
                            }
                            /> {
                                !selectedPrivacy && ( <
                                    LinkButton className = {
                                        `hiddenDesktop ${styles.linkButton}`
                                    }
                                    text = {
                                        copy.gt
                                    }
                                    onClick = {
                                        this.showSaveSelectionsModal
                                    }
                                    tabIndex = {
                                        contentTabIndex
                                    }
                                    />
                                )
                            } <
                            /DefaultColumnLayout>

                            <
                            DefaultStickyFooter >
                            <
                            NavButton
                            className = {
                                `hiddenMobile hiddenTablet ${styles.navButtonFooter}`
                            }
                            colorOption = 'white'
                            text = {
                                copy.gs
                            }
                            onClick = {
                                this.showClearSelectionsModal
                            }
                            tabIndex = {
                                contentTabIndex
                            }
                            /> {
                                !selectedPrivacy && ( <
                                    NavButton className = {
                                        `hiddenMobile hiddenTablet ${styles.navButtonFooter}`
                                    }
                                    width = 'auto'
                                    margin = '0 0 0 28px'
                                    colorOption = 'white'
                                    text = {
                                        copy.gt
                                    }
                                    onClick = {
                                        this.showSaveSelectionsModal
                                    }
                                    tabIndex = {
                                        contentTabIndex
                                    }
                                    />
                                )
                            } <
                            div className = {
                                styles.completed
                            } >
                            <
                            div
                            className = {
                                styles.numberCompleted
                            }
                            tabIndex = {
                                contentTabIndex
                            } >
                            {
                                `${getNumCompletedContests(contestsInOrder, selections) +
              '/' +
              contestsInOrder.length}`
                            } < /div> <
                            div className = 'hiddenMobile'
                            tabIndex = {
                                contentTabIndex
                            } > {
                                copy.gu
                            } <
                            /div> <
                            div className = 'hiddenTablet hiddenDesktop'
                            tabIndex = {
                                contentTabIndex
                            } > {
                                copy.hv
                            } <
                            /div> <
                            /div> <
                            NavButton
                            className = {
                                `${styles.confirmButton} ${
              hasSelections || mode !== 'ISB' ? '' : styles.hidden
            }`
                            }
                            colorOption = 'yellow'
                            text = {
                                copy.gv
                            }
                            typeOption = 'right'
                            onClick = {
                                this.toPollPass
                            }
                            tabIndex = {
                                contentTabIndex
                            }
                            /> <
                            /DefaultStickyFooter> <
                            /Fragment>
                        );
                    }
                }