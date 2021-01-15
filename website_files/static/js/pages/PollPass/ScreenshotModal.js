import React from 'react';
import Modal from '../../components/Modal/Modal';
import TitleCopy from '../../components/Copy/TitleCopy';
import NavButton from '../../components/NavButton';
import styles from './ScreenshotModal.module.css';

/** 
 * ISB Client ScreenshotModal Page Component 
 * @module ScreenshotModal 
 * @exports module:ScreenshotModal */
export default function ScreenshotModal({
    onCancel,
    copy,
    qrCode
}) {
    return ( <
            Modal handleClose = {
                onCancel
            }
            title = { < TitleCopy tabIndex = {
                    0
                }
                text = {
                    copy.title
                }
                />}
                body = { < div className = {
                        styles.qrContainer
                    } > {
                        qrCode
                    } < /div>}
                    cancelButton = { <
                        NavButton
                        colorOption = 'yellow'
                        typeOption = 'center'
                        text = {
                            copy.cancelButton
                        }
                        onClick = {
                            onCancel
                        }
                        />
                    }
                    />
                );
            }