import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/Modal/Modal';
import TitleCopy from '../components/Copy/TitleCopy';
import NavButton from '../components/NavButton';
import BodyCopy from './../components/Copy/BodyCopy';
import LANGUAGES from '../resources/languages.json';
import get from 'lodash/get';

function getDisplayLang(code) {
    const langObj = LANGUAGES.find(lang => lang.code === code);
    return get(langObj, 'native', 'no selected');
}

/* TODO: Need to have copy in json for this new modal */
/** 
 * ISB Client NoLangBallotModal Page Component 
 * @module NoLangBallotModal 
 * @exports module:NoLangBallotModal */
export default function NoLangBallotModal({
    selectedLanguage,
    onTryEnglish,
    onTryAnother,
    copy
}) {
    const displayLang = getDisplayLang(selectedLanguage);

    return ( <
            Modal handleClose = {
                () => null
            }
            title = { < TitleCopy tabIndex = {
                    0
                }
                text = {
                    `${copy.ta} ${displayLang} ${copy.tb}`
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
                                __html: `${copy.tc} ${displayLang}`,
                            }
                        }
                        />
                    }
                    />
                }
                cancelButton = { < NavButton onClick = {
                        onTryAnother
                    }
                    text = {
                        copy.td
                    }
                    colorOption = 'secondary' / >
                }
                continueButton = { < NavButton colorOption = 'yellow'
                    text = {
                        copy.te
                    }
                    onClick = {
                        onTryEnglish
                    }
                    />} /
                    >
                );
            }

            NoLangBallotModal.propTypes = {
                selectedLanguage: PropTypes.string,
                onTryEnglish: PropTypes.func,
                onTryAnother: PropTypes.func,
            };

            NoLangBallotModal.defaultProps = {
                selectedLanguage: 'no selected language',
                onTryEnglish: () => null,
                onTryAnother: () => null,
            };