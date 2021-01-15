import React, {
    Fragment,
    useState
} from 'react';
import PropTypes from 'prop-types';
import BodyCopy from '../components/Copy/BodyCopy';
import TitleCopy from '../components/Copy/TitleCopy';
import NavButton from '../components/NavButton';
import MenuButton from '../components/MenuButton';
import DefaultColumnLayout from '../components/LayoutWrappers/DefaultColumnLayout';
import DefaultStickyFooter from '../components/LayoutWrappers/DefaultStickyFooter';
import Wayfinding from '../components/Wayfinding';
import {
    History
} from '../utils/types';
import Copy from '../utils/CopyManager';
import styles from './Valediction.module.css';

/** 
 * ISB Client Valediction Page Component 
 * @module Valediction 
 * @exports module:Valediction */
export default function Valediction({
    copy,
    history,
    mode,
    language,
    contentTabIndex
}) {
    const [visibleSection, setVisibleSection] = useState(0);

    return ( <
            Fragment >
            <
            DefaultColumnLayout >
            <
            div className = {
                styles.valediction
            } >
            <
            div className = {
                styles.left
            } >
            <
            TitleCopy text = {
                copy.il
            }
            tabIndex = {
                contentTabIndex
            }
            /> <
            BodyCopy className = {
                styles.valedictionText1
            }
            text = {
                copy.im
            }
            tabIndex = {
                contentTabIndex
            }
            /> {
                mode !== 'UOC' && ( <
                    BodyCopy className = {
                        styles.valedictionText2
                    }
                    text = {
                        copy.in
                    }
                    tabIndex = {
                        contentTabIndex
                    }
                    />
                )
            } {
                mode !== 'UOC' && ( <
                    BodyCopy className = {
                        `hiddenMobileTablet ${styles.desktopText}`
                    }
                    tabIndex = {
                        contentTabIndex
                    }
                    text = { < div dangerouslySetInnerHTML = {
                            {
                                __html: copy.io
                            }
                        }
                        />} /
                        >
                    )
                } {
                    mode !== 'UOC' && ( <
                        BodyCopy className = {
                            `hiddenDesktop ${styles.mobileTabletText}`
                        }
                        tabIndex = {
                            contentTabIndex
                        }
                        text = { < div dangerouslySetInnerHTML = {
                                {
                                    __html: copy.kj
                                }
                            }
                            />} /
                            >
                        )
                    } {
                        mode !== 'ISB' && ( <
                                >
                                <
                                div >
                                <
                                MenuButton onClick = {
                                    () => setVisibleSection(prevState => (prevState === 1 ? 0 : 1))
                                }
                                text = {
                                    copy.kt
                                }
                                typeOption = {
                                    visibleSection === 1 ? 'up' : 'down'
                                }
                                copyClassName = {
                                    styles.returnByLabel
                                }
                                tabIndex = {
                                    contentTabIndex
                                }
                                /> {
                                    visibleSection === 1 && ( <
                                            BodyCopy className = {
                                                styles.returnByBody
                                            }
                                            tabIndex = {
                                                contentTabIndex
                                            }
                                            text = { < div dangerouslySetInnerHTML = {
                                                    {
                                                        __html: copy.kr
                                                    }
                                                }
                                                />} /
                                                >
                                            )
                                        } <
                                        /div> <
                                        div className = {
                                            styles.lastSection
                                        } >
                                        <
                                        MenuButton
                                    onClick = {
                                        () => setVisibleSection(prevState => (prevState === 2 ? 0 : 2))
                                    }
                                    text = {
                                        copy.ku
                                    }
                                    typeOption = {
                                        visibleSection === 2 ? 'up' : 'down'
                                    }
                                    copyClassName = {
                                        styles.returnByLabel
                                    }
                                    tabIndex = {
                                        contentTabIndex
                                    }
                                    /> {
                                        visibleSection === 2 && ( <
                                            BodyCopy tabIndex = {
                                                contentTabIndex
                                            }
                                            className = {
                                                styles.returnByBody
                                            }
                                            text = { <
                                                div
                                                dangerouslySetInnerHTML = {
                                                    {
                                                        __html: copy.ks,
                                                    }
                                                }
                                                />
                                            }
                                            />
                                        )
                                    } <
                                    /div> <
                                    />
                                )
                            } <
                            /div>

                            <
                            div className = {
                                styles.right
                            } >
                            <
                            Wayfinding
                        contentTabIndex = {
                            contentTabIndex
                        }
                        currentStep = {
                            mode === 'UOC' ? 4 : 3
                        }
                        copy = {
                            Copy('Wayfinding', mode, language)
                        }
                        mode = {
                            mode
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
                        className = {
                            styles.navButton
                        }
                        onClick = {
                            () => {
                                if (mode === 'ISB') {
                                    window.open('https://locator.lavote.net/locations/vc', '_blank');
                                } else {
                                    history.push('/');
                                }
                            }
                        }
                        tabIndex = {
                            contentTabIndex
                        }
                        text = {
                            copy.iw
                        }
                        /> <
                        /div> <
                        /DefaultStickyFooter> <
                        /Fragment>
                    );
                }

                Valediction.propTypes = {
                    copy: PropTypes.object,
                    history: History,
                };

                Valediction.defaultProps = {
                    copy: {},
                    history: {
                        push: () => null
                    },
                };