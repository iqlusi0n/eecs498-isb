import React, {
    PureComponent
} from 'react';
import 'whatwg-fetch'; // fetch polyfill
import {
    renderToString
} from 'react-dom/server';
import {
    PDFDocument
} from 'pdf-lib';
import {
    arrayOf,
    bool,
    object,
    objectOf,
    shape,
    string,
    func,
    oneOf
} from 'prop-types';
import noop from 'lodash/noop';
import cloneDeep from 'lodash/cloneDeep';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import {
    getCandidateId
} from '../../../utils/BallotGetters';
import {
    pdfName
} from '../../../constants/names';
import {
    base64ToArrayBuffer,
    filterZeroWidthSpace
} from '../../../utils/pdfHelpers';
import {
    Uint8Slice
} from '../../../utils/polyfills';
import {
    IS_MS_BROWSER
} from '../../../utils/detectBrowser';
import
PollPassBase, {
    MARGIN,
    LIGHT_STYLE,
    V_LIGHT_STYLE,
    docBase,
    RTL_LANGUAGES,
    PdfMeasure,
    Y_BOUND
}
from '../PollPassBase';
import QRCodeGenerator, {
    QR_CODE_TYPES
} from '../../QRCode/QRCodeGenerator';
import Sign from '../../../images/sign.png';
import Fax from '../../../images/fax.png';
import Envelope from '../../../images/Envelope_x2.png';
import Printer from '../../../images/Printer_x2.png';
import LaSeal from '../../../images/LA_SEAL.png';
import Circle1 from '../../../images/1.svg';
import Circle2 from '../../../images/2.svg';
import Circle3 from '../../../images/3.svg';
import OathSheetEN from '../../../resources/2020 VBM Ballot Oath Form_EN.pdf';
import OathSheetES from '../../../resources/2020 VBM Ballot Oath Form_ES.pdf';
import OathSheetFA from '../../../resources/2020 VBM Ballot Oath Form_FA.pdf';
import OathSheetHI from '../../../resources/2020 VBM Ballot Oath Form_HI.pdf';
import OathSheetHY from '../../../resources/2020 VBM Ballot Oath Form_HY.pdf';
import OathSheetKM from '../../../resources/2020 VBM Ballot Oath Form_KM.pdf';
import OathSheetKO from '../../../resources/2020 VBM Ballot Oath Form_KO.pdf';
import OathSheetRU from '../../../resources/2020 VBM Ballot Oath Form_RUS.pdf';
import OathSheetTH from '../../../resources/2020 VBM Ballot Oath Form_TH.pdf';
import OathSheetTL from '../../../resources/2020 VBM Ballot Oath Form_TL.pdf';
import OathSheetZH from '../../../resources/2020 VBM Ballot Oath Form_ZH.pdf';
import OathSheetJA from '../../../resources/2020 VBM Ballot-Oath-Form- JA.pdf';
import OathSheetVI from '../../../resources/2020 VBM Ballot-Oath-Form- VI.pdf';

import styles from '../PollPass.module.css';
import {
    PASS_ACTION_TYPES,
    PASS_ACTION_STATUSES,
    PASS_ACTION_TYPES_VALUES
} from '../../../constants/passes';

const BLACK = '#000';

const upperCase = str => {
    return str
        .split()
        .map(c => c.toUpperCase())
        .join();
};

const OathSheets = {
    EN: OathSheetEN,
    ES: OathSheetES,
    FA: OathSheetFA,
    HI: OathSheetHI,
    HY: OathSheetHY,
    KM: OathSheetKM,
    KO: OathSheetKO,
    RU: OathSheetRU,
    TH: OathSheetTH,
    TL: OathSheetTL,
    ZH: OathSheetZH,
    JA: OathSheetJA,
    VI: OathSheetVI,
};

const tableTemplate = {
    table: {
        widths: ['*', '*'],
        body: [],
    },
    layout: {
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingLeft: () => 4,
        paddingRight: index => (index === 0 ? 12 : 0),
        paddingTop: () => 0,
        paddingBottom: () => 0,
    },
};

Uint8Slice();
class UocavaPass extends PureComponent {
    constructor(props) {
        super(props);
        this.pdfName = pdfName[props.isRavbm ? 'RAV' : 'UOC'];
    }

    handleClick = () => {
        const {
            language,
            updateSelectedLanguage
        } = this.props;
        if (language === 'FA') {
            updateSelectedLanguage('EN');
            setTimeout(() => {
                this.generatePDF();
                updateSelectedLanguage('FA');
            }, 1000);
        } else {
            this.generatePDF();
        }
    };

    getPageDisplay(page, totalPages) {
        const {
            copy: {
                zku,
                zkv,
                zlc
            },
            isRavbm,
        } = this.props;

        if (isRavbm) {
            return `${zku}${page}${zkv}${totalPages}${zlc}`;
        }

        if (page !== 1) {
            return `${zku}${page - 1}${zkv}${totalPages - 1}${zlc}`;
        }

        return '';
    }

    generatePDF = async () => {
        const {
            selections,
            ballotPrecinctData,
            electionName,
            electionDate,
            hasWriteIns,
            isRavbm,
            copy,
            type,
            buttonCallback,
            handleError,
        } = this.props;
        let {
            language
        } = this.props;
        language = language === 'FA' ? 'EN' : language;
        const statusName = `${type}Status`;
        buttonCallback(statusName, PASS_ACTION_STATUSES.LOADING);

        const largeQr = 220;
        const smallQr = 150;
        const circleSize = 60;
        const smallImageSize = 100;
        const qrCodeType = isRavbm ? QR_CODE_TYPES.RAVBM : QR_CODE_TYPES.UOCAVA;
        const isRTLLanguage = RTL_LANGUAGES.includes(language);

        const largeQrString = renderToString( <
            QRCodeGenerator size = {
                largeQr
            }
            hasWriteIns = {
                hasWriteIns
            }
            selections = {
                selections
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            qrCodeType = {
                qrCodeType
            }
            />
        );

        const smallQrString = renderToString( <
            QRCodeGenerator size = {
                smallQr
            }
            selections = {
                selections
            }
            hasWriteIns = {
                hasWriteIns
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            qrCodeType = {
                qrCodeType
            }
            />
        );
        const largeImageUrl = PollPassBase.convertSVGToDataUrl(largeQrString, largeQr);
        const smallImageUrl = PollPassBase.convertSVGToDataUrl(smallQrString, smallQr);
        const circle1 = PollPassBase.convertSVGToDataUrl(Circle1, circleSize, circleSize, BLACK);
        const circle2 = PollPassBase.convertSVGToDataUrl(Circle2, circleSize, circleSize, BLACK);
        const circle3 = PollPassBase.convertSVGToDataUrl(Circle3, circleSize, circleSize, BLACK);
        const emptyPage = {
            text: isRavbm ? '' : copy.zld,
            pageBreak: isRavbm ? '' : 'after',
            margin: isRavbm ? '' : [0, 330, 0, 0],
            alignment: isRavbm ? '' : 'center',
        };
        const firstHeader = {
            uocavaSectionType: 'firstHeader',
            table: {
                widths: [267.5, 267.5],
                body: [
                    [{
                            image: largeImageUrl,
                            width: largeQr / 2,
                            alignment: 'center',
                            border: [false, true, true, false],
                            margin: [0, smallQr / 4],
                        },

                        {
                            stack: [{
                                    image: LaSeal,
                                    width: smallImageSize,
                                },
                                `${upperCase(copy.zko)}
                ${copy.zkp}\n\n`,
                                {
                                    text: copy.zkq,
                                    style: 'boldBody',
                                    margin: [10, 0]
                                },
                            ],
                            alignment: 'center',
                            border: [true, true, false, false],
                            margin: [0, 10],
                        },
                    ],
                    [{
                            text: [{
                                    text: `${`${electionDate.slice(5, 7)}/${electionDate.slice(
                    8,
                    10
                  )}/${electionDate.slice(0, 4)}`}\n\n`,
                                    style: 'boldBody',
                                    alignment: language === 'FA' ? 'right' : '',
                                },
                                {
                                    text: filterZeroWidthSpace(electionName, language),
                                    style: 'header',
                                    alignment: language === 'FA' ? 'right' : '',
                                },
                            ],
                            border: [false, true, false, true],
                            fillColor: V_LIGHT_STYLE,
                            // margin: [MARGIN / 2, 10],
                        },
                        {
                            table: {
                                widths: [80, 80, 80],
                                body: [
                                    [
                                        '',
                                        {
                                            text: copy.zkw,
                                            style: 'boldSmall',
                                            alignment: 'center',
                                        },
                                        '',
                                    ],
                                    [{
                                            image: language === 'FA' ? circle3 : circle1,
                                            width: circleSize / 2,
                                            alignment: 'center',
                                        },
                                        {
                                            image: circle2,
                                            width: circleSize / 2,
                                            alignment: 'center',
                                        },
                                        {
                                            image: language === 'FA' ? circle1 : circle3,
                                            width: circleSize / 2,
                                            alignment: 'center',
                                        },
                                    ],
                                    [{
                                            image: language === 'FA' ? (isRavbm ? Envelope : Fax) : Printer,
                                            width: smallImageSize / 2,
                                            alignment: 'center',
                                        },
                                        {
                                            image: Sign,
                                            width: smallImageSize / 2,
                                            alignment: 'center',
                                        },
                                        {
                                            image: language === 'FA' ? Printer : isRavbm ? Envelope : Fax,
                                            width: smallImageSize / 2,
                                            alignment: 'center',
                                        },
                                    ],
                                    [{
                                            text: language === 'FA' ? copy.zkz : copy.zkx,
                                            style: 'boldSmall',
                                            alignment: 'center',
                                            colSpan: 1,
                                        },
                                        {
                                            text: copy.zky,
                                            style: 'boldSmall',
                                            alignment: 'center',
                                            colSpan: 1,
                                        },
                                        {
                                            text: language === 'FA' ? copy.zkx : copy.zkz,
                                            style: 'boldSmall',
                                            alignment: 'center',
                                            colSpan: 1,
                                        },
                                    ],
                                    [{
                                        text: copy.zkr,
                                        style: 'boldSmall',
                                        alignment: 'center',
                                        colSpan: 3,
                                    }, ],
                                ],
                            },
                            border: [false, true, false, true],
                            fillColor: V_LIGHT_STYLE,
                            margin: [0, 10],
                            layout: 'noBorders',
                        },
                    ],
                ],
            },

            layout: {
                hLineWidth: i => (i === 0 ? 1 : 3),
                vLineColor: () => LIGHT_STYLE,
                vLineStyle: () => ({
                    dash: {
                        length: 3
                    }
                }),
            },
        };
        const qrCode = smallImageUrl;
        const qrSize = smallImageSize / 2;

        const header = {
            uocavaSectionType: 'header',
            table: {
                widths: [qrSize + MARGIN, qrSize + MARGIN / 2, '*'],
                body: [
                    [{
                            image: qrCode,
                            width: qrSize,
                            alignment: 'center',
                            margin: [0, qrSize / 4],
                            border: [false, true, true, true],
                        },
                        {
                            image: LaSeal,
                            width: qrSize,
                            alignment: 'center',
                            margin: [0, qrSize / 4],
                            border: [true, true, false, true],
                        },
                        {
                            text: [{
                                    text: copy.zla,
                                    alignment: isRTLLanguage ? 'right' : ''
                                },
                                '\n\n',
                                {
                                    text: `${electionDate.slice(5, 7)}/${electionDate.slice(
                    8,
                    10
                  )}/${electionDate.slice(0, 4)}`,
                                    style: 'boldBody',
                                    alignment: isRTLLanguage ? 'right' : '',
                                },
                                '\n',
                                {
                                    text: filterZeroWidthSpace(electionName, language),
                                    style: 'h2',
                                    alignment: isRTLLanguage ? 'right' : '',
                                },
                            ],
                            border: [false, true, false, true],
                        },
                    ],
                ],
            },
            layout: {
                hLineWidth: i => (i === 0 ? 1 : 3),
                vLineColor: () => LIGHT_STYLE,
                vLineStyle: () => ({
                    dash: {
                        length: 3
                    }
                }),
            },
        };

        const pageTitle = [{
            uocavaSectionType: 'pageTitle',
            text: copy.zlb,
            style: 'h2',
            alignment: isRTLLanguage ? 'right' : '',
            margin: isRTLLanguage ? [0, 20, MARGIN, 20] : [0, 20]
        }, ];

        const selectionsTable = this.generateSelections(smallImageUrl, smallImageSize / 2);
        const measurer = new PdfMeasure();

        await measurer.init(language);

        // heights for headers include pageTitle
        const heights = measurer.getHeights(
            docBase(this.pdfName, language), [
                [
                    cloneDeep(firstHeader),
                    cloneDeep(pageTitle),
                ],
                [
                    cloneDeep(header),
                    cloneDeep(pageTitle),
                ],
                {
                    uocavaSectionType: 'selectionsTable',
                    ...cloneDeep(selectionsTable)
                },
            ]
        );

        const contentSpace = Y_BOUND - MARGIN * 2;

        let i = 0;
        let height = heights.firstHeader;

        const content = [
            firstHeader,
            cloneDeep(pageTitle),
            cloneDeep(tableTemplate),
        ];

        /**
         * Note if one choice and smaller header do not fit on one page
         * this will infinitely loop
         */
        while (Array.isArray(heights.choicesRows) &&
            i < heights.choicesRows.length) {
            const lastIndex = content.length - 1;

            if (heights.choicesRows[i] + height <= contentSpace) {
                const tableBody = content[lastIndex].table.body;

                tableBody.push(selectionsTable.table.body[i]);
                height += heights.choicesRows[i];
                i += 1;
            } else {
                const section = content[lastIndex];

                if (section.table && Array.isArray(section.table.body) &&
                    !section.table.body.length) {
                    /**
                     * When no choices fit larger header
                     * pop thi section and pageTitle and try new page
                     * with smaller header
                     */
                    content.pop();
                    content.pop();
                    content[content.length - 1].pageBreak = 'after';
                } else {
                    content[lastIndex].pageBreak = 'after';
                }

                content.push(cloneDeep(header));
                content.push(cloneDeep(pageTitle));
                content.push(cloneDeep(tableTemplate));
                height = heights.header;
            }
        }

        const docDefinition = {
            ...docBase(this.pdfName, language),
            header: (page, totalPages) => ({
                text: this.getPageDisplay(page, totalPages),
                alignment: 'right',
                margin: [MARGIN, 10],
                style: 'small',
            }),
            content: [
                emptyPage,
                ...content
            ]
        };

        const pdfBuilder = await PollPassBase.getPdfBuilder(language);
        const ballotPdf = pdfBuilder.createPdf(docDefinition);

        try {
            if (isRavbm && (type === PASS_ACTION_TYPES.DOWNLOAD || IS_MS_BROWSER)) {
                ballotPdf.download(this.pdfName);
            } else if (isRavbm) {
                ballotPdf.open();
            } else {
                await this.mergeAndOpenUOCPDF(ballotPdf)
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
            buttonCallback(statusName, PASS_ACTION_STATUSES.COMPLETE);
        } catch (err) {
            handleError({
                title: copy.ztz,
                line1: copy.zua,
                line2: copy.zub
            });
            buttonCallback(statusName, PASS_ACTION_STATUSES.ERROR);
        }
    };

    async mergeAndOpenUOCPDF(ballotPdf) {
        const {
            type
        } = this.props;
        let {
            language
        } = this.props;
        language = language === 'FA' ? 'EN' : language;
        /* need to return a promise rather than a callback */
        const getDataUrl = pdfMakePdf => (
            new Promise(resolve => {
                pdfMakePdf.getDataUrl(dataUrl => {
                    resolve(dataUrl);
                });
            })
        );

        /* Formatting ballotPdf to be used with pdf-lib to merge into new pdf */
        const ballotPdfDataUrl = await getDataUrl(ballotPdf);
        const ballot = base64ToArrayBuffer(ballotPdfDataUrl.split('base64,')[1]);
        const ballotDoc = await PDFDocument.load(ballot);

        /* Loading oath sheet in appropriate language and adding it to the pdf doc */
        const oathSheet = await fetch(OathSheets[language] || OathSheets.EN)
            .then(res => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(oathSheet);

        /* Adding the generated ballot to the pdf doc */
        const donorPages = await pdfDoc.copyPages(ballotDoc, ballotDoc.getPageIndices());
        donorPages.forEach(page => {
            pdfDoc.addPage(page);
        });

        pdfDoc.setTitle(this.pdfName);

        const blob = new Blob([await pdfDoc.save()], {
            type: 'application/pdf'
        });

        if (IS_MS_BROWSER) {
            window.navigator.msSaveOrOpenBlob(blob, this.pdfName);
        } else {
            const pdfUrl = URL.createObjectURL(blob);
            if (type === PASS_ACTION_TYPES.DOWNLOAD) {
                const downloadElement = document.createElement('a');
                downloadElement.setAttribute('href', pdfUrl);
                downloadElement.setAttribute('download', this.pdfName);
                downloadElement.style.display = 'none';
                document.body.appendChild(downloadElement);
                downloadElement.click();
                document.body.removeChild(downloadElement);
            } else {
                const success = window.open(pdfUrl, '_blank');

                if (!success) {
                    throw new Error();
                }
            }
        }
    }

    generateSelections() {
        const {
            contests,
            selections,
            writeInValues,
            copy,
        } = this.props;
        let {
            language
        } = this.props;
        language = language === 'FA' ? 'EN' : language;
        const newTable = cloneDeep(tableTemplate);

        let tableRow = [];
        for (let itr = 0; itr < contests.length; itr += 1) {
            const curContest = contests[itr];
            const choiceCodes = selections[curContest.id];
            let choices = [];

            if (isEmpty(choiceCodes)) {
                /* The text/alignment object is unnecessary for an empty string but it's good
                to have it there for proper formatting in case we ever do have a value for the text. */
                choices =
                    language === 'FA' ?
                    [
                        [{
                            text: ''
                        }, {
                            text: copy.zks,
                            alignment: 'right'
                        }]
                    ] :
                    [
                        [copy.zks, {
                            text: '',
                            alignment: 'right'
                        }]
                    ];
            } else {
                choices = choiceCodes.map(code => {
                    const cand = find(curContest.candidates, ['id', code]);
                    const candId = getCandidateId(cand);
                    const writeInValue = filterZeroWidthSpace(get(writeInValues, candId, null), language);

                    return language === 'FA' ?
                        [{
                                text: code
                            },
                            {
                                text: writeInValue ||
                                    filterZeroWidthSpace(get(cand, 'short_name', copy.zkt), language),
                                alignment: 'right',
                            },
                        ] :
                        [
                            writeInValue ||
                            filterZeroWidthSpace(get(cand, 'short_name', copy.zkt), language),
                            {
                                text: code,
                                alignment: 'right'
                            },
                        ];
                });
            }

            /* Add contest name for rendering in table */
            choices.unshift([{
                    text: filterZeroWidthSpace(curContest.name, language),
                    style: 'boldBody',
                    colSpan: 2,
                    alignment: language === 'FA' ? 'right' : '',
                },
                {},
            ]);

            /* Add extra row for spacing */
            choices.push(['', '']);
            tableRow.push({
                layout: 'noBorders',
                table: {
                    widths: language === 'FA' ? [30, 200] : [200, 30],
                    headerRows: 1,
                    body: choices,
                },
            });

            if (itr % 2 !== 0 && itr < contests.length - 1) {
                newTable.table.body.push(tableRow);
                tableRow = [];
            } else if (itr === contests.length - 1) {
                if (itr % 2 === 0) tableRow.push('');
                newTable.table.body.push(tableRow);
                break;
            }
        }
        return newTable;
    }

    render() {
        const {
            buttonClass,
            contentTabIndex,
            buttonTextMobileTablet,
            buttonTextDesktop,
        } = this.props;
        return ( <
            button type = 'button'
            className = {
                `${buttonClass} ${styles.generate}`
            }
            onClick = {
                this.handleClick
            }
            tabIndex = {
                contentTabIndex
            } >
            <
            span className = {
                styles.hiddenDesktop
            } > {
                buttonTextMobileTablet
            } < /span> <
            span className = {
                styles.hiddenMobileTablet
            } > {
                buttonTextDesktop
            } < /span> <
            /button>
        );
    }
}

UocavaPass.propTypes = {
    contests: arrayOf(object).isRequired,
    selections: objectOf(arrayOf(string)).isRequired,
    ballotPrecinctData: shape({
        electionId: string.isRequired,
        reportingUnitId: string.isRequired,
        ballotStyleId: string.isRequired,
        partyId: string.isRequired,
    }).isRequired,
    electionName: string,
    isRavbm: bool.isRequired,
    electionDate: objectOf(Date),
    type: oneOf(PASS_ACTION_TYPES_VALUES),
    buttonCallback: func,
    handleError: func
};

UocavaPass.defaultProps = {
    electionName: 'Election',
    electionDate: new Date(),
    buttonCallback: noop,
    handleError: noop,
};

export default UocavaPass;