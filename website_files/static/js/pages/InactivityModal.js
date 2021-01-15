import React from 'react';
import Modal from '../components/Modal/Modal';
import TitleCopy from '../components/Copy/TitleCopy';
import NavButton from '../components/NavButton';
import BodyCopy from './../components/Copy/BodyCopy';

/* TODO: Need to have copy in json for this new modal */
/** 
 * ISB Client InactivityModal Page Component 
 * @module InactivityModal 
 * @exports module:InactivityModal */
export default function InactivityModal({
    handleClose,
    copy
}) {
    return ( <
            Modal isMedPriority handleClose = {
                handleClose
            }
            title = { < TitleCopy tabIndex = {
                    0
                }
                text = {
                    copy.ztb
                }
                />}
                body = { <
                    BodyCopy
                    tabIndex = {
                        0
                    }
                    text = { <
                        div
                        dangerouslySetInnerHTML = {
                            {
                                __html: copy.ztc,
                            }
                        }
                        />
                    }
                    />
                }
                continueButton = { < NavButton colorOption = 'yellow'
                    text = {
                        copy.ztd
                    }
                    onClick = {
                        handleClose
                    }
                    />} /
                    >
                );
            }