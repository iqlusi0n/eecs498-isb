import React, {
    Fragment,
    Component
} from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import StatementModal from './StatementModal';
import WriteInModal from './WriteInModal';
import {
    ReactComponent as Info
} from '../../images/info_2.svg';
import {
    ReactComponent as SelectedCheck
} from '../../images/check_2_selected_title.svg';
import BodyCopy from '../../components/Copy/BodyCopy';
import Copy from '../../utils/CopyManager';
import styles from './Candidate.module.css';

import {
    getCandidateName,
    getCandidateOccupation,
    getCandidateParty,
    getCandidateId,
} from '../../utils/BallotGetters';

/* sometimes candidate occupations are null, but sometimes they're "null". */
function digitalFoundry(str) {
    return str === 'null' ? '' : str;
}

/** 
 * ISB Client Candidate Page Component 
 * @module Candidate 
 * @exports module:Candidate */
export default class Candidate extends Component {
    constructor(props) {
        super(props);
        this.candRef = React.createRef();
        this.infoRef = React.createRef();

        this.state = {
            showStatementModal: false,
            showWriteInModal: false,
            hasSelectedHoverCSS: false,
            queuedFocusRef: undefined,
        };

        this.toggleStatementModal = this.toggleStatementModal.bind(this);
        this.allowSelectedHoverCSS = this.allowSelectedHoverCSS.bind(this);
        this.removeSelectedHoverCSS = this.removeSelectedHoverCSS.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            queuedFocusRef: currQueuedFocusRef
        } = this.state;

        if (prevState.queuedFocusRef !== currQueuedFocusRef && currQueuedFocusRef) {
            this[currQueuedFocusRef].current.focus();
            this.clearQueuedFocusRef();
        }

        if (!prevProps.isFocusQueued && this.props.isFocusQueued) {
            this.candRef.current.focus();
            this.props.clearQueuedCandidateFocus();
        }
    }

    clearQueuedFocusRef() {
        this.setState({
            queuedFocusRef: undefined
        });
    }

    toggleStatementModal(value) {
        this.setState({
            showStatementModal: value
        });
    }

    toggleWriteInModal(value) {
        this.setState({
            showWriteInModal: value
        });
    }

    allowSelectedHoverCSS() {
        if (this.props.isSelected) {
            this.setState({
                hasSelectedHoverCSS: true
            });
        }
    }

    removeSelectedHoverCSS() {
        this.setState({
            hasSelectedHoverCSS: false
        });
    }

    getAriaLabel(name, party, job) {
        const {
            isSelected,
            isWriteIn,
            writeInValue,
            mode,
            copy
        } = this.props;
        return `${isSelected ? copy.va : copy.vb} ${
      isWriteIn && isSelected && mode === 'ISB'
        ? (writeInValue || name) + '. ' + copy.gb
        : writeInValue || name
    }. ${party ? party + '.' : ''} ${digitalFoundry(job)}`;
    }

    render() {
            const {
                candidate,
                parties,
                isSelected,
                isWriteIn,
                onSelectCandidate,
                updateWriteInValues,
                writeInValue,
                mode,
                language,
                copy,
                contentTabIndex,
                setStatementModal,
                isPresidential
            } = this.props;
            const {
                hasSelectedHoverCSS
            } = this.state;

            const name = getCandidateName(candidate);
            const job = getCandidateOccupation(candidate);
            const party = get(parties, getCandidateParty(candidate), null);

            const candidateClass = [
                // isSelected && styles.selected,
                isWriteIn && styles.writeIn,
                styles.candidate,
            ].join(' ');

            /* We bind arguments to the modal here but render it as part of the header. This
             * is awkward but necessary because the application data and UI hierarchy do not
             * align. This might be unavoidable, by definition, when using modals. We should
             * probably add some instrumentation for pushing modals up the DOM tree. */
            const statementModal = ( <
                StatementModal statements = {
                    candidate.statements || []
                }
                onClose = {
                    () => {
                        setStatementModal(null);
                        this.setState({
                            queuedFocusRef: 'infoRef'
                        });
                    }
                }
                copy = {
                    Copy('AnalysisModal', mode, language)
                }
                />
            );
            /* We need to render the writeInModal inside the Header component's dom node because
             * of position: fixed quirks, but the relevant application data is in this Ballot
             * component. So we need to the bind the ballot values here and pass the bound
             * component back up the component hierarchy. We can't bind all the values here though,
             * otherwise the component wouldn't re-render when the values change, so we only 
             * partially bind the WriteInModal's arguments and pass the new component back up
             * the component hierarchy. This is super gross and we should more formally handle 
             * situations like this where the data hierarchy and the UI hierarchy are not aligned. */
            const writeInModal = writeInValues => ( <
                WriteInModal writeInValue = {
                    get(writeInValues, getCandidateId(candidate))
                }
                onClose = {
                    (e, isSave) => {
                        setStatementModal(false);

                        if (!isSave || (isSave && isSelected)) {
                            this.setState({
                                queuedFocusRef: 'candRef'
                            });
                        }
                    }
                }
                onClear = {
                    () => {
                        updateWriteInValues(null);
                        isSelected && onSelectCandidate();
                    }
                }
                onSave = {
                    () => isSelected || onSelectCandidate()
                }
                updateWriteInValues = {
                    updateWriteInValues
                }
                copy = {
                    copy
                }
                />
            );

            return ( <
                    Fragment >
                    <
                    div className = {
                        candidateClass
                    } >
                    <
                    button type = "button"
                    /* aria-label is for screenreaders. Adding 'selected' to text in nameContainer + duplicating that text so it is read */
                    aria - label = {
                        this.getAriaLabel(name, party, job)
                    }
                    ref = {
                        this.candRef
                    }
                    className = {
                        `${isSelected && styles.selected} ${hasSelectedHoverCSS &&
              styles.selectedHover} ${language === 'FA' ? styles.candidateBoxFA : styles.candidateBox}`
                    }
                    onMouseEnter = {
                        this.allowSelectedHoverCSS
                    }
                    onMouseLeave = {
                        this.removeSelectedHoverCSS
                    }
                    onClick = {
                        () => {
                            isWriteIn && mode !== 'ISB' ? setStatementModal(writeInModal) : onSelectCandidate();
                        }
                    }
                    tabIndex = {
                        contentTabIndex
                    } >
                    <
                    div className = {
                        `${styles.check} ${hasSelectedHoverCSS ? '' : styles.white} ${language === 'FA' ? 'content-flip' : ''}`
                    } > {
                        isSelected && < SelectedCheck / >
                    } <
                    /div> {
                        isPresidential && !isWriteIn ?
                            <
                            div >
                            <
                            div className = {
                                styles.nameContainer
                            } >
                            <
                            BodyCopy
                        className = {
                            styles.name
                        }
                        text = {
                            name.split(/\r?\n/)[0]
                        }
                        /> <
                        BodyCopy className = {
                            styles.job
                        }
                        text = {
                            digitalFoundry(job).split(/\r?\n/)[0]
                        }
                        /> <
                        BodyCopy
                        className = {
                            styles.name
                        }
                        text = {
                            name.split(/\r?\n/)[1]
                        }
                        /> <
                        BodyCopy className = {
                            styles.job
                        }
                        text = {
                            digitalFoundry(job).split(/\r?\n/)[1]
                        }
                        /> {
                            party && < BodyCopy className = {
                                styles.job
                            }
                            text = {
                                party
                            }
                            />} <
                            /div> <
                            /div> : <
                            div >
                                <
                                div className = {
                                    styles.nameContainer
                                } >
                                <
                                BodyCopy
                            className = {
                                styles.name
                            }
                            text = {
                                isWriteIn && isSelected && mode === 'ISB' ? copy.gb : writeInValue || name
                            }
                            /> {
                                party && < BodyCopy className = {
                                    styles.job
                                }
                                text = {
                                    party
                                }
                                />} <
                                BodyCopy className = {
                                    styles.job
                                }
                                text = {
                                    digitalFoundry(job)
                                }
                                /> <
                                /div> <
                                /div>} <
                                /button>

                                {
                                    !isWriteIn && ( <
                                        button ref = {
                                            this.infoRef
                                        }
                                        className = {
                                            styles.candidateInfo
                                        }
                                        onClick = {
                                            () => setStatementModal(statementModal)
                                        }
                                        tabIndex = {
                                            contentTabIndex
                                        } >
                                        <
                                        Info / >
                                        <
                                        span className = {
                                            styles.infoLabel
                                        } > Info < /span> <
                                        /button>
                                    )
                                } <
                                /div> <
                                /Fragment>
                            );
                        }
                    }

                    Candidate.defaultProps = {
                        candidate: {},
                        isSelected: false,
                        isWriteIn: false,
                        onSelectCandidate: () => null,
                        updateWriteInValue: () => null,
                    };

                    Candidate.propTypes = {
                        candidate: PropTypes.object,
                        isSelected: PropTypes.bool,
                        isWriteIn: PropTypes.bool,
                        onSelectCandidate: PropTypes.func,
                        updateWriteInValue: PropTypes.func,
                    };