import React, {
    useEffect,
    useState
} from 'react';
import BodyCopy from '../../components/Copy/BodyCopy';
import NavButton from '../../components/NavButton';
import Modal from '../../components/Modal/Modal';
import {
    ReactComponent as LeftCarrot
} from '../../images/left_carrot.svg';
import MenuButton from '../../components/MenuButton';
import TitleCopy from '../../components/Copy/TitleCopy';
import styles from './StatementModal.module.css';

function getStatementTitle(statementId, copy) {
    const codeToTitle = {
        '01': copy.ztf,
        '02': copy.ztg,
        '03': copy.zth,
        '05': copy.zti,
        '07': copy.ztj,
        '10': copy.ztk,
        '15': copy.ztl,
        '20': copy.ztm,
        '25': copy.ztn,
        '30': copy.zto,
        '35': copy.ztp,
        '40': copy.ztq,
        '45': copy.ztr,
        '50': copy.zts,
        '55': copy.ztt,
        '60': copy.ztu,
        '65': copy.ztv,
        '70': copy.ztw,
        '73': copy.ztx,
        '75': copy.zty,
    };

    const code = statementId.slice(-3, -1);
    return codeToTitle[code] || copy.zte;
}

function NavItem({
    isSelected,
    text,
    onClick
}) {
    let buttonRef = React.createRef();

    useEffect(() => {
        isSelected && buttonRef.current.focus();
    }, []);

    return ( <
        button ref = {
            buttonRef
        }
        onClick = {
            onClick
        }
        className = {
            `${isSelected ? styles.selected : ''} ${styles.titleButton}`
        } >
        <
        BodyCopy className = {
            styles.titleButtonCopy
        }
        text = {
            text
        }
        /> <
        /button>
    );
}

/** 
 * ISB Client StatementModal Page Component 
 * @module StatementModal 
 * @exports module:StatementModal */
export default function StatementModal({
    onClose,
    statements,
    copy
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showNavList, setShowNavList] = useState(true);

    const orderedStatements = statements.sort((a, b) => a.SequenceOrder - b.SequenceOrder);
    const displayedStatement = (orderedStatements[selectedIndex] || {}).FullHTML;
    const hasStatements = Boolean(statements.length);

    if (!hasStatements) {
        return ( <
            Modal id = 'statementModal'
            handleClose = {
                onClose
            }
            title = { <
                div className = {
                    styles.titleContainer
                } >
                <
                TitleCopy text = {
                    copy.jd
                }
                tabIndex = {
                    0
                }
                /> <
                /div>
            }
            body = { <
                BodyCopy
                tabIndex = {
                    0
                }
                className = {
                    styles.bodyCopyLink
                }
                text = { < div dangerouslySetInnerHTML = {
                        {
                            __html: copy.rf
                        }
                    }
                    />} /
                    >
                }
                cancelButton = { <
                    NavButton
                    width = '243px'
                    typeOption = 'center'
                    colorOption = 'yellow'
                    text = {
                        copy.to
                    }
                    onClick = {
                        onClose
                    }
                    />
                }
                />
            );
        }

        return ( <
                Modal id = 'statementModal'
                handleClose = {
                    onClose
                }
                title = { <
                    div className = {
                        styles.titleContainer
                    } >
                    <
                    TitleCopy className = 'hiddenTablet hiddenDesktop'
                    text = {
                        copy.jd
                    }
                    tabIndex = {
                        0
                    }
                    /> {
                        !showNavList && ( <
                            button onClick = {
                                () => setShowNavList(true)
                            }
                            className = {
                                `hiddenTablet hiddenDesktop ${styles.returnButton}`
                            } >
                            <
                            LeftCarrot / > {
                                copy.bp
                            } <
                            /button>
                        )
                    } <
                    div className = {
                        `hiddenMobile ${styles.nav}`
                    } > {
                        orderedStatements.map((statement, i) => {
                            return ( <
                                NavItem key = {
                                    statement.ID
                                }
                                isSelected = {
                                    selectedIndex === i
                                }
                                text = {
                                    getStatementTitle(statement.ID, copy)
                                }
                                onClick = {
                                    () => {
                                        setShowNavList(false);
                                        setSelectedIndex(i);
                                    }
                                }
                                />
                            );
                        })
                    } <
                    /div> <
                    /div>
                }
                body = { <
                    div > {
                        showNavList && ( <
                            div className = 'hiddenTablet hiddenDesktop' > {
                                orderedStatements.map((statement, i) => {
                                    return ( <
                                        MenuButton key = {
                                            statement.ID
                                        }
                                        onClick = {
                                            () => {
                                                setShowNavList(false);
                                                setSelectedIndex(i);
                                            }
                                        }
                                        copyClassName = {
                                            styles.menuLabel
                                        }
                                        text = {
                                            getStatementTitle(statement.ID, copy)
                                        }
                                        typeOption = 'right' /
                                        >
                                    );
                                })
                            } <
                            /div>
                        )
                    } <
                    div className = {
                        `${showNavList ? 'hiddenMobile' : ''} ${styles.content}`
                    } >
                    <
                    BodyCopy
                    tabIndex = {
                        0
                    }
                    className = {
                        styles.bodyCopyLink
                    }
                    text = { < div dangerouslySetInnerHTML = {
                            {
                                __html: copy.rf
                            }
                        }
                        />} /
                        >
                        <
                        hr / >
                        <
                        BodyCopy
                        tabIndex = {
                            0
                        }
                        text = { < div dangerouslySetInnerHTML = {
                                {
                                    __html: displayedStatement || copy.tr
                                }
                            }
                            />} /
                            >
                            <
                            /div> <
                            /div>
                        }
                        cancelButton = { <
                            NavButton
                            width = '243px'
                            typeOption = 'center'
                            colorOption = 'yellow'
                            text = {
                                copy.to
                            }
                            onClick = {
                                onClose
                            }
                            />
                        }
                        />
                    );
                }