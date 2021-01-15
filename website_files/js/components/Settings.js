import React from 'react';
import {
    MemoryRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Modal from './Modal/Modal';
import MenuButton from './MenuButton';
import {
    ReactComponent as Contrast
} from '../images/contrast.svg';
import {
    ReactComponent as TextSize
} from '../images/text_size.svg';
import {
    ReactComponent as PrivacyImg
} from '../images/privacy.svg';
import {
    ReactComponent as LeftCarrot
} from '../images/left_carrot.svg';
import setTheme, {
    contrastOptions,
    textSizeOptions
} from '../utils/Theme';
import Privacy from '../pages/Privacy';
import Copy from './../utils/CopyManager';
import TitleCopy from './Copy/TitleCopy';
import styles from './Settings.module.css';

/** 
 * ISB Client SettingsModal Component 
 * @module SettingsModal 
 * @exports module:SettingsModal */
export default class SettingsModal extends React.Component {
    openPrivacy = () => {
        this.props.onClose();
        this.props.history.push('/privacy');
    };

    render() {
        const {
            showPrivacy,
            onClose,
            updateSelectedPrivacy,
            selectedPrivacy,
            mode,
            language,
            copy,
        } = this.props;
        const textSizeTheme = localStorage.getItem('textSizeTheme') || textSizeOptions.MEDIUM_TEXT;
        const contrastTheme = localStorage.getItem('contrastTheme') || contrastOptions.HIGH_CONTRAST;

        return ( <
            MemoryRouter >
            <
            Switch > {
                /* ******************************************************************************
                 *
                 * RENDERS SETTINGS OPTIONS
                 *
                 **************************************************************************** */
            } <
            Route exact path = '/'
            render = {
                ({
                    location
                }) => ( <
                    Modal key = {
                        1
                    } /* key is so component remounts when choose a different route and focus is reset from Modal's componentDidMount */
                    isPriority handleClose = {
                        onClose
                    }
                    title = { <
                        div className = {
                            styles.settingsTop
                        } >
                        <
                        TitleCopy text = {
                            copy.bf
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        /div>
                    }
                    body = { <
                        div
                        className = {
                            `${styles.settingsMiddle} ${location.pathname === '/' &&
                      styles.middleMenu}`
                        } >
                        <
                        div className = {
                            styles.options
                        } > { /* TODO(achilles) make this come from state from somewhere */ } <
                        Link
                        to = {
                            `/textSize/${textSizeTheme}`
                        }
                        className = {
                            `${styles.menuLink} ${styles.link}`
                        } >
                        <
                        MenuButton
                        asDiv
                        className = {
                            `hiddenTablet hiddenDesktop`
                        }
                        copyClassName = {
                            styles.menuLabel
                        }
                        text = {
                            copy.bg
                        }
                        typeOption = 'right' /
                        >
                        <
                        div className = {
                            `hiddenMobile ${styles.settingsOption}`
                        } >
                        <
                        TextSize / >
                        <
                        div className = {
                            styles.optionButton
                        } > {
                            copy.bk
                        } < /div> <
                        /div> <
                        /Link>

                        <
                        div className = {
                            styles.spacer
                        }
                        />

                        <
                        Link
                        to = {
                            `/contrast/${contrastTheme}`
                        }
                        className = {
                            `${styles.menuLink} ${styles.link}`
                        } >
                        <
                        MenuButton
                        asDiv
                        className = {
                            `hiddenTablet hiddenDesktop`
                        }
                        copyClassName = {
                            styles.menuLabel
                        }
                        text = {
                            copy.bh
                        }
                        typeOption = 'right' /
                        >
                        <
                        div className = {
                            `hiddenMobile ${styles.settingsOption}`
                        } >
                        <
                        Contrast / >
                        <
                        div className = {
                            styles.optionButton
                        } > {
                            copy.bq
                        } < /div> <
                        /div> <
                        /Link>

                        {
                            showPrivacy && ( <
                                React.Fragment >
                                <
                                div className = {
                                    styles.spacer
                                }
                                />

                                <
                                Link to = {
                                    '/privacy'
                                }
                                className = {
                                    `${styles.menuLink} ${styles.link}`
                                } >
                                <
                                MenuButton asDiv className = {
                                    `hiddenTablet hiddenDesktop`
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.bi
                                }
                                typeOption = 'right' /
                                >
                                <
                                div className = {
                                    `hiddenMobile ${styles.settingsOption}`
                                } >
                                <
                                PrivacyImg / >
                                <
                                div className = {
                                    styles.optionButton
                                } > {
                                    copy.bi
                                } < /div> <
                                /div> <
                                /Link> <
                                /React.Fragment>
                            )
                        } <
                        /div> <
                        /div>
                    }
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
                )
            }
            /> {
                /* ******************************************************************************
                 *
                 * RENDERS CONTRAST OPTIONS
                 *
                 **************************************************************************** */
            } <
            Route path = '/contrast/:setting'
            render = {
                props => {
                    const selected = props.match.params.setting;

                    return ( <
                        Modal key = {
                            2
                        }
                        isPriority handleClose = {
                            onClose
                        }
                        title = { <
                            div className = {
                                styles.settingsTop
                            } >
                            <
                            TitleCopy text = {
                                copy.bq
                            }
                            tabIndex = {
                                0
                            }
                            /> <
                            Link className = {
                                styles.returnButton
                            }
                            to = '/' >
                            <
                            LeftCarrot / > {
                                copy.bp
                            } <
                            /Link> <
                            /div>
                        }
                        body = { <
                            div className = {
                                styles.settingsMiddle
                            } >
                            <
                            div className = {
                                styles.contrastSettings
                            } >
                            <
                            div className = {
                                styles[selected]
                            } >
                            <
                            div className = {
                                styles.highBox
                            } >
                            <
                            Link
                            /* aria-label is for screenreaders */
                            aria - label = {
                                `${selected === 'high' ? copy.va : copy.vb} ${copy.br} ${
                                copy.bs
                              }`
                            }
                            className = {
                                styles.link
                            }
                            to = '/contrast/high'
                            onClick = {
                                () => setTheme(contrastOptions.HIGH_CONTRAST, language)
                            } >
                            <
                            div className = {
                                styles.highContrast
                            } >
                            <
                            div className = {
                                styles.optionTitle
                            } > {
                                copy.br
                            } < /div> <
                            div className = {
                                styles.optionText
                            } > {
                                copy.bs
                            } < /div> <
                            /div> <
                            /Link> <
                            /div> <
                            /div>

                            <
                            div className = {
                                styles.spacer
                            }
                            />

                            <
                            div className = {
                                styles[selected]
                            } >
                            <
                            div className = {
                                styles.lowBox
                            } >
                            <
                            Link
                            aria - label = {
                                `${selected === 'low' ? copy.va : copy.vb} ${copy.bt} ${
                                copy.bu
                              }`
                            }
                            className = {
                                styles.link
                            }
                            to = '/contrast/low'
                            onClick = {
                                () => setTheme(contrastOptions.LOW_CONTRAST, language)
                            } >
                            <
                            div className = {
                                styles.lowContrast
                            } >
                            <
                            div className = {
                                styles.optionTitle
                            } > {
                                copy.bt
                            } < /div> <
                            div className = {
                                styles.optionText
                            } > {
                                copy.bu
                            } < /div> <
                            /div> <
                            /Link> <
                            /div> <
                            /div> <
                            /div> <
                            /div>
                        }
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
            }
            /> {
                /* *******************************************************************************
                 *
                 * RENDERS TEXT SIZE OPTIONS
                 *
                 ***************************************************************************** */
            } <
            Route path = '/textSize/:size'
            render = {
                props => {
                    const selected = props.match.params.size;

                    return ( <
                        Modal key = {
                            3
                        }
                        isPriority handleClose = {
                            onClose
                        }
                        title = { <
                            div className = {
                                styles.settingsTop
                            } >
                            <
                            TitleCopy text = {
                                copy.bg
                            }
                            tabIndex = {
                                0
                            }
                            /> <
                            Link to = '/'
                            className = {
                                styles.returnButton
                            } >
                            <
                            LeftCarrot / > {
                                copy.bp
                            } <
                            /Link> <
                            /div>
                        }
                        body = { <
                            div className = {
                                styles.settingsMiddle
                            } >
                            <
                            div className = {
                                styles.textSettingsWrapper
                            } >
                            <
                            div className = {
                                styles.textSettings
                            } >
                            <
                            div className = {
                                styles[selected]
                            } >
                            <
                            div className = {
                                styles.sizeTitle
                            }
                            tabIndex = {
                                0
                            } > {
                                copy.bl
                            } <
                            /div> <
                            div className = {
                                styles.smallWrapper
                            } >
                            <
                            Link
                            /* aria-label is for screenreaders */
                            aria - label = {
                                `${selected === 'small' ? copy.va : copy.vb} ${
                                  copy.bl
                                }`
                            }
                            className = {
                                styles.link
                            }
                            to = '/textSize/small'
                            onClick = {
                                () => setTheme(textSizeOptions.SMALL_TEXT)
                            } >
                            <
                            div className = {
                                styles.textOption
                            } >
                            <
                            TextSize / >
                            <
                            /div> <
                            /Link> <
                            /div> <
                            /div> <
                            div className = {
                                styles[selected]
                            } >
                            <
                            div className = {
                                styles.sizeTitle
                            }
                            tabIndex = {
                                0
                            } > {
                                copy.bm
                            } <
                            /div> <
                            div className = {
                                styles.mediumWrapper
                            } >
                            <
                            Link
                            aria - label = {
                                `${selected === 'medium' ? copy.va : copy.vb} ${
                                  copy.bm
                                }`
                            }
                            className = {
                                styles.link
                            }
                            to = '/textSize/medium'
                            onClick = {
                                () => setTheme(textSizeOptions.MEDIUM_TEXT)
                            } >
                            <
                            div className = {
                                styles.textOption
                            } >
                            <
                            TextSize / >
                            <
                            /div> <
                            /Link> <
                            /div> <
                            /div> <
                            div className = {
                                styles[selected]
                            } >
                            <
                            div className = {
                                styles.sizeTitle
                            }
                            tabIndex = {
                                0
                            } > {
                                copy.bn
                            } <
                            /div> <
                            div className = {
                                styles.largeWrapper
                            } >
                            <
                            Link
                            aria - label = {
                                `${selected === 'large' ? copy.va : copy.vb} ${
                                  copy.bn
                                }`
                            }
                            className = {
                                styles.link
                            }
                            to = '/textSize/large'
                            onClick = {
                                () => setTheme(textSizeOptions.LARGE_TEXT)
                            } >
                            <
                            div className = {
                                styles.textOption
                            } >
                            <
                            TextSize / >
                            <
                            /div> <
                            /Link> <
                            /div> <
                            /div> <
                            /div>

                            <
                            div className = {
                                styles.sampleTextWrapper
                            } >
                            <
                            div >
                            <
                            span className = {
                                styles.sampleTextTitle
                            }
                            tabIndex = {
                                0
                            } > {
                                copy.kb
                            } <
                            /span> <
                            span className = {
                                styles.sampleTextDivider
                            } > < /span> <
                            span className = {
                                styles.sampleTextSelection
                            }
                            tabIndex = {
                                0
                            } > {
                                (selected === 'small' && copy.bl) ||
                                (selected === 'medium' && copy.bm) ||
                                (selected === 'large' && copy.bn)
                            } <
                            /span> <
                            /div> <
                            div className = {
                                styles.sampleText
                            }
                            tabIndex = {
                                0
                            } >
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.Sed sodales
                            pretium justo,
                            ac molestie dolor sagittis eget.Duis feugiat risus nec
                            dui bibendum vehicula.In hac habitasse platea dictumst. <
                            /div> <
                            /div> <
                            /div> <
                            /div>
                        }
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
            }
            />

            {
                /* *******************************************************************************
                 *
                 * RENDERS PRIVACY SELECTIONS
                 *
                 ***************************************************************************** */
            } <
            Route path = '/privacy'
            render = {
                props => {
                    return ( <
                        Modal key = {
                            4
                        }
                        isPriority handleClose = {
                            onClose
                        }
                        title = { <
                            div className = {
                                styles.settingsTop
                            } >
                            <
                            TitleCopy text = {
                                copy.bi
                            }
                            tabIndex = {
                                0
                            }
                            /> <
                            Link to = '/'
                            className = {
                                styles.returnButton
                            } >
                            <
                            LeftCarrot / > {
                                copy.bp
                            } <
                            /Link> <
                            /div>
                        }
                        body = { <
                            div className = {
                                styles.settingsMiddle
                            } >
                            <
                            Privacy
                            inModal
                            updateSelectedPrivacy = {
                                updateSelectedPrivacy
                            }
                            selectedPrivacy = {
                                selectedPrivacy
                            }
                            copy = {
                                Copy('Privacy', mode, language)
                            }
                            /> <
                            /div>
                        }
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
            }
            /> <
            /Switch> <
            /MemoryRouter>
        );
    }
}