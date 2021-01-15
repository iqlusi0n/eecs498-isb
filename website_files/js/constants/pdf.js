/** 
 * Font file map to assets for pdfMake usage
 */
export const LANG_FONT_MAP = {
    EN: {
        fontFamily: 'NotoSans'
    },
    ES: {
        fontFamily: 'NotoSans'
    },
    TL: {
        fontFamily: 'NotoSans'
    },
    VI: {
        fontFamily: 'NotoSans'
    },
    RU: {
        fontFamily: 'NotoSans'
    },
    KO: {
        fontFamily: 'KaigenSans',
        name: 'K'
    },
    ZH: {
        fontFamily: 'KaigenSans',
        name: 'TC'
    },
    JA: {
        fontFamily: 'KaigenSans',
        name: 'J'
    },
    HY: {
        fontFamily: 'NotoSans',
        name: 'Armenian'
    },
    TH: {
        fontFamily: 'NotoSans',
        name: 'Thai'
    },
    KM: {
        fontFamily: 'NotoSans',
        name: 'Khmer'
    },
    FA: {
        fontFamily: 'NotoSans',
        name: 'Arabic'
    },
    HI: {
        fontFamily: 'NotoSans',
        name: 'Devanagari'
    },
};

/** Generate and add filenames of assets by font weight at build time */
Object.keys(LANG_FONT_MAP).forEach((key) => {
    const fontMap = LANG_FONT_MAP[key];
    const font = `${fontMap.fontFamily}${fontMap.name ? fontMap.name : ''}`;

    fontMap.bold = `${font}-Bold.ttf`;
    fontMap.regular = `${font}-Regular.ttf`;
});