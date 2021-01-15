import React from 'react';
import noop from 'lodash/noop';
import Modal from '../components/Modal/Modal';
import NavButton from '../components/NavButton';
import TitleCopy from '../components/Copy/TitleCopy';
import BodyCopy from '../components/Copy/BodyCopy';

/** 
 * ISB Client PrivacyModal Utility Component 
 * @module PrivacyModal 
 * @exports module:PrivacyModal */
export default function PrivacyModal({
    clearSaved,
    useSaved,
    copy
}) {
    return ( <
            Modal handleClose = {
                noop
            }
            title = { < TitleCopy tabIndex = {
                    0
                }
                text = {
                    copy.fr
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
                                __html: copy.fs,
                            }
                        }
                        />
                    }
                    />
                }
                cancelButton = { < NavButton onClick = {
                        clearSaved
                    }
                    text = {
                        copy.ft
                    }
                    colorOption = 'secondary' / >
                }
                continueButton = { < NavButton colorOption = 'yellow'
                    onClick = {
                        useSaved
                    }
                    text = {
                        copy.fu
                    }
                    />} /
                    >
                );
            }