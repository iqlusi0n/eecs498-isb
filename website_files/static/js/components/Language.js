import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import TitleCopy from './Copy/TitleCopy';
import NavButton from './NavButton';
import LANGUAGES from '../resources/languages.json';
import styles from './Language.module.css';

/** 
 * ISB Client Language Component 
 * @module Language 
 * @exports module:Language */
export default function Language({
    selectedLanguage,
    updateSelectedLanguage,
    onClose,
    copy
}) {
    const list = LANGUAGES.map(language => ( <
        div className = {
            styles.buttonContainer
        }
        key = {
            language.code
        } >
        <
        NavButton
        /* aria-label is for screenreaders */
        ariaLabel = {
            `${selectedLanguage === language.code ? copy.va : copy.vb} ${
          language.code === 'EN' ? '' : language.native
        } ${language.EN}`
        }
        className = {
            styles.button
        }
        colorOption = {
            selectedLanguage === language.code ? 'black' : 'white'
        }
        onClick = {
            () => updateSelectedLanguage(language.code)
        } >
        {
            language.code !== 'EN' && ( <
                div className = {
                    selectedLanguage === language.code ? styles.whiteText : styles.blackNativeText
                } >
                {
                    language.native
                } <
                /div>
            )
        } <
        div className = {
            `${selectedLanguage === language.code ? styles.whiteText : styles.blackText} ${
            language.code === 'EN' ? styles.english : undefined
          }`
        } >
        {
            language.EN
        } <
        /div> <
        /NavButton> <
        /div>
    ));

    return ( <
            Modal isPriority handleClose = {
                onClose
            }
            title = { < TitleCopy text = {
                    copy.ae
                }
                tabIndex = {
                    0
                }
                />}
                body = { < div className = {
                        styles.languageContent
                    } > {
                        list
                    } < /div>}
                    cancelButton = { <
                        div className = {
                            styles.settingsBottom
                        } >
                        <
                        button onClick = {
                            onClose
                        }
                        type = 'button'
                        className = {
                            styles.closeButton
                        } > {
                            copy.be
                        } <
                        /button> <
                        /div>
                    }
                    />
                );
            }

            Language.propTypes = {
                selectedLanguage: PropTypes.string,
                updateSelectedLanguage: PropTypes.func,
                onCLose: PropTypes.func,
            };

            Language.defaultProps = {
                selectedLanguage: 'EN',
                updateSelectedLanguage: () => null,
                onCLose: () => null,
            };