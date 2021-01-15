import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../components/Modal/Modal';
import TitleCopy from '../components/Copy/TitleCopy';
import NavButton from '../components/NavButton';
import BodyCopy from './../components/Copy/BodyCopy';

/* TODO: Need to have copy in json for this new modal */
/** 
 * ISB Client NoActiveBallotModal Page Component 
 * @module NoActiveBallotModal 
 * @exports module:NoActiveBallotModal */
export default function NoActiveBallotModal({
    goBack,
    copy
}) {
    return ( <
            Modal handleClose = {
                goBack
            }
            title = { < TitleCopy text = {
                    copy.ty
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
                        dangerouslySetInnerHTML = {
                            {
                                __html: copy.tz,
                            }
                        }
                        />
                    }
                    />
                }
                continueButton = { < NavButton colorOption = 'yellow'
                    text = {
                        copy.ua
                    }
                    onClick = {
                        goBack
                    }
                    />} /
                    >
                );
            }

            NoActiveBallotModal.propTypes = {
                goBack: PropTypes.func,
            };

            NoActiveBallotModal.defaultProps = {
                goBack: () => null,
            };