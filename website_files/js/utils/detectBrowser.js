function isBrowserEdgeOrIE() {
    const ua = window.navigator.userAgent;
    /* checking for IE 10 or older, IE 11, and Edge browsers, in that order: */
    return ua.includes('MSIE ') || ua.includes('Trident/') || ua.includes('Edge/');
}

function isBrowserIE() {
    const ua = window.navigator.userAgent;
    /* checking for IE 10 or older, IE 11 in that order: */
    return ua.includes('MSIE ') || ua.includes('Trident/');
}

function isAndroid() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('android') > -1;
}

/** ISB Client IS_MS_BROWSER Utility Component */
export const IS_MS_BROWSER = isBrowserEdgeOrIE();
export const IS_ANDROID = isAndroid();
export const IS_IE = isBrowserIE();