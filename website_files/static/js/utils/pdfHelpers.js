import {
    get
} from 'lodash';
import {
    LANG_FONT_MAP
} from '../constants/pdf';

/* There are nicer ways to get an arraybuffer but the others tried weren't IE 11 compatible */
export const base64ToArrayBuffer = base64 => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

const ZERO_WIDTH_SPACE_REGEX = new RegExp(/\u200B/g);
const ZERO_WIDTH_SPACE_LANGUAGES = ['ZH', 'JA'];
/**
 * Filters out zero width space characters from provided string.
 * This is needed to ensure Chinese and Japanese copies can properly render
 * for pdfMake since there is no zero width space character in ZH and JA 
 * provided glyphs (.ttf files)
 * @param {string} str
 * @returns string without zero width space characters
 */
export const filterZeroWidthSpace = (str = '', language) => {
    if (str && ZERO_WIDTH_SPACE_LANGUAGES.includes(language)) {
        return str
            .replace(ZERO_WIDTH_SPACE_REGEX, '');
    }
    return str;
};

/**
 * Takes languages abbreviation and returns directory of font assets
 * @param {string} lang ['EN', 'ES', ...]
 * @returns {object} object containing file names of 
 */
export const getFontFilenames = (lang) => {
    const regular = get(LANG_FONT_MAP, `${lang}.regular`);
    const bold = get(LANG_FONT_MAP, `${lang}.bold`);

    return {
        regular,
        bold
    };
};