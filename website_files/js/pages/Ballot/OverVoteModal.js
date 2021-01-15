import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import TitleCopy from '../../components/Copy/TitleCopy';
import NavButton from '../../components/NavButton';
import BodyCopy from './../../components/Copy/BodyCopy';

/** 
 * ISB Client OverVoteModal Page Component 
 * @module OverVoteModal 
 * @exports module:OverVoteModal */
export default function OverVoteModal({
    copy,
    onCancel
}) {
    /* TODO(achilles) the following haven't been translated yet */
    const title = < TitleCopy tabIndex = {
        0
    }
    text = {
        copy.jk
    }
    />;
    const body = ( <
        BodyCopy tabIndex = {
            0
        }
        text = { <
            div
            dangerouslySetInnerHTML = {
                {
                    __html: copy.jl,
                }
            }
            />
        }
        />
    );
    const continueText = copy.jm;

    return ( <
        Modal handleClose = {
            onCancel
        }
        title = {
            title
        }
        body = {
            body
        }
        continueButton = { < NavButton colorOption = 'yellow'
            text = {
                continueText
            }
            onClick = {
                onCancel
            }
            />} /
            >
        );
    }

    OverVoteModal.propTypes = {
        copy: PropTypes.object,
        onCancel: PropTypes.func,
        onContinue: PropTypes.func,
    };

    OverVoteModal.defaultProps = {
        copy: {},
        onCancel: () => null,
        onContinue: () => null,
    };