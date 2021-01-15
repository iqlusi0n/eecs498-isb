import React, {
    Fragment
} from 'react';
/* TODO(achilles) this is not the correct svg */
import {
    ReactComponent as Check
} from '../images/check_white.svg';
import styles from './Wayfinding.module.css';

/** 
 * ISB Client Wayfinding Component 
 * @module Wayfinding 
 * @exports module:Wayfinding */
export default function Wayfinding(props) {
    const renderStep = (
        stepNum,
        title,
        statusLine,
        desktopDescription,
        mobileDescription = desktopDescription
    ) => {
        const {
            currentStep,
            landingOverride,
            contentTabIndex
        } = props;

        return ( <
            div className = {
                `
          ${styles.stepWrap}
          ${stepNum === currentStep && styles.current}
          ${stepNum < currentStep && styles.previous}
          ${mode === 'ISB' && styles.isbStepWrap}
          ${mode === 'UOC' && styles.uocStepWrap}
          ${mode === 'RAV' && styles.ravStepWrap}
          `
                /*stepNum === currentStep ? [styles.stepWrap, styles.current].join(' ') : styles.stepWrap*/
            } >
            <
            div className = {
                `${styles.step} ${stepNum === currentStep && styles.currentStep}`
            } >
            <
            div className = {
                styles.top
            } >
            <
            div tabIndex = {
                contentTabIndex
            }
            className = {
                `
              ${styles.stepNum}
              ${stepNum < currentStep && styles.previousStepNum}
              `
            } >
            {
                stepNum < currentStep ? < Check className = {
                    styles.check
                }
                /> : stepNum} <
                /div> <
                div className = {
                    styles.header
                } >
                <
                div className = {
                    styles.title
                }
                tabIndex = {
                    contentTabIndex
                } > {
                    title
                } <
                /div> <
                div className = {
                    styles.status
                }
                tabIndex = {
                    contentTabIndex
                } > {
                    stepNum < currentStep ? copy.hv : statusLine
                } <
                /div> <
                /div> <
                /div> {
                    currentStep === stepNum || landingOverride ? ( <
                        Fragment >
                        <
                        div className = {
                            styles.expander
                        }
                        /> <
                        div className = {
                            `${styles.bottom} hideMobileTablet`
                        }
                        tabIndex = {
                            contentTabIndex
                        } > {
                            desktopDescription
                        } <
                        /div> <
                        div className = {
                            `${styles.bottom} hideDesktop`
                        }
                        tabIndex = {
                            contentTabIndex
                        } > {
                            mobileDescription
                        } <
                        /div> <
                        /Fragment>
                    ) : null
                } <
                /div>

                <
                div className = {
                    styles.pointyWrap
                } >
                <
                div className = {
                    `${styles.pointy} ${stepNum === currentStep && styles.currentPointy}`
                } > { /*<div className={styles.newPointyInner} />*/ } <
                /div> <
                /div> <
                /div>
            );
        };

        const wrapperStyle = landingOverride =>
            landingOverride ? [styles.horizontal, styles.landingOverride].join(' ') : styles.vertical;

        const {
            landingOverride,
            currentStep,
            copy,
            mode
        } = props;

        return ( <
            div className = {
                wrapperStyle(landingOverride)
            } > {
                renderStep(1, copy.ca, {
                    1: copy.cb,
                    2: copy.cb,
                    3: copy.cb
                }[currentStep], copy.cc)
            } {
                renderStep(
                    2,
                    copy.cd, {
                        1: copy.ce,
                        2: copy.ce,
                        3: copy.ce
                    }[currentStep],
                    copy.ho,
                    copy.cf
                )
            } {
                renderStep(3, copy.cg, copy.ch, copy.ci)
            } {
                mode === 'UOC' && renderStep(4, copy.tk, '', copy.tl)
            } <
            /div>
        );
    }