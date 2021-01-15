import React, {
    Fragment
} from 'react';
import PropTypes from 'prop-types';
import BodyCopy from '../components/Copy/BodyCopy';
import TitleCopy from '../components/Copy/TitleCopy';
import NavButton from '../components/NavButton';
import DefaultColumnLayout from '../components/LayoutWrappers/DefaultColumnLayout';
import DefaultStickyFooter from '../components/LayoutWrappers/DefaultStickyFooter';
import Wayfinding from '../components/Wayfinding';
import {
    History
} from '../utils/types';
import Copy from '../utils/CopyManager';
import {
    ReactComponent as BallotOath
} from '../images/ballot_oath.svg';
import styles from './Oath.module.css';

/** 
 * ISB Client Oath Page Component 
 * @module Oath 
 * @exports module:Oath */
export default function Oath({
    copy,
    history,
    mode,
    language,
    contentTabIndex,
    updateCompletedBallots,
    electionId,
    clearSelections,
    hasIncompleteBallots,
}) {
    const onClick = async () => {
        await updateCompletedBallots(electionId);
        if (hasIncompleteBallots) {
            history.push('/elections');
        } else {
            history.push('/valediction');
            clearSelections();
        }
    };

    return ( <
        Fragment >
        <
        DefaultColumnLayout >
        <
        div className = {
            styles.oath
        } >
        <
        div className = {
            styles.left
        } >
        <
        TitleCopy text = {
            copy.ub
        }
        tabIndex = {
            contentTabIndex
        }
        /> <
        BodyCopy text = {
            copy.uc
        }
        className = {
            styles.bodyCopy
        }
        tabIndex = {
            contentTabIndex
        }
        /> <
        BodyCopy text = { < div dangerouslySetInnerHTML = {
                {
                    __html: copy.ud
                }
            }
            />}
            className = {
                styles.bodyCopy
            }
            tabIndex = {
                contentTabIndex
            }
            /> <
            BallotOath / >
            <
            /div>

            <
            div className = {
                styles.right
            } >
            <
            Wayfinding
            currentStep = {
                3
            }
            copy = {
                Copy('Wayfinding', mode, language)
            }
            mode = {
                mode
            }
            contentTabIndex = {
                contentTabIndex
            }
            /> <
            /div> <
            /div> <
            /DefaultColumnLayout>

            <
            DefaultStickyFooter >
            <
            div className = {
                styles.findYourContainer
            } >
            <
            NavButton
            colorOption = 'yellow'
            typeOption = 'right'
            onClick = {
                onClick
            }
            tabIndex = {
                contentTabIndex
            }
            text = {
                copy.ue
            }
            /> <
            /div> <
            /DefaultStickyFooter> <
            /Fragment>
        );
    }

    Oath.propTypes = {
        copy: PropTypes.object,
        history: History,
    };

    Oath.defaultProps = {
        copy: {},
        history: {
            push: () => null
        },
    };