import get from 'lodash/get';
import ISB from '../copy/copy.json';
import UOC from '../copy/uoc-copy.json';
import RAV from '../copy/rav-copy.json';

const copy = {
    UOC,
    ISB,
    RAV
};

/** 
 * ISB Client Copy Utility Component 
 * @module Copy 
 * @exports module:Copy */
export default function Copy(component, mode, language) {
    return get(copy, `${mode || "ISB"}.${language || 'EN'}`, {});
}