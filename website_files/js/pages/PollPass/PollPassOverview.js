import React, {
    Fragment
} from 'react';
import DefaultColumnLayout from '../../components/LayoutWrappers/DefaultColumnLayout';
import DefaultStickyFooter from '../../components/LayoutWrappers/DefaultStickyFooter';
import TitleCopy from '../../components/Copy/TitleCopy';
import BodyCopy from '../../components/Copy/BodyCopy';
import NavButton from '../../components/NavButton';
import Wayfinding from '../../components/Wayfinding';
import Copy from '../../utils/CopyManager';
import styles from './PollPassOverview.module.css';

/** 
 * ISB Client PollPassOverview Page Component 
 * @module PollPassOverview 
 * @exports module:PollPassOverview */
export default function PollPassOverview(props) {
    const {
        onContinue,
        copy,
        mode,
        language,
        contentTabIndex
    } = props;

    return ( <
            Fragment >
            <
            DefaultColumnLayout >
            <
            div className = {
                styles.row
            } >
            <
            div className = {
                styles.column
            } >
            <
            div className = {
                styles.copy
            } >
            <
            TitleCopy tabIndex = {
                contentTabIndex
            }
            text = {
                copy.zhi
            }
            /> <
            BodyCopy tabIndex = {
                contentTabIndex
            }
            className = {
                `hiddenMobileTablet ${styles.pollPassDesktopText}`
            }
            text = { < div dangerouslySetInnerHTML = {
                    {
                        __html: copy.zhj
                    }
                }
                />} /
                >
                <
                BodyCopy
                tabIndex = {
                    contentTabIndex
                }
                className = {
                    `hiddenDesktop ${styles.pollPassText}`
                }
                text = { < div dangerouslySetInnerHTML = {
                        {
                            __html: copy.ki
                        }
                    }
                    />} /
                    >
                    <
                    /div> <
                    /div>

                    <
                    div className = {
                        styles.column
                    } >
                    <
                    Wayfinding
                    currentStep = {
                        2
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
                    NavButton
                    className = {
                        styles.generatePollPass
                    }
                    colorOption = 'yellow'
                    typeOption = 'right'
                    text = {
                        copy.zhr
                    }
                    onClick = {
                        onContinue
                    }
                    tabIndex = {
                        contentTabIndex
                    }
                    /> <
                    /DefaultStickyFooter> <
                    /Fragment>
                );
            }