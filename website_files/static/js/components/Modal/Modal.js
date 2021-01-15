import React, {
    Fragment
} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

/** 
 * ISB Client Modal Component 
 * @module Modal 
 * @exports module:Modal */
export default class Modal extends React.Component {
        constructor(props) {
            super(props);

            this.modalRef = React.createRef();
            this.wrapperRef = React.createRef();

            /* If a priority modal is open, the non-priority modal will no longer be rendered,
            in order to prevent user from accidentally tabbing/focusing it while it's hidden behind the priority modal */
            this.state = {
                hide: false
            };

            this.handleClickAway = this.handleClickAway.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
        }

        componentDidMount() {
            const {
                isPriority
            } = this.props;
            document.addEventListener('keydown', this.handleKeyDown);
            const event = new CustomEvent('onModalStateChange', {
                detail: {
                    isOpen: true,
                    isPriority
                }
            });
            document.dispatchEvent(event);
            this.resetFocus();

            document.addEventListener('onModalStateChange', this.handlePriorityModalStateChange);
        }

        componentWillUnmount() {
            const {
                isPriority
            } = this.props;
            document.removeEventListener('keydown', this.handleKeyDown);
            document.removeEventListener('onModalStateChange', this.handlePriorityModalStateChange);

            const event = new CustomEvent('onModalStateChange', {
                detail: {
                    isOpen: false,
                    isPriority
                }
            });
            document.dispatchEvent(event);
        }

        getFocusableElements() {
            return Array.from(
                /* getting all of the focusable elements in the modal that do not have a tabindex of -1 and don't have display: none */
                this.modalRef.current.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).filter(element => {
                const compStyles = window.getComputedStyle(element);
                return compStyles.getPropertyValue('display') !== 'none';
            });
        }

        /* Only on non-priority modals (non Language/Settings/Nav) */
        handlePriorityModalStateChange = e => {
            const {
                isPriority
            } = this.props;
            if (!isPriority && e.detail.isPriority) {
                this.setState({
                    hide: e.detail.isOpen
                });
            }
        };

        resetFocus() {
            const focusableElements = this.getFocusableElements();
            focusableElements.sort((a, b) => a.tabIndex - b.tabIndex);
            focusableElements[0].focus();
        }

        handleClickAway(e) {
            const {
                handleClose
            } = this.props;

            if (!(this.modalRef && this.modalRef.current.contains(e.target))) {
                handleClose(e);
            }
        }

        handleKeyDown(e) {
            e.stopPropagation();
            const {
                handleClose
            } = this.props;

            // Close modal when Escape key is pressed
            if (e.keyCode === 27 || e.key === 'Escape') {
                handleClose(e);
            }
        }

        render() {
            const {
                id,
                title,
                body,
                cancelButton,
                continueButton,
                isPriority,
                /* isMedPriority just gives it a slightly higher z-index than regular modals */
                isMedPriority,
                hideMobileFooter,
            } = this.props;
            const {
                hide
            } = this.state;
            let styleName = '';
            if (id === 'statementModal') styleName = 'content-flip';
            const parentIsRoot =
                this.wrapperRef &&
                this.wrapperRef.current &&
                this.wrapperRef.current.parentElement.id === 'root';

            return ( <
                Fragment >
                <
                div id = 'modal-wrapper'
                className = {
                    `${styles.modalWrapper} ${parentIsRoot ? styles.parentIsRoot : undefined} ${
            isPriority ? styles.isPriority : undefined
          } ${isMedPriority ? styles.isMedPriority : undefined} ${
            hideMobileFooter ? styles.hideMobileFooter : undefined
          } modal-wrapper-override ${id === 'warnIEML' ? 'content-flip' : undefined}`
                }
                role = 'presentation'
                onClick = {
                    this.handleClickAway
                }
                ref = {
                    this.wrapperRef
                } >
                <
                div id = {
                    id
                }
                className = {
                    `${styles.modal} ${parentIsRoot ? styles.wrapperParentIsRoot : undefined} ${parentIsRoot ? undefined : styleName} ${id === 'warnIEML' ? styles.dir : undefined}`
                }
                ref = {
                    this.modalRef
                } >
                {!hide && ( <
                        div className = {
                            styles.threeRowContent
                        } > {
                            title && < div className = {
                                `modal-title ${styles.top}`
                            } > {
                                title
                            } < /div>} <
                            div className = {
                                styles.middle
                            } > {
                                body
                            } < /div> <
                            div className = {
                                `hiddenTablet hiddenDesktop ${styles.mobileBottom}`
                            }
                            /> <
                            div className = {
                                `hiddenMobile ${styles.bottom}`
                            } > {
                                cancelButton
                            } {
                                continueButton
                            } <
                            /div> <
                            /div>
                        )
                    } <
                    /div> <
                    /div> {
                        !hide && !hideMobileFooter && ( <
                            div className = {
                                `hiddenTablet hiddenDesktop ${styles.stickyBottom} ${
              isPriority ? styles.mobileFooterIsPriority : undefined
            }`
                            } >
                            {
                                cancelButton
                            } {
                                continueButton
                            } <
                            /div>
                        )
                    } <
                    /Fragment>
                );
            }
        }
        Modal.propTypes = {
            /* TODO: add these props to proptypes: title, body, cancelButton, continueButton.
               Cancel and Continue Button functions may not be the same as handleClose function
            */
            handleClose: PropTypes.func.isRequired,
        };