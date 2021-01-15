import React, {
    Fragment,
    useState
} from 'react';
import NavButton from './NavButton';
import MenuButton from './MenuButton';
import Modal from './Modal/Modal';
import {
    ReactComponent as LeftCarrot
} from '../images/left_carrot.svg';
import HelpItem from './HelpItem';
import TitleCopy from './Copy/TitleCopy';
import styles from './Help.module.css';
import BodyCopy from './Copy/BodyCopy';

/** 
 * ISB Client Help Component 
 * @module Help 
 * @exports module:Help */
export default function Help({
    onClose,
    copy,
    mode
}) {
    const [category, setCategory] = useState(0);

    /* This switch is for the copy for category 5.
       It was decided that the copy here would draw from the wayfinding pages
       For UOC and RAV.
       Probably temporary.
    */
    let itemOne;
    let itemTwo;
    let itemThree;
    let itemFour;
    switch (mode) {
        case 'ISB':
            itemOne = {
                header: copy.qe,
                content: copy.qf
            };
            itemTwo = {
                header: copy.qg,
                content: copy.qh
            };
            itemThree = {
                header: copy.qi,
                content: copy.qj
            };
            itemFour = {
                header: copy.qk,
                content: copy.ql
            };
            break;
        case 'RAV':
            itemOne = {
                header: copy.cd,
                content: copy.ho
            };
            itemTwo = {
                header: copy.il,
                content: `${copy.im}<br/><br/>${copy.in}<br/><br/>${copy.io}`
            };
            itemThree = {
                header: copy.kt,
                content: copy.kr
            };
            itemFour = {
                header: copy.ku,
                content: copy.ks
            };
            break;
        case 'UOC':
            itemOne = {
                header: copy.cd,
                content: copy.ho
            };
            itemTwo = {
                header: copy.il,
                content: copy.im
            };
            itemThree = {
                header: copy.kt,
                content: copy.kr
            };
            itemFour = {
                header: copy.ku,
                content: copy.ks
            };
            break;
        default:
    }
    const catFiveCopy = [itemOne, itemTwo, itemThree, itemFour];

    return ( <
            Modal id = 'helpModal'
            isPriority handleClose = {
                onClose
            }
            title = { <
                div className = {
                    styles.titleContainer
                } >
                <
                TitleCopy
                className = {
                    `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                }
                text = {
                    copy.ad
                }
                tabIndex = {
                    0
                }
                /> {
                    category !== 0 && ( <
                        button onClick = {
                            () => setCategory(0)
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
                }

                {
                    copy.qt && category === 0 && ( <
                        button onClick = {
                            () => setCategory(1)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qt
                        }
                        /> <
                        /button>
                    )
                }

                {
                    copy.qt && category !== 0 && ( <
                        button onClick = {
                            () => setCategory(1)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 1 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qt
                        }
                        /> <
                        /button>
                    )
                } {
                    copy.qu && ( <
                        button onClick = {
                            () => setCategory(2)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 2 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qu
                        }
                        /> <
                        /button>
                    )
                } {
                    copy.qv && ( <
                        button onClick = {
                            () => setCategory(3)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 3 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qv
                        }
                        /> <
                        /button>
                    )
                } {
                    copy.qw && ( <
                        button onClick = {
                            () => setCategory(4)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 4 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qw
                        }
                        /> <
                        /button>
                    )
                } {
                    copy.qx && ( <
                        button onClick = {
                            () => setCategory(5)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 5 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qx
                        }
                        /> <
                        /button>
                    )
                } {
                    copy.qy && ( <
                        button onClick = {
                            () => setCategory(6)
                        }
                        className = {
                            `hiddenMobile ${styles.titleButton} ${category === 6 &&
                styles.selectedStyle}`
                        } >
                        <
                        BodyCopy className = {
                            styles.titleButtonCopy
                        }
                        text = {
                            copy.qy
                        }
                        /> <
                        /button>
                    )
                } <
                /div>
            }
            body = { <
                Fragment > {
                    category === 0 && ( <
                        div className = 'hiddenTablet hiddenDesktop' > {
                            copy.qt && ( <
                                MenuButton onClick = {
                                    () => setCategory(1)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qt
                                }
                                typeOption = 'right' /
                                >
                            )
                        } {
                            copy.qu && ( <
                                MenuButton onClick = {
                                    () => setCategory(2)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qu
                                }
                                typeOption = 'right' /
                                >
                            )
                        } {
                            copy.qv && ( <
                                MenuButton onClick = {
                                    () => setCategory(3)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qv
                                }
                                typeOption = 'right' /
                                >
                            )
                        } {
                            copy.qw && ( <
                                MenuButton onClick = {
                                    () => setCategory(4)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qw
                                }
                                typeOption = 'right' /
                                >
                            )
                        } {
                            copy.qx && ( <
                                MenuButton onClick = {
                                    () => setCategory(5)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qx
                                }
                                typeOption = 'right' /
                                >
                            )
                        } {
                            copy.qy && ( <
                                MenuButton onClick = {
                                    () => setCategory(6)
                                }
                                copyClassName = {
                                    styles.menuLabel
                                }
                                text = {
                                    copy.qy
                                }
                                typeOption = 'right' /
                                >
                            )
                        } <
                        /div>
                    )
                } {
                    category === 0 && ( <
                        div className = 'hiddenMobile' >
                        <
                        HelpItem key = {
                            copy.ck
                        }
                        item = {
                            {
                                header: copy.ck,
                                content: copy.cl
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cm
                        }
                        item = {
                            {
                                header: copy.cm,
                                content: copy.cn
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.co
                        }
                        item = {
                            {
                                header: copy.co,
                                content: copy.cp
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cq
                        }
                        item = {
                            {
                                header: copy.cq,
                                content: copy.cr
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cs
                        }
                        item = {
                            {
                                header: copy.cs,
                                content: copy.ct
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cu
                        }
                        item = {
                            {
                                header: copy.cu,
                                content: copy.cv
                            }
                        }
                        /> <
                        /div>
                    )
                } {
                    category === 1 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qt
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        HelpItem key = {
                            copy.ck
                        }
                        item = {
                            {
                                header: copy.ck,
                                content: copy.cl
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cm
                        }
                        item = {
                            {
                                header: copy.cm,
                                content: copy.cn
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.co
                        }
                        item = {
                            {
                                header: copy.co,
                                content: copy.cp
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cq
                        }
                        item = {
                            {
                                header: copy.cq,
                                content: copy.cr
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cs
                        }
                        item = {
                            {
                                header: copy.cs,
                                content: copy.ct
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.cu
                        }
                        item = {
                            {
                                header: copy.cu,
                                content: copy.cv
                            }
                        }
                        /> <
                        />
                    )
                } {
                    category === 2 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qu
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        HelpItem key = {
                            copy.lb
                        }
                        item = {
                            {
                                header: copy.lb,
                                content: copy.lc
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.ld
                        }
                        item = {
                            {
                                header: copy.ld,
                                content: copy.le
                            }
                        }
                        /> <
                        />
                    )
                } {
                    category === 3 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qv
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        HelpItem key = {
                            copy.lj
                        }
                        item = {
                            {
                                header: copy.lj,
                                content: copy.lk
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.ll
                        }
                        item = {
                            {
                                header: copy.ll,
                                content: copy.lm
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.ln
                        }
                        item = {
                            {
                                header: copy.ln,
                                content: copy.lo
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.lq
                        }
                        item = {
                            {
                                header: copy.lq,
                                content: copy.lr
                            }
                        }
                        /> <
                        />
                    )
                } {
                    category === 4 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qw
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        HelpItem key = {
                            copy.ls
                        }
                        item = {
                            {
                                header: copy.ls,
                                content: copy.lt
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.lu
                        }
                        item = {
                            {
                                header: copy.lu,
                                content: copy.lv
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.lw
                        }
                        item = {
                            {
                                header: copy.lw,
                                content: copy.lx
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.ly
                        }
                        item = {
                            {
                                header: copy.ly,
                                content: copy.lz
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.qa
                        }
                        item = {
                            {
                                header: copy.qa,
                                content: copy.qb
                            }
                        }
                        /> <
                        HelpItem key = {
                            copy.qc
                        }
                        item = {
                            {
                                header: copy.qc,
                                content: copy.qd
                            }
                        }
                        /> <
                        />
                    )
                } {
                    category === 5 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qx
                        }
                        tabIndex = {
                            0
                        }
                        /> <
                        HelpItem key = {
                            catFiveCopy[0].header
                        }
                        item = {
                            catFiveCopy[0]
                        }
                        /> <
                        HelpItem key = {
                            catFiveCopy[1].header
                        }
                        item = {
                            catFiveCopy[1]
                        }
                        /> <
                        HelpItem key = {
                            catFiveCopy[2].header
                        }
                        item = {
                            catFiveCopy[2]
                        }
                        /> <
                        HelpItem key = {
                            catFiveCopy[3].header
                        }
                        item = {
                            catFiveCopy[3]
                        }
                        /> <
                        />
                    )
                } {
                    category === 6 && ( <
                        >
                        <
                        TitleCopy className = {
                            `hiddenTablet hiddenDesktop ${styles.smallerFont}`
                        }
                        text = {
                            copy.qy
                        }
                        tabIndex = {
                            0
                        }
                        /> {
                            copy.qm && < HelpItem key = {
                                copy.qm
                            }
                            item = {
                                {
                                    header: copy.qm,
                                    content: copy.qn
                                }
                            }
                            />} {
                                copy.qo && < HelpItem key = {
                                    copy.qo
                                }
                                item = {
                                    {
                                        header: copy.qo,
                                        content: copy.qp
                                    }
                                }
                                />} {
                                    copy.qr && < HelpItem key = {
                                        copy.qr
                                    }
                                    item = {
                                        {
                                            header: copy.qr,
                                            content: copy.qs
                                        }
                                    }
                                    />} <
                                    />
                                )
                            } <
                            /Fragment>
                        }
                        continueButton = { <
                            NavButton
                            width = '235px'
                            colorOption = 'yellow'
                            typeOption = 'center'
                            text = {
                                copy.bj
                            }
                            onClick = {
                                onClose
                            }
                            />
                        }
                        />
                    );
                }