import * as canvg from 'canvg';
import {
    cloneDeep
} from 'lodash';
import pdfMake from 'pdfmake/build/pdfmake';
import {
    fetchFont
} from '../../utils/api';
import * as Icomoon from '../../fonts/icomoon/icomoon';
import {
    getFontFilenames
} from '../../utils/pdfHelpers';

const pdfFonts = {
    pdfMake: {
        vfs: {}
    }
};

// Letter page bounds in pt
export const X_BOUND = 612;
export const Y_BOUND = 792;
export const HALF_X = X_BOUND / 2;
export const HALF_Y = Y_BOUND / 2;
export const MARGIN = 30;
export const DARK_STYLE = '#333333';
export const LIGHT_STYLE = '#adadae';
export const V_LIGHT_STYLE = '#f3f3f4';
export const LOGO_SIZE = 60;
export const SCALING = 0.5;
export const RTL_LANGUAGES = [];

const addFontsToPDFMake = async lang => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.vfs['icomoon.ttf'] = Icomoon.regular;
    const {
        regular,
        bold
    } = getFontFilenames(lang);
    const regFont = await fetchFont(regular);
    const boldFont = await fetchFont(bold);
    pdfMake.vfs.regular = regFont;
    pdfMake.vfs.bold = boldFont || regFont;
    pdfMake.fonts = {
        Font: {
            normal: 'regular',
            bold: 'bold',
            italics: 'regular',
            bolditalics: 'bold',
        },
        icomoon: {
            normal: 'icomoon.ttf',
            bold: 'icomoon.ttf',
            italics: 'icomoon.ttf',
            bolditalics: 'icomoon.ttf',
        },
    };
    return pdfMake;
};

export const docBase = (pdfName, language, mode) => {
    return {
        info: {
            /* Title that shows when pdf is open in new tab with .open() method */
            title: pdfName,
        },
        pageSize: 'LETTER',
        pageOrientation: 'letter',
        pageMargins: MARGIN,
        styles: {
            title: {
                fontSize: 40,
                bold: true,
                font: 'Font',
                color: DARK_STYLE,
            },
            header: {
                fontSize: language === 'RU' && mode === 'ISB' ? 20 : 27,
                font: 'Font',
                color: DARK_STYLE,
            },
            h2: {
                fontSize: 18,
                font: 'Font',
                bold: true,
                color: DARK_STYLE,
            },
            h3: {
                fontSize: 16,
                font: 'Font',
                bold: true,
                color: DARK_STYLE,
            },
            bigBody: {
                fontSize: 12,
                font: 'Font',
                color: DARK_STYLE,
            },
            boldBody: {
                fontSize: 15,
                font: 'Font',
                bold: true,
                color: DARK_STYLE,
            },
            small: {
                fontSize: 9,
                font: 'Font',
                color: DARK_STYLE,
            },
            boldSmall: {
                fontSize: 9,
                font: 'Font',
                bold: true,
                color: DARK_STYLE,
            },
            boldXSmall: {
                fontSize: 7,
                font: 'Font',
                bold: true,
                color: DARK_STYLE,
            },
            xSmall: {
                fontSize: 7,
                font: 'Font',
                color: DARK_STYLE,
            },
            icon: {
                fontSize: 15,
                font: 'icomoon',
                color: DARK_STYLE,
            },
            bold: {
                bold: true
            }
        },
        defaultStyle: {
            fontSize: 14,
            font: 'Font',
            color: DARK_STYLE,
        },
    };
};

class PollPassBase {
    static convertSVGToDataUrl(svg, width, h, fillStyle) {
        const height = h || width;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width / 4}px`;
        canvas.style.height = `${height / 4}px`;
        const ctx = canvas.getContext('2d');
        ctx.ignoreClearRect = true;
        ctx.fillStyle = fillStyle || '#ffffff';
        ctx.fillRect(0, 0, width, height);
        canvg(canvas, svg, {
            ignoreMouse: true,
            ignoreAnimation: true,
            ignoreDimensions: true,
            scaleWidth: width,
            scaleHeight: height,
        });
        ctx.scale(4, 4);
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        canvas.remove();
        return dataUrl;
    }

    static getPdfBuilder = async language => addFontsToPDFMake(language);
}

export class PdfMeasure {
    async init(language) {
        this.pdfBuilder = await PollPassBase.getPdfBuilder(language);
    }

    /**
     * If margins are used on section an extra node used for measuring
     * should be pushed before section to properly measure.
     * This is because pdfMake returns only top coordinates on nodes
     * and not heights so heights are calculated based on node's
     * top to next node's top.
     * @param {array} content - array of nodes to measure height of
     * @return {array} an array with measure points added at designated locations
     */
    static getContentWithMeasurePoints(content) {
        const contentWithMeasurePoints = [];
        const measurePoint = {
            isMeasure: true,
            text: '_',
            style: {
                fontsize: 1
            },
        };
        content.forEach((section) => {
            if (!section.table) {
                contentWithMeasurePoints.push(cloneDeep(measurePoint));
            }

            if (Array.isArray(section)) {
                section.forEach((item) => contentWithMeasurePoints.push(item));
            } else {
                contentWithMeasurePoints.push(section);
            }
        });

        contentWithMeasurePoints.push(cloneDeep(measurePoint));

        return contentWithMeasurePoints;
    }

    /**
     * Get heights of sections using pdfMake
     * @param {Object} docBase - docBase object with fonts etc.
     * @param {array} content - an array of groups to be measured
     * @return {Object} keyed by type and with heights as values
     */
    getHeights(doc, content) {
        const contentWithMeasurePoints = PdfMeasure.getContentWithMeasurePoints(content);
        const pdf = this.pdfBuilder.createPdf({
            ...doc,
            content: contentWithMeasurePoints
        });

        pdf.getStream({});

        const selectionsTable = pdf.docDefinition.content[6];

        /** nodes to measure by */
        const rowsArr = [
            pdf.docDefinition.content[0],
            pdf.docDefinition.content[3],
            ...selectionsTable.table.body.map(([leftItem]) => leftItem),
            pdf.docDefinition.content[7]
        ];
        const rowPositions = [];

        rowsArr.forEach((item, index) => {
            const prevRow = rowPositions[index - 1];
            const {
                pageNumber,
                top,
            } = item.positions[0];
            const {
                isMeasure
            } = item;
            if (prevRow) {
                const {
                    top: prevTop,
                    pageNumber: prevPageNumber,
                    isMeasure: measurePointWasUsed
                } = prevRow;
                const pagesBetween = pageNumber - prevPageNumber;
                const offset = measurePointWasUsed ? 18 : 0; // height of measure text

                prevRow.height = top +
                    (pagesBetween * Y_BOUND - pagesBetween * MARGIN * 2) -
                    prevTop - offset;
            }
            rowPositions.push({
                top,
                pageNumber,
                isMeasure
            });
        });

        const choicesRows = rowPositions
            .filter(row => !row.isMeasure)
            .map(row => row.height);

        return {
            firstHeader: rowPositions[0].height,
            header: rowPositions[1].height,
            choicesRows,
        };
    }
}

export default PollPassBase;