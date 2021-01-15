import React, {
    Fragment,
    Component
} from 'react';

import Modal from '../../components/Modal/Modal';
import DefaultColumnLayout from '../../components/LayoutWrappers/DefaultColumnLayout';
import DefaultStickyFooter from '../../components/LayoutWrappers/DefaultStickyFooter';
import TitleCopy from '../../components/Copy/TitleCopy';
import BodyCopy from '../../components/Copy/BodyCopy';
import LabelCopy from '../../components/Copy/LabelCopy';
import NavButton from '../../components/NavButton';
import {
    ReactComponent as Printer
} from '../../images/printer.svg';
import {
    ReactComponent as Download
} from '../../images/download.svg';
import PollPass from '../../components/PollPass/PollPass';
import UocavaPass from '../../components/PollPass/UOCAVA/UocavaPass';
import QRCodeGenerator from '../../components/QRCode/QRCodeGenerator';
import {
    PASS_ACTION_STATUSES,
    PASS_ACTION_TYPES
} from '../../constants/passes';
import {
    ReactComponent as Checkmark
} from '../../images/check_blue.svg';
import {
    ReactComponent as Info
} from '../../images/info_black.svg';
import styles from './PollPassGenerate.module.css';
import LoadingSpinner from '../../components/LoadingSpinner';
import {
    scrollBodyTo
} from '../../utils/scroller';

function WarningModal({
    handleClose,
    copy
}) {
    const title = < TitleCopy tabIndex = {
        0
    }
    text = {
        copy.zhy
    }
    />;
    const body = ( <
        React.Fragment >
        <
        BodyCopy tabIndex = {
            0
        }
        text = {
            copy.zib
        }
        className = {
            styles.modalBodyCopy
        }
        /> <
        BodyCopy tabIndex = {
            0
        }
        text = {
            copy.zic
        }
        className = {
            styles.modalBodyCopy
        }
        /> <
        br / >
        <
        br / > { /* <BodyCopy text={copy.zic} /> */ } <
        /React.Fragment>
    );

    return ( <
        Modal handleClose = {
            handleClose
        }
        title = {
            title
        }
        body = {
            body
        }
        continueButton = {
            ( <
                NavButton colorOption = 'yellow'
                text = {
                    copy.zie
                }
                onClick = {
                    handleClose
                }
                typeOption = 'center'
                className = {
                    styles.continueModalButton
                }
                />
            )
        }
        cancelButton = { < NavButton text = {
                copy.zgk
            }
            onClick = {
                handleClose
            }
            colorOption = 'secondary' / >
        }
        />
    );
}

function ErrorModal({
    handleClose,
    error: {
        title,
        line1,
        line2
    }
}) {
    const titleTemplate = < TitleCopy tabIndex = {
        0
    }
    text = {
        title
    }
    />;
    const body = ( <
        React.Fragment >
        <
        BodyCopy tabIndex = {
            0
        }
        text = {
            line1
        }
        className = {
            styles.modalBodyCopy
        }
        /> <
        BodyCopy tabIndex = {
            0
        }
        text = {
            line2
        }
        className = {
            styles.modalBodyCopy
        }
        /> <
        /React.Fragment>
    );

    return ( <
        Modal handleClose = {
            handleClose
        }
        title = {
            titleTemplate
        }
        body = {
            body
        }
        cancelButton = { < NavButton text = "Close"
            onClick = {
                handleClose
            }
            colorOption = 'secondary' / >
        }
        />
    );

}

function PrintDownloadOrScreenshot({
    icon,
    button,
    status,
    className,
    copy,
    tabIndex
}) {
    let statusTemplate;

    if (status === PASS_ACTION_STATUSES.COMPLETE) {
        statusTemplate = ( <
            >
            <
            Checkmark / >
            <
            LabelCopy text = {
                copy.tw
            }
            tabIndex = {
                tabIndex
            }
            /> <
            />
        );
    } else if (status === PASS_ACTION_STATUSES.LOADING) {
        statusTemplate = ( <
            >
            <
            LoadingSpinner size = "16px"
            margin = "0 5px 0 0" / >
            <
            LabelCopy text = {
                copy.tf
            }
            tabIndex = {
                tabIndex
            }
            /> <
            />
        );
    }

    return ( <
        div className = {
            `${className} ${styles.option}`
        } > {
            icon
        } <
        div className = {
            styles.buttonContainer
        } >
        <
        div className = {
            `hideMobile ${styles.status}`
        } > {
            statusTemplate
        } <
        /div> {
            button
        } <
        /div> <
        /div>
    );
}

PrintDownloadOrScreenshot.defaultProps = {
    className: '',
};

/** 
 * ISB Client PollPassGenerate Page Component 
 * @module PollPassGenerate 
 * @exports module:PollPassGenerate */
export default class PollPassGenerate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            printStatus: PASS_ACTION_STATUSES.INIT,
            downloadStatus: PASS_ACTION_STATUSES.INIT,
            screenshotStatus: PASS_ACTION_STATUSES.INIT,
            generatePdfError: undefined,
            renderWarning: false,
        };

        this.onBlockedClick = this.onBlockedClick.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.onCloseGeneratePdfErrorModal = this.onCloseGeneratePdfErrorModal.bind(this);
        this.onOpenGeneratePdfErrorModal = this.onOpenGeneratePdfErrorModal.bind(this);
    }

    componentDidMount() {
        scrollBodyTo({
            toTop: true,
            smooth: false
        });
    }

    /**
     * updates status of pass action stored in state
     * @param {string} statusName one of PASS_ACTION_TYPES_VALUES
     * @param {string} status one of PASS_ACTION_STATUSES
     */
    onUpdateStatus(statusName, status) {
        this.setState({
            [statusName]: status
        });
    }

    onCloseModal() {
        this.setState({
            renderWarning: false
        });
    }

    onBlockedClick() {
        this.setState({
            renderWarning: true
        });
    }

    onOpenGeneratePdfErrorModal(generatePdfError) {
        this.setState({
            generatePdfError
        });
    }

    onCloseGeneratePdfErrorModal() {
        this.setState({
            generatePdfError: undefined
        });
    }

    continue = async () => {
        const {
            history,
            clearSelections,
            mode,
            updateCompletedBallots,
            electionId
        } = this.props;

        /* Need to await so this.props.hasIncompleteBallots has updated value after the set state.
          This is also why you can't destructure hasIncompleteBallots from this.props above -
          it would have the old value before the await below.
        */
        await updateCompletedBallots(electionId);

        if (mode === 'UOC') {
            history.push('/oath');
        } else if (this.props.hasIncompleteBallots) {
            history.push('/elections');
        } else {
            history.push('/valediction');
            clearSelections();
        }
    };

    render() {
        const {
            printStatus,
            screenshotStatus,
            downloadStatus,
            renderWarning,
            generatePdfError
        } = this.state;
        // allowContinue only affects tablet/desktop
        const allowContinue = [printStatus, downloadStatus, screenshotStatus]
            .includes(PASS_ACTION_STATUSES.COMPLETE);
        const {
            mode,
            copy,
            selections,
            ballotPrecinctData,
            hasWriteIns,
            writeInValues,
            electionName,
            electionDate,
            contests,
            language,
            contentTabIndex,
            updateSelectedLanguage
        } = this.props;

        const downloadButton =
            mode === 'ISB' ? ( <
                PollPass selections = {
                    selections
                }
                ballotPrecinctData = {
                    ballotPrecinctData
                }
                hasWriteIns = {
                    hasWriteIns
                }
                electionName = {
                    electionName
                }
                electionDate = {
                    electionDate
                }
                type = {
                    PASS_ACTION_TYPES.DOWNLOAD
                }
                buttonTextDesktop = {
                    copy.zhw
                }
                buttonTextMobileTablet = {
                    copy.ra
                }
                copy = {
                    copy
                }
                buttonClass = {
                    styles.printDownloadOrScreenshotButton
                }
                buttonCallback = {
                    this.onUpdateStatus
                }
                handleError = {
                    this.onOpenGeneratePdfErrorModal
                }
                contentTabIndex = {
                    contentTabIndex
                }
                language = {
                    language
                }
                />
            ) : ( <
                UocavaPass contests = {
                    contests
                }
                selections = {
                    selections
                }
                hasWriteIns = {
                    hasWriteIns
                }
                writeInValues = {
                    writeInValues
                }
                ballotPrecinctData = {
                    ballotPrecinctData
                }
                electionName = {
                    electionName
                }
                electionDate = {
                    electionDate
                }
                isRavbm = {
                    mode === 'RAV'
                }
                buttonTextDesktop = {
                    copy.zhw
                }
                buttonTextMobileTablet = {
                    copy.ra
                }
                copy = {
                    copy
                }
                buttonClass = {
                    styles.printDownloadOrScreenshotButton
                }
                buttonCallback = {
                    this.onUpdateStatus
                }
                handleError = {
                    this.onOpenGeneratePdfErrorModal
                }
                contentTabIndex = {
                    contentTabIndex
                }
                language = {
                    language
                }
                type = {
                    PASS_ACTION_TYPES.DOWNLOAD
                }
                updateSelectedLanguage = {
                    updateSelectedLanguage
                }
                />
            );

        const printButton =
            mode === 'ISB' ? ( <
                PollPass selections = {
                    selections
                }
                hasWriteIns = {
                    hasWriteIns
                }
                ballotPrecinctData = {
                    ballotPrecinctData
                }
                electionName = {
                    electionName
                }
                electionDate = {
                    electionDate
                }
                type = {
                    PASS_ACTION_TYPES.PRINT
                }
                buttonTextDesktop = {
                    copy.zhu
                }
                buttonTextMobileTablet = {
                    copy.qz
                }
                copy = {
                    copy
                }
                buttonClass = {
                    styles.printDownloadOrScreenshotButton
                }
                buttonCallback = {
                    this.onUpdateStatus
                }
                handleError = {
                    this.onOpenGeneratePdfErrorModal
                }
                contentTabIndex = {
                    contentTabIndex
                }
                language = {
                    language
                }
                />
            ) : ( <
                UocavaPass contests = {
                    contests
                }
                selections = {
                    selections
                }
                hasWriteIns = {
                    hasWriteIns
                }
                writeInValues = {
                    writeInValues
                }
                ballotPrecinctData = {
                    ballotPrecinctData
                }
                electionName = {
                    electionName
                }
                electionDate = {
                    electionDate
                }
                isRavbm = {
                    mode === 'RAV'
                }
                buttonTextDesktop = {
                    copy.hu
                }
                buttonTextMobileTablet = {
                    copy.qz
                }
                copy = {
                    copy
                }
                buttonClass = {
                    styles.printDownloadOrScreenshotButton
                }
                buttonCallback = {
                    this.onUpdateStatus
                }
                handleError = {
                    this.onOpenGeneratePdfErrorModal
                }
                contentTabIndex = {
                    contentTabIndex
                }
                language = {
                    language
                }
                type = {
                    PASS_ACTION_TYPES.PRINT
                }
                updateSelectedLanguage = {
                    updateSelectedLanguage
                }
                />
            );

        const qrCode = ( <
            QRCodeGenerator hasWriteIns = {
                hasWriteIns
            }
            selections = {
                selections
            }
            size = {
                220
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            qrCodeType = {
                mode
            }
            />
        );

        const QrCodeIcon = ( <
            QRCodeGenerator hasWriteIns = {
                hasWriteIns
            }
            selections = {
                selections
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            qrCodeType = {
                mode
            }
            />
        );

        const screenshotButton = ( <
            PollPass selections = {
                selections
            }
            hasWriteIns = {
                hasWriteIns
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            electionName = {
                electionName
            }
            electionDate = {
                electionDate
            }
            type = {
                PASS_ACTION_TYPES.SCREENSHOT
            }
            buttonTextDesktop = {
                copy.rc
            }
            buttonTextMobileTablet = {
                copy.rc
            }
            copy = {
                copy
            }
            buttonClass = {
                styles.printDownloadOrScreenshotButton
            }
            buttonCallback = {
                this.onUpdateStatus
            }
            qrCode = {
                qrCode
            }
            language = {
                language
            }
            />
        );

        return ( <
            Fragment > {
                renderWarning && < WarningModal copy = {
                    copy
                }
                handleClose = {
                    this.onCloseModal
                }
                />} {
                    generatePdfError && ( <
                        ErrorModal error = {
                            generatePdfError
                        }
                        handleClose = {
                            this.onCloseGeneratePdfErrorModal
                        }
                        />
                    )
                } <
                DefaultColumnLayout
                className = {
                    styles.columnLayout
                }
                contentClassName = {
                    styles.columnLayoutContent
                } >
                <
                div className = {
                    styles.centeredContent
                } >
                <
                div className = {
                    styles.copy
                } >
                <
                TitleCopy tabIndex = {
                    contentTabIndex
                }
                className = {
                    styles.titleCopy
                }
                text = {
                    copy.zhs
                }
                /> <
                BodyCopy
                tabIndex = {
                    contentTabIndex
                }
                className = {
                    `hiddenMobileTablet ${styles.pollPassText}`
                }
                text = {
                    copy.zht
                }
                /> <
                BodyCopy
                tabIndex = {
                    contentTabIndex
                }
                className = {
                    `hiddenDesktop ${styles.pollPassText}`
                }
                text = {
                    copy.kn
                }
                /> <
                /div> {
                    mode === 'ISB' && ( <
                        div className = 'hiddenTabletDesktop' >
                        <
                        div className = {
                            styles.qrCodeLarge
                        } >
                        <
                        div className = {
                            styles.codeContainer
                        } > {
                            qrCode
                        } < /div> <
                        div tabIndex = {
                            contentTabIndex
                        }
                        className = {
                            styles.screenShotText
                        } >
                        {
                            copy.zko
                        } <
                        /div> <
                        /div> <
                        /div>
                    )
                } <
                div className = {
                    styles.options
                } >
                <
                PrintDownloadOrScreenshot
                className = {
                    styles.printButton
                }
                icon = { < Printer / >
                }
                button = {
                    printButton
                }
                status = {
                    printStatus
                }
                copy = {
                    copy
                }
                tabIndex = {
                    contentTabIndex
                }
                /> <
                PrintDownloadOrScreenshot
                className = {
                    styles.downloadButton
                }
                button = {
                    downloadButton
                }
                icon = { < Download / >
                }
                status = {
                    downloadStatus
                }
                copy = {
                    copy
                }
                tabIndex = {
                    contentTabIndex
                }
                /> {
                    mode === 'ISB' && ( <
                        PrintDownloadOrScreenshot className = {
                            `hiddenMobile ${styles.screenshotButton}`
                        }
                        button = {
                            screenshotButton
                        }
                        icon = {
                            QrCodeIcon
                        }
                        status = {
                            screenshotStatus
                        }
                        copy = {
                            copy
                        }
                        tabIndex = {
                            contentTabIndex
                        }
                        />
                    )
                } <
                /div> <
                /div> <
                /DefaultColumnLayout> <
                DefaultStickyFooter >
                <
                Info className = {
                    `hiddenMobile hiddenTablet ${styles.info}`
                }
                /> <
                BodyCopy
                tabIndex = {
                    contentTabIndex
                }
                className = {
                    `hiddenMobileTablet ${styles.footerBodyCopy}`
                }
                text = {
                    copy.zht
                }
                /> <
                BodyCopy
                tabIndex = {
                    contentTabIndex
                }
                className = {
                    `hiddenDesktop ${styles.footerBodyCopy}`
                }
                text = {
                    copy.zkh
                }
                /> <
                NavButton
                className = {
                    `${mode === 'ISB' ? 'hideMobileTablet' : ''} ${styles.continueButton}`
                }
                colorOption = {
                    allowContinue ? 'yellow' : 'gray'
                }
                text = {
                    copy.zhz
                }
                typeOption = 'right'
                onClick = {
                    () => (allowContinue ? this.continue() : this.onBlockedClick())
                }
                tabIndex = {
                    contentTabIndex
                }
                /> {
                    mode === 'ISB' && ( <
                        NavButton className = {
                            `hideDesktop ${styles.continueButton}`
                        }
                        colorOption = 'yellow'
                        text = {
                            copy.zhz
                        }
                        typeOption = 'right'
                        onClick = {
                            this.continue
                        }
                        tabIndex = {
                            contentTabIndex
                        }
                        />
                    )
                } <
                /DefaultStickyFooter> <
                /Fragment>
            );
        }
    }