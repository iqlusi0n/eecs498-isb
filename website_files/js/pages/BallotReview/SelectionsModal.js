import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import TitleCopy from '../../components/Copy/TitleCopy';
import NavButton from '../../components/NavButton';
import noop from 'lodash/noop';
import BodyCopy from './../../components/Copy/BodyCopy';
import styles from './SelectionsModal.module.css';

/** 
 * ISB Client SelectionsModal Page Component 
 * @module SelectionsModal 
 * @exports module:SelectionsModal */
export default function SelectionsModal({
    copy,
    onCancel,
    onContinue,
    type
}) {
    let title;
    let body;
    let cancelButton;
    let continueButton;
    switch (type) {
        case 'noSelectionsModal':
            title = copy.gz;
            body = `${copy.ha}<br/><br/>${copy.hb}`;
            cancelButton = copy.kg;
            continueButton = copy.hd;
            break;
        case 'clearSelectionsModal':
            title = copy.he;
            body = copy.hf;
            cancelButton = copy.kg;
            continueButton = copy.hh;
            break;
        case 'saveSelectionsModal':
            title = copy.gz;
            body = `${copy.ha}<br/><br/><br/>${copy.hb}`;
            cancelButton = copy.gk;
            continueButton = copy.hd;
            break;
        case 'confirmSaveModal':
            title = copy.gw;
            body = copy.gx;
            continueButton = copy.gk;
            break;
        default:
    }
    const customCopy = {
        title,
        body,
        cancelButton,
        continueButton
    };

    return ( <
        Modal handleClose = {
            onCancel
        }
        title = { < TitleCopy text = {
                customCopy.title
            }
            tabIndex = {
                0
            }
            />}
            body = { <
                BodyCopy
                tabIndex = {
                    0
                }
                text = { <
                    div
                    style = {
                        {
                            fontSize: '20px'
                        }
                    }
                    dangerouslySetInnerHTML = {
                        {
                            __html: customCopy.body
                        }
                    }
                    />
                }
                />
            }
            cancelButton = {
                customCopy.cancelButton && ( <
                    NavButton className = {
                        styles.selectionsModalButton
                    }
                    colorOption = 'secondary'
                    typeOption = 'center'
                    text = {
                        customCopy.cancelButton
                    }
                    onClick = {
                        onCancel
                    }
                    />
                )
            }
            continueButton = {
                customCopy.continueButton && ( <
                    NavButton className = {
                        styles.selectionsModalButton
                    }
                    colorOption = 'yellow'
                    typeOption = 'center'
                    text = {
                        customCopy.continueButton
                    }
                    onClick = {
                        onContinue
                    }
                    />
                )
            }
            />
        );
    }

    SelectionsModal.propTypes = {
        copy: PropTypes.object,
        onCancel: PropTypes.func,
    };

    SelectionsModal.defaultProps = {
        copy: {},
        onCancel: noop,
    };