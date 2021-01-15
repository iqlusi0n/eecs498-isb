import {
    setContrastHigh,
    setContrastLow,
    setTextSizeSmall,
    setTextSizeMedium,
    setTextSizeLarge
} from "./cssHelpers";

/** ISB Client contrastOptions Utility Component */
export const contrastOptions = {
    HIGH_CONTRAST: "high",
    LOW_CONTRAST: "low"
};

/** ISB Client textSizeOptions Utility Component */
export const textSizeOptions = {
    SMALL_TEXT: "small",
    MEDIUM_TEXT: "medium",
    LARGE_TEXT: "large"
};

/** 
 * ISB Client setTheme Utility Component 
 * @module setTheme 
 * @exports module:setTheme */
export default function setTheme(theme) {
    switch (theme) {
        case contrastOptions.HIGH_CONTRAST:
            localStorage.setItem("contrastTheme", contrastOptions.HIGH_CONTRAST);
            setContrastHigh();
            break;

        case contrastOptions.LOW_CONTRAST:
            localStorage.setItem("contrastTheme", contrastOptions.LOW_CONTRAST);
            setContrastLow();
            break;

        case textSizeOptions.SMALL_TEXT:
            localStorage.setItem("textSizeTheme", textSizeOptions.SMALL_TEXT);
            setTextSizeSmall();
            break;

        case textSizeOptions.MEDIUM_TEXT:
            localStorage.setItem("textSizeTheme", textSizeOptions.MEDIUM_TEXT);
            setTextSizeMedium();
            break;

        case textSizeOptions.LARGE_TEXT:
            localStorage.setItem("textSizeTheme", textSizeOptions.LARGE_TEXT);
            setTextSizeLarge();
            break;

        default:
            break;
    }
}

export function reloadSavedThemes() {
    const contrastTheme = localStorage.getItem("contrastTheme");
    if (contrastTheme) {
        setTheme(contrastTheme);
    }

    const textSizeTheme = localStorage.getItem("textSizeTheme");
    if (textSizeTheme) {
        setTheme(textSizeTheme);
    }
}