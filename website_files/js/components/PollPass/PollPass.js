import React, {
    PureComponent
} from 'react';
import noop from 'lodash/noop';
import {
    renderToString
} from 'react-dom/server';
import {
    objectOf,
    arrayOf,
    shape,
    string,
    func,
    oneOf
} from 'prop-types';

import PollPassBase, {
    MARGIN,
    LOGO_SIZE,
    HALF_X,
    HALF_Y,
    SCALING,
    X_BOUND,
    Y_BOUND,
    LIGHT_STYLE,
    docBase,
    RTL_LANGUAGES,
} from './PollPassBase';
import QRCodeGenerator, {
    QR_CODE_TYPES
} from '../QRCode/QRCodeGenerator';
import {
    PASS_ACTION_STATUSES,
    PASS_ACTION_TYPES_VALUES,
    PASS_ACTION_TYPES,
} from '../../constants/passes';

// All image imports
import pollPassBmd from '../../images/pollPassBmd2.png';
import pollPassCheck from '../../images/pollPassCheck2.png';
import pollPassInsert from '../../images/pollPassInsert2.png';
import pollPassScan from '../../images/pollPassScan2.png';
import pollPassLogo from '../../images/pollPassLogo2.png';
import pollPassFold1 from '../../images/pollPassFold1.png';
import pollPassFold2 from '../../images/pollPassFold2.png';
import pollPassFold3 from '../../images/pollPassFold3.png';
import pollPassFold4 from '../../images/pollPassFold4.png';
import pollPassFold1Rtl from '../../images/pollPassFold1Rtl.png';
import pollPassFold2Rtl from '../../images/pollPassFold2Rtl.png';
import pollPassFold3Rtl from '../../images/pollPassFold3Rtl.png';
import pollPassFold4Rtl from '../../images/pollPassFold4Rtl.png';
import ScreenshotModal from '../../pages/PollPass/ScreenshotModal';
import {
    IS_ANDROID,
    IS_MS_BROWSER
} from '../../utils/detectBrowser';
import {
    pdfName
} from '../../constants/names';
import styles from './PollPass.module.css';
import {
    filterZeroWidthSpace
} from '../../utils/pdfHelpers';

export const AR_H = 7;
export const AR_SEP = 32.4;
export const AR_L_W = 2;
export const AR_L_C = 'round';

const QUADRANT_WIDTH = HALF_X - 2 * MARGIN;
const QUADRANT_VERT_MID = HALF_Y / 2;
const LINE_WIDTH = 0.01;

const FOLD_IMAGES = {
    pollPassFold1,
    pollPassFold2,
    pollPassFold3,
    pollPassFold4,
    pollPassFold1Rtl,
    pollPassFold2Rtl,
    pollPassFold3Rtl,
    pollPassFold4Rtl,
};

class PollPass extends PureComponent {
    static buildArrowSet(x, y) {
        return [{
                type: 'line',
                x1: x,
                y1: y + AR_H,
                x2: x + AR_H,
                y2: y,
                lineWidth: AR_L_W,
                lineColor: LIGHT_STYLE,
                lineCap: AR_L_C,
            },
            {
                type: 'line',
                x1: x + AR_H,
                y1: y,
                x2: x + AR_H * 2,
                y2: y + AR_H,
                lineWidth: AR_L_W,
                lineColor: LIGHT_STYLE,
                lineCap: AR_L_C,
            },
            {
                type: 'line',
                x1: x,
                y1: y + AR_H * 2,
                x2: x + AR_H,
                y2: y + AR_H,
                lineWidth: AR_L_W,
                lineColor: LIGHT_STYLE,
                lineCap: AR_L_C,
            },
            {
                type: 'line',
                x1: x + AR_H,
                y1: y + AR_H,
                x2: x + AR_H * 2,
                y2: y + AR_H * 2,
                lineWidth: AR_L_W,
                lineColor: LIGHT_STYLE,
                lineCap: AR_L_C,
            },
        ];
    }

    constructor(props) {
        super(props);

        this.state = {
            showQRModal: false,
        };
    }

    handleClick = () => {
        const {
            buttonCallback,
            type
        } = this.props;
        const statusName = `${type}Status`;

        if (type === PASS_ACTION_TYPES.SCREENSHOT) {
            buttonCallback(statusName, PASS_ACTION_STATUSES.COMPLETE);
            this.setState({
                showQRModal: true
            });
        } else {
            buttonCallback(statusName, PASS_ACTION_STATUSES.LOADING);
            this.generatePDF();
        }
    };

    closeModal = () => {
        this.setState({
            showQRModal: false
        });
    };

    getAddressLine1 = () => {
        const {
            language
        } = this.props;
        const LINE_Y = QUADRANT_VERT_MID - 22;
        const line = {
            type: 'line',
            y1: LINE_Y,
            y2: LINE_Y,
            lineWidth: LINE_WIDTH,
            lineColor: '#000',
            x1: (X_BOUND / 4) * 3 - 30,
            x2: X_BOUND - MARGIN,
        };
        if (RTL_LANGUAGES.includes(language)) {
            line.x1 = HALF_X - MARGIN - 60;
            line.x2 = MARGIN;
        } else if (language === 'KM') {
            line.x1 = (X_BOUND / 4) * 3 - 5;
            line.x2 = X_BOUND - MARGIN;
        }

        return line;
    };

    getAddressLine2 = () => {
        const {
            language
        } = this.props;
        const LINE_Y = QUADRANT_VERT_MID + 8;
        const line = {
            type: 'line',
            y1: LINE_Y,
            y2: LINE_Y,
            lineWidth: LINE_WIDTH,
            lineColor: '#000',
            x1: HALF_X + MARGIN,
            x2: X_BOUND - MARGIN,
        };
        if (RTL_LANGUAGES.includes(language)) {
            line.x1 = HALF_X - MARGIN;
            line.x2 = MARGIN;
        }

        return line;
    }


    /**
     * Get an array of Line objects for hours, dash and minutes. 
     * Right to left languages have lines generated right to left while the left to right
     * languages are generated left to right here. Lines are calculated in one function 
     * since their locations are relative to each other.
     * @return {array} - array of lines
     */
    getTimeLines = () => {
        const {
            language
        } = this.props;
        const LINE_Y = QUADRANT_VERT_MID + 48;
        const DASH_Y = QUADRANT_VERT_MID + 38;
        const line = {
            type: 'line',
            lineWidth: LINE_WIDTH,
            y1: LINE_Y,
            y2: LINE_Y,
            lineColor: '#000',
        };
        const hours = {
            ...line,
            x1: HALF_X + MARGIN + 80
        };
        const dash = {
            ...line,
            y1: DASH_Y,
            y2: DASH_Y,
        };
        const minutes = {
            ...line,
            x2: X_BOUND - MARGIN
        };
        let direction = 1;

        if (RTL_LANGUAGES.includes(language)) {
            hours.x1 = HALF_X + MARGIN - 130;
            minutes.x2 = MARGIN;
            direction = -1;
        } else if (language === 'RU' || language === 'KM') {
            hours.x1 = HALF_X + MARGIN + 110;
        }

        const width = Math.abs(hours.x1 - minutes.x2);
        const dashMargin = 10;
        const dashWidth = 5;
        const dashLength = dashMargin * 2 + dashWidth;
        const lineWidth = (width - dashLength) / 2;

        hours.x2 = hours.x1 + direction * lineWidth;
        dash.x1 = hours.x2 + direction * dashMargin;
        dash.x2 = dash.x1 + direction * dashWidth;
        minutes.x1 = minutes.x2 - direction * lineWidth;

        return [
            hours,
            dash,
            minutes
        ];
    };

    /**
     * pdfMake doesn't support setting numbers on right for right to left languages
     * so we use columns and generate the numbers ourselves
     * @return {array} - array of rows
     */
    getGuideRows() {
        const {
            copy,
            language
        } = this.props;
        const rows = [];
        const isRtl = RTL_LANGUAGES.includes(language);
        const alignment = isRtl ? 'right' : '';
        const numberWidth = 30;
        // columns need set width to ensure line breaks for languages (Kh, Th)
        // that do not utilize spaces
        const width = QUADRANT_WIDTH - numberWidth;
        const items = [{
                text: copy.zky,
                alignment,
                width
            },
            {
                text: copy.zkz,
                alignment,
                width
            },
            {
                text: copy.zla,
                alignment,
                width
            },
            {
                text: copy.zlb,
                alignment,
                width
            },
            {
                text: copy.zlc,
                alignment,
                width
            },
            {
                text: copy.zld,
                alignment,
                width
            },
        ];
        const rowMargin = [0, 10, 0, 0];

        items.forEach((item, index) => {
            const columns = [];
            const number = {
                text: `${index + 1}.`,
                width: numberWidth,
                style: 'boldBody'
            };

            if (isRtl) {
                number.alignment = 'right';
                number.text = number.text.split('').reverse().join('');
                columns.push(item);
                columns.push(number);
            } else {
                columns.push(number);
                columns.push(item);
            }

            rows.push({
                margin: rowMargin,
                columns,
                columnGap: 0
            });
        });

        return rows;
    }

    /** Upper Left or Upper Right Quadrant (RTL) */
    getQuadrantQR() {
        const {
            copy,
            language,
            hasWriteIns,
            selections,
            ballotPrecinctData,
            electionName,
            electionDate
        } = this.props;
        const qrSize = 220;
        const qrString = renderToString( <
            QRCodeGenerator hasWriteIns = {
                hasWriteIns
            }
            size = {
                qrSize
            }
            selections = {
                selections
            }
            ballotPrecinctData = {
                ballotPrecinctData
            }
            qrCodeType = {
                QR_CODE_TYPES.ISB
            }
            />
        );
        const imageUrl = PollPassBase.convertSVGToDataUrl(qrString, qrSize);
        const RTL_X_OFFSET = RTL_LANGUAGES.includes(language) ? HALF_X : 0;
        const electionStyle = {
            electionNameStyle: {},
            electionTitleStyle: {}
        };

        if (['HY', 'RU'].includes(language)) {
            electionStyle.electionNameStyle = {
                fontSize: 10
            };
            electionStyle.electionTitleStyle = {
                fontSize: 16
            };
        }

        return [{
                absolutePosition: {
                    x: 0,
                    y: 0
                },
                canvas: [
                    // Directional Arrows to Scan
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN, MARGIN),
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN + AR_H * 2 + AR_SEP, MARGIN),
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN + AR_H * 4 + AR_SEP * 2, MARGIN),
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN + AR_H * 6 + AR_SEP * 3, MARGIN),
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN + AR_H * 8 + AR_SEP * 4, MARGIN),
                    ...PollPass.buildArrowSet(RTL_X_OFFSET + MARGIN + AR_H * 10 + AR_SEP * 5, MARGIN),
                    // Dividers
                    {
                        type: 'line',
                        x1: RTL_X_OFFSET + HALF_X / 4,
                        y1: QUADRANT_VERT_MID - 4 + LOGO_SIZE / 2,
                        x2: RTL_X_OFFSET + (HALF_X / 4) * 3,
                        y2: QUADRANT_VERT_MID - 4 + LOGO_SIZE / 2,
                        lineWidth: LINE_WIDTH,
                        dash: {
                            length: HALF_X / 4 - LOGO_SIZE / 2 - 10,
                            space: LOGO_SIZE + 20,
                        },
                    },
                    {
                        type: 'line',
                        x1: RTL_X_OFFSET + HALF_X / 2 - MARGIN,
                        y1: HALF_Y - MARGIN * 1.25 - 5,
                        x2: RTL_X_OFFSET + HALF_X / 2 + MARGIN,
                        y2: HALF_Y - MARGIN * 1.25 - 5,
                        lineWidth: LINE_WIDTH,
                    },
                ]
            },
            {
                image: imageUrl,
                width: qrSize / 2,
                relativePosition: {
                    x: RTL_X_OFFSET + HALF_X / 2 - MARGIN - qrSize / 4,
                    y: MARGIN * 1.5
                },
            },
            {
                image: pollPassLogo,
                width: LOGO_SIZE,
                relativePosition: {
                    x: RTL_X_OFFSET + HALF_X / 2 - MARGIN - LOGO_SIZE / 2,
                    y: QUADRANT_VERT_MID - MARGIN - 4,
                },
            },
            {
                columns: [{
                        stack: [{
                                text: copy.zlj,
                                // styles passed in as empty object in array cause error in pdfMake
                                style: ['title', {
                                    fontSize: 26,
                                    ...styles.electionTitleStyle
                                }],
                            },
                            {
                                text: filterZeroWidthSpace(electionName, language),
                                style: electionStyle.electionNameStyle,
                            }
                        ],
                    },
                    '',
                ],
                alignment: 'center',
                relativePosition: {
                    x: RTL_X_OFFSET + 0,
                    y: QUADRANT_VERT_MID + MARGIN
                },
                columnGap: MARGIN * 2,
            },
            {
                columns: [{
                    /* The .replace regex strips bidirectional control characters added by 
                      intl and most date formatters (and any other non-printable characters).
                      These characters are an issue in Internet Explorer. Regex from:
                    https://stackoverflow.com/questions/24229262/match-non-printable-non-ascii-characters-and-remove-from-text/24231346#24231346
            
                    If later decide to not use intl, probably want to create date with:
                    new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(electionDate))
                    replacing 'en-US' with `${language}-US` when support different languages

                    This isn't necessary in UocavaPass.js as the lodash upperCase function seems to do it.
                    */
                    // text: intl
                    //   .formatDate(electionDate, {
                    //     month: 'long',
                    //     day: 'numeric',
                    //     year: 'numeric',
                    //   })
                    //   .replace(/[^ -~]+/g, ''),
                    text: `${electionDate.slice(5, 7)}/${electionDate.slice(8, 10)}/${electionDate.slice(
              0,
              4
            )}`,
                    style: 'boldBody',
                    width: HALF_X,
                    alignment: 'center'
                }, ],
                relativePosition: {
                    x: RTL_X_OFFSET + 0 - MARGIN,
                    y: HALF_Y - MARGIN * 2.25
                },
            },
        ];
    }

    /** Upper Right or Upper Left Quadrant (RTL) */
    getQuadrantLocation() {
        const {
            copy,
            language,
        } = this.props;

        const FOLD_IMAGE_GAP = 22;
        const FOLD_IMAGE_Y = HALF_Y - MARGIN * 3 - 29;
        const FOLD_IMAGE_GAP_MID = FOLD_IMAGE_GAP / 2;

        const fileSuffix = RTL_LANGUAGES.includes(language) ? 'Rtl' : '';
        const foldImageSizes = [87, 115, 95, 60].map(size => size * SCALING);
        const foldImages = [{
                image: FOLD_IMAGES[`pollPassFold1${fileSuffix}`],
                width: foldImageSizes[0],
            },
            {
                image: FOLD_IMAGES[`pollPassFold2${fileSuffix}`],
                width: foldImageSizes[1],
                margin: [0, 5, 0, 0]
            },
            {
                image: FOLD_IMAGES[`pollPassFold3${fileSuffix}`],
                width: foldImageSizes[2],
                margin: [0, 11, 0, 0]
            },
            {
                image: FOLD_IMAGES[`pollPassFold4${fileSuffix}`],
                width: foldImageSizes[3],
                margin: [0, 7, 0, 0]
            },
        ];

        const dividers = [];
        // offset is added so divider clears image
        let dividerOffset = 1;
        let alignment = '';
        let quadrantX = HALF_X;
        let infoX = HALF_X;

        if (RTL_LANGUAGES.includes(language)) {
            quadrantX = 0;
            infoX = -HALF_X;
            foldImages.reverse();
            foldImageSizes.reverse();
            dividerOffset = -1;
            alignment = 'right';
        }

        let xCoord = MARGIN - FOLD_IMAGE_GAP_MID;

        const dividerY1 = 36;
        const dividerY2 = 82;

        for (let i = 0; i < foldImageSizes.length - 1; i += 1) {
            xCoord += foldImageSizes[i] + FOLD_IMAGE_GAP;
            dividers.push({
                type: 'line',
                y1: dividerY1,
                y2: dividerY2,
                lineWidth: LINE_WIDTH,
                x1: xCoord + dividerOffset,
                x2: xCoord + dividerOffset,
                lineColor: '#aaa'
            });
        }

        return [{
                columns: [{
                    width: QUADRANT_WIDTH,
                    stack: [{
                            text: copy.zks,
                            style: 'h2',
                            alignment
                        },
                        {
                            text: copy.zkt,
                            style: 'bigBody',
                            alignment,
                            margin: [0, 10, 0, 0]
                        },
                        {
                            text: copy.zku,
                            style: ['bigBody', 'bold'],
                            alignment
                        },
                    ],
                }, ],
                relativePosition: {
                    x: quadrantX,
                    y: 0
                },
            },
            {
                text: [{
                        text: '\ue947 ',
                        style: 'icon',
                        alignment
                    },
                    {
                        text: copy.zkv,
                        style: 'bigBody',
                        alignment
                    },
                ],
                relativePosition: {
                    x: infoX,
                    y: QUADRANT_VERT_MID - 70
                },
            },
            {
                text: [{
                        text: '\ue94f ',
                        style: 'icon',
                        alignment
                    },
                    {
                        text: copy.zkw,
                        style: 'bigBody',
                        alignment
                    },
                ],
                relativePosition: {
                    x: infoX,
                    y: QUADRANT_VERT_MID
                },
            },
            {
                text: copy.zkr,
                relativePosition: {
                    x: infoX,
                    y: QUADRANT_VERT_MID + 55
                },
                style: ['bigBody', 'bold'],
                alignment,
            },
            {
                columns: foldImages,
                columnGap: FOLD_IMAGE_GAP,
                alignment: 'center',
                relativePosition: {
                    x: quadrantX,
                    y: FOLD_IMAGE_Y
                },
            },
            {
                absolutePosition: {
                    x: quadrantX,
                    y: FOLD_IMAGE_Y
                },
                canvas: dividers
            },
            {
                absolutePosition: {
                    x: 0,
                    y: 0
                },
                canvas: [
                    this.getAddressLine1(),
                    this.getAddressLine2(),
                    ...this.getTimeLines(),
                ],
            }
        ];
    }

    /** Lower Left or Lower Right Quadrant (RTL) */
    getQuadrantGuide() {
        const {
            copy,
            language,
        } = this.props;
        const FONT_SIZE_BASE = 12;
        // prevent overflow past printable range
        const FONT_SIZES = {
            RU: FONT_SIZE_BASE - 1,
            TL: FONT_SIZE_BASE - 1,
            HY: FONT_SIZE_BASE - 1,
        };
        return {
            stack: [{
                    text: copy.zkx,
                    style: 'h2',
                    alignment: RTL_LANGUAGES.includes(language) ? 'right' : '',
                },
                ...this.getGuideRows(),
            ],
            fontSize: FONT_SIZES[language] ? FONT_SIZES[language] : FONT_SIZE_BASE,
        };
    }

    /** Lower Right or Lower Left Quadrant (RTL) */
    getQuadrantGraphicsGuide() {
        const {
            copy,
            language,
        } = this.props;

        const WIDTH = HALF_X / 2 - MARGIN * 1.5;
        const PAD_RIGHT = 6;
        const PAD_LEFT = 6;
        const COL_WIDTH = WIDTH + PAD_RIGHT + PAD_LEFT;

        const quadrant = {
            margin: RTL_LANGUAGES.includes(language) ? [-10, 0, 0, 0] : 0,
            layout: {
                defaultBorder: false,
                paddingLeft: () => PAD_LEFT,
                paddingRight: () => PAD_RIGHT,
            },
            table: {
                widths: [COL_WIDTH, COL_WIDTH],
                body: [
                    [{
                            image: pollPassBmd,
                            width: WIDTH,
                            alignment: 'center',
                        },
                        {
                            image: pollPassInsert,
                            width: WIDTH,
                            alignment: 'center',
                        },
                    ],
                    [{
                            text: copy.zle,
                            style: 'boldSmall',
                            alignment: 'center',
                        },
                        {
                            text: copy.zlf,
                            style: 'boldSmall',
                            alignment: 'center',
                        },
                    ],
                    ['\n', '\n'],
                    [{
                            image: pollPassScan,
                            width: WIDTH,
                            alignment: 'center',
                        },
                        {
                            image: pollPassCheck,
                            width: WIDTH,
                            alignment: 'center',
                        },
                    ],
                    [{
                            text: copy.zlg,
                            style: 'boldSmall',
                            alignment: 'center',
                        },
                        {
                            text: copy.zlh,
                            style: 'boldSmall',
                            alignment: 'center',
                        },
                    ],
                ],
            }
        };

        if (RTL_LANGUAGES.includes(language)) {
            quadrant.table.body.forEach((row) => {
                row.reverse();
            });
        }

        return quadrant;
    }

    /** returns lower quadrants which are in column layout */
    getLowerQuadrants() {
        const {
            language,
        } = this.props;
        const lowerQuadrants = {
            columns: [],
            relativePosition: {
                x: 0,
                y: HALF_Y
            },
            columnGap: MARGIN,
        };

        if (RTL_LANGUAGES.includes(language)) {
            lowerQuadrants.columns.push(this.getQuadrantGraphicsGuide());
            lowerQuadrants.columns.push(this.getQuadrantGuide());
        } else {
            lowerQuadrants.columns.push(this.getQuadrantGuide());
            lowerQuadrants.columns.push(this.getQuadrantGraphicsGuide());
        }

        return lowerQuadrants;
    }

    getFooter = () => {
        const {
            copy,
            electionName,
            language
        } = this.props;

        let footerX = HALF_X;

        const content = {
            text: [{
                    text: copy.zli,
                    style: 'boldXSmall',
                },
                {
                    text: '  ',
                    style: 'xSmall',
                },
                {
                    text: filterZeroWidthSpace(electionName, language),
                    style: 'xSmall',
                },
            ],
            width: '*',
        };
        const seal = {
            image: pollPassLogo,
            width: 20,
        };
        const SEAL_MARGIN_TOP = -10;
        const columns = [];

        if (RTL_LANGUAGES.includes(language)) {
            footerX = 0;
            content.alignment = '';
            content.margin = [MARGIN + 5, 0, 0, 0];
            content.text.reverse();
            seal.margin = [MARGIN, SEAL_MARGIN_TOP, 5, 0];
            columns.push(seal);
            columns.push(content);
        } else {
            content.alignment = 'right';
            content.margin = [MARGIN, 0, 0, 0];
            seal.margin = [5, SEAL_MARGIN_TOP, 0, 0];
            columns.push(content);
            columns.push(seal);
        }

        return {
            columns: [{
                columns,
                width: HALF_X - MARGIN,
                relativePosition: {
                    x: footerX
                },
            }],
            layout: 'noBorders',
        };
    }

    getFoldLines = () => {
        const line = {
            type: 'line',
            lineWidth: 0.05,
            dash: {
                length: 10,
                space: 10
            },
        };

        return {
            absolutePosition: {
                x: 0,
                y: 0
            },
            canvas: [{
                    ...line,
                    x1: 0,
                    y1: HALF_Y,
                    x2: X_BOUND,
                    y2: HALF_Y,
                },
                {
                    ...line,
                    x1: HALF_X,
                    y1: 0,
                    x2: HALF_X,
                    y2: Y_BOUND,
                },
            ],
        };
    }

    generatePDF = async () => {
        const {
            language,
            buttonCallback,
            handleError,
            type,
            copy
        } = this.props;

        const docDefinition = {
            ...docBase(pdfName.ISB, language, 'ISB'),
            footer: this.getFooter(),
            content: [
                ...this.getQuadrantQR(),
                ...this.getQuadrantLocation(),
                this.getLowerQuadrants(),
                this.getFoldLines(),
            ],
        };

        const pdfBuilder = await PollPassBase.getPdfBuilder(language);
        const pdf = pdfBuilder.createPdf(docDefinition);

        try {
            if (this.props.type === PASS_ACTION_TYPES.DOWNLOAD || IS_MS_BROWSER) {
                pdf.download(pdfName.ISB);
            } else if (IS_ANDROID) {
                // opens dialog for android since android has an issue reading blob 
                pdf.open({}, window);
            } else {
                pdf.open();
            }
            buttonCallback(`${type}Status`, PASS_ACTION_STATUSES.COMPLETE);
        } catch (err) {
            handleError({
                title: copy.ztz,
                line1: copy.zua,
                line2: copy.zub
            });
            buttonCallback(`${type}Status`, PASS_ACTION_STATUSES.ERROR);
        }
    };

    getText() {
        const {
            type,
            copy
        } = this.props;
        if (type === PASS_ACTION_TYPES.DOWNLOAD) {
            return copy.zhw;
        }
        if (type === PASS_ACTION_TYPES.PRINT) {
            return copy.zhu;
        }
        return copy.zkq;
    }

    render() {
        const {
            buttonClass,
            copy,
            buttonTextMobileTablet,
            buttonTextDesktop,
            qrCode,
            contentTabIndex,
        } = this.props;
        const {
            showQRModal,
        } = this.state;
        return ( <
            React.Fragment >
            <
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
            React.Fragment >
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
            /React.Fragment> <
            /button> {
                showQRModal && ( <
                    ScreenshotModal onCancel = {
                        this.closeModal
                    }
                    copy = {
                        {
                            title: copy.zko,
                            cancelButton: copy.zkp
                        }
                    }
                    qrCode = {
                        qrCode
                    }
                    />
                )
            } <
            /React.Fragment>
        );
    }
}

PollPass.propTypes = {
    selections: objectOf(arrayOf(string)).isRequired,
    ballotPrecinctData: shape({
        electionId: string.isRequired,
        reportingUnitId: string.isRequired,
        ballotStyleId: string.isRequired,
        partyId: string.isRequired,
    }).isRequired,
    electionName: string,
    electionDate: objectOf(Date),
    buttonCallback: func,
    handleError: func,
    buttonClass: string,
    type: oneOf(PASS_ACTION_TYPES_VALUES),
};

PollPass.defaultProps = {
    electionName: 'Election',
    electionDate: new Date(),
    buttonClass: '',
    buttonCallback: noop,
    handleError: noop
};

export default PollPass;