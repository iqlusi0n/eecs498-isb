import React from 'react';
import TitleCopy from '../components/Copy/TitleCopy';
import BodyCopy from '../components/Copy/BodyCopy';
import {
    ReactComponent as Checkmark
} from '../images/check_blue.svg';
import styles from './Privacy.module.css';

/** 
 * ISB Client Privacy Page Component 
 * @module Privacy 
 * @exports module:Privacy */
export default function Privacy({
    copy,
    inModal,
    contentTabIndex,
    selectedPrivacy,
    updateSelectedPrivacy,
    history,
}) {
    const onSelectPrivacy = bool => {
        updateSelectedPrivacy(bool);
        if (!inModal) {
            history.push('/overview');
        }
    };

    /*explicitly looking at selectedPrivacy === true or false as undefined is another possibility when user hasn't made a selection yet */
    const privacyTemplate = ( <
            div className = {
                inModal ? styles.modal : styles.page
            } >
            <
            header className = {
                styles.header
            } >
            <
            TitleCopy className = {
                styles.titleCopy
            }
            text = {
                copy.ev
            }
            tabIndex = {
                inModal ? 0 : contentTabIndex
            }
            /> <
            BodyCopy className = {
                styles.bodyCopy
            }
            text = {
                copy.ew
            }
            tabIndex = {
                inModal ? 0 : contentTabIndex
            }
            /> <
            /header> <
            div className = {
                styles.body
            } >
            <
            div className = {
                `${selectedPrivacy === true && styles.isSelected} ${styles.choiceContainer}`
            } >
            <
            div className = {
                styles.choice
            } >
            <
            div className = {
                styles.choiceContent
            } >
            <
            BodyCopy className = {
                `hiddenMobile ${styles.privacyChoiceText1}`
            }
            text = { < div dangerouslySetInnerHTML = {
                    {
                        __html: copy.ex
                    }
                }
                />}
                tabIndex = {
                    inModal ? 0 : contentTabIndex
                }
                /> <
                BodyCopy
                className = {
                    `hiddenMobile ${styles.privacyChoiceText2}`
                }
                text = {
                    `${copy.ey} ${copy.ez} ${copy.fa}`
                }
                tabIndex = {
                    inModal ? 0 : contentTabIndex
                }
                /> <
                BodyCopy
                className = {
                    `hiddenDesktop hiddenTablet ${styles.privacyChoiceText2}`
                }
                text = { < div dangerouslySetInnerHTML = {
                        {
                            __html: copy.fb
                        }
                    }
                    />}
                    tabIndex = {
                        inModal ? 0 : contentTabIndex
                    }
                    />

                    <
                    button
                    className = {
                        `${styles.privacyBtn} ${selectedPrivacy === false &&
                  styles.isUnselected}`
                    }
                    /* user is saying they're on a PRIVATE device */
                    onClick = {
                        () => onSelectPrivacy(true)
                    }
                    tabIndex = {
                        inModal ? 0 : contentTabIndex
                    } >
                    {
                        selectedPrivacy === true && < Checkmark / >
                    } <
                    span
                    /* aria-label is for screenreaders */
                    aria - label = {
                        `${selectedPrivacy ? copy.va : copy.vb} ${copy.eo}`
                    }
                    className = {
                        `${styles.privacyBtnCopy} hiddenTabletDesktop`
                    } >
                    {
                        copy.eo
                    } <
                    /span> <
                    span
                    aria - label = {
                        `${selectedPrivacy ? copy.va : copy.vb} ${copy.ko}`
                    }
                    className = {
                        `${styles.privacyBtnCopy} hiddenMobile`
                    } >
                    {
                        copy.ko
                    } <
                    /span> <
                    /button> <
                    /div> <
                    /div> <
                    /div>

                    <
                    div
                    className = {
                        `${selectedPrivacy === false && styles.isSelected} ${styles.choiceContainer}`
                    } >
                    <
                    div className = {
                        styles.choice
                    } >
                    <
                    div className = {
                        styles.choiceContent
                    } >
                    <
                    BodyCopy
                    className = {
                        `hiddenMobile ${styles.privacyChoiceText1}`
                    }
                    text = { < div dangerouslySetInnerHTML = {
                            {
                                __html: copy.fc
                            }
                        }
                        />}
                        tabIndex = {
                            inModal ? 0 : contentTabIndex
                        }
                        /> <
                        BodyCopy
                        className = {
                            `hiddenMobile ${styles.privacyChoiceText2}`
                        }
                        text = {
                            `${copy.fd} ${copy.fe} ${copy.ff}`
                        }
                        tabIndex = {
                            inModal ? 0 : contentTabIndex
                        }
                        /> <
                        BodyCopy
                        className = {
                            `hiddenTablet hiddenDesktop ${styles.privacyChoiceText2}`
                        }
                        text = { < div dangerouslySetInnerHTML = {
                                {
                                    __html: copy.fg
                                }
                            }
                            />}
                            tabIndex = {
                                inModal ? 0 : contentTabIndex
                            }
                            />

                            <
                            button
                            className = {
                                `${styles.privacyBtn} ${selectedPrivacy === true &&
                  styles.isUnselected}`
                            }
                            /* user is saying they're on a PUBLIC device */
                            onClick = {
                                () => onSelectPrivacy(false)
                            }
                            tabIndex = {
                                inModal ? 0 : contentTabIndex
                            } >
                            {
                                selectedPrivacy === false && < Checkmark / >
                            } <
                            span
                            /* aria-label is for screenreaders */
                            aria - label = {
                                `${selectedPrivacy === false ? copy.va : copy.vb} ${copy.rb}`
                            }
                            className = {
                                `${styles.privacyBtnCopy} hiddenTabletDesktop`
                            } >
                            {
                                copy.rb
                            } <
                            /span> <
                            span
                            aria - label = {
                                `${selectedPrivacy === false ? copy.va : copy.vb} ${copy.kp}`
                            }
                            className = {
                                `${styles.privacyBtnCopy} hiddenMobile`
                            } >
                            {
                                copy.kp
                            } <
                            /span> <
                            /button> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            div className = {
                                `hiddenDesktop hiddenTablet ${styles.textBody}`
                            } >
                            <
                            div >
                            <
                            BodyCopy
                            className = {
                                styles.privacyChoiceText1
                            }
                            text = { < div dangerouslySetInnerHTML = {
                                    {
                                        __html: copy.ex
                                    }
                                }
                                />}
                                tabIndex = {
                                    inModal ? 0 : contentTabIndex
                                }
                                /> <
                                BodyCopy
                                className = {
                                    styles.privacyChoiceText2
                                }
                                text = {
                                    `${copy.ey} ${copy.ez} ${copy.fa}`
                                }
                                tabIndex = {
                                    inModal ? 0 : contentTabIndex
                                }
                                /> <
                                hr className = {
                                    `hiddenTablet hideDesktop ${styles.hr}`
                                } > < /hr> <
                                /div> <
                                div >
                                <
                                BodyCopy
                                className = {
                                    styles.privacyChoiceText1
                                }
                                text = { < div dangerouslySetInnerHTML = {
                                        {
                                            __html: copy.fc
                                        }
                                    }
                                    />}
                                    tabIndex = {
                                        inModal ? 0 : contentTabIndex
                                    }
                                    /> <
                                    BodyCopy
                                    className = {
                                        styles.privacyChoiceText2
                                    }
                                    text = {
                                        `${copy.fd} ${copy.fe} ${copy.ff}`
                                    }
                                    tabIndex = {
                                        inModal ? 0 : contentTabIndex
                                    }
                                    /> <
                                    /div> <
                                    /div> <
                                    /div>
                                );

                                if (inModal) return privacyTemplate;

                                // wrap for consistent grid layout throughout app
                                return ( <
                                    div className = "grid-content" > {
                                        privacyTemplate
                                    } <
                                    /div>
                                );
                            }