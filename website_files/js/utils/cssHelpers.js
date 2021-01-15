import cssVars from 'css-vars-ponyfill';
import throttle from 'lodash/throttle';

const contestListWrapperPosition = 'calc(24px + (100vw - 1200px) / 2)';
const contentWrapperMargin = 'calc(48px + 346px + 24px)';

let cssVariablesState = {
    '--hundred-vh': `${window.innerHeight}px`,
    '--ninety-vh': `${window.innerHeight * 0.9}px`,
    '--seventy-vh': `${window.innerHeight * 0.7}px`,
    '--white': '#FFFFFF',
    '--black': '#000000',
    '--lblue': '#00B4E9',
    '--blue': '#20499F',
    '--red': '#F03A47',
    '--yellow': '#FFCB1A',
    '--lgray': '#F5F5F5',
    '--mgray': '#d8d8d8',
    '--mmgray': '#D9D9D9',
    '--xmgray': '#B4B4B4',
    '--gray': '#979797',
    '--dgray': '#4A4A4A',
    '--review-gray': '#D8D8D8',
    '--font-size-base': '10px',
    '--font-size-base-12': '1.2rem',
    '--font-size-base-14': '1.4rem',
    '--font-size-base-16': '1.6rem',
    '--font-size-base-18': '1.8rem',
    '--font-size-base-20': '2rem',
    '--font-size-base-22': '2.2rem',
    '--font-size-base-24': '2.4rem',
    '--font-size-base-28': '2.8rem',
    '--font-size-base-31': '3.1rem',
    '--font-size-base-32': '3.2rem',
    '--font-size-base-36': '3.6rem',
    '--font-size-base-40': '4rem',
    '--font-size-base-48': '4.8rem',
    '--font-a': '1.4rem',
    '--font-small': '1.4rem',
    '--font-small-10': '1.6rem',
    '--font-small-20': '1.8rem',
    '--font-medium': '2rem',
    '--font-medium-10': '2.4rem',
    '--font-medium-15': '2.7rem',
    '--font-medium-20': '2.8rem',
    '--font-medium-30': '3.6rem',
    '--font-large': '3.2rem',
    '--font-large-20': '3.8rem',
    '--font-xlarge': '4rem',
    '--font-xxlarge': '4.8rem',
    '--header-height': '64px',
    '--header-height-large': '85px',
    '--header-modal-height': '100px',
    '--footer-height': '64px',
    '--footer-height-large': '85px',
    '--max-width': '1063px',
    '--med-btn-width': '180px',
    '--lg-btn-width': '243px',
    '--xlg-btn-width': '347px',
    '--wayfinding-step-height': '187px',
    '--privacy-choice-height': '420px',
    '--candidate-height': '80px',
    '--sample-text-height': '130px',
    '--review-modal-max-width': '540px',
    '--chevron-invert': '100%',
    '--icon-invert': '0%',
    '--max-content-width': '1200px',
    '--title-copy-margin': '20px',
    '--title-copy-margin-m': '20px',
    '--title-copy-margin-l': '20px',
    '--body-copy-margin': '20px',
    '--body-copy-margin-m': '20px',
    '--body-copy-margin-l': '20px',
    '--header-spacer-12-4': '12px',
    /* for Farsi and Korean language support */
    /* scaleX -1 vs 1 - mirrors/flips everything.
    We use this on containers for flipped layout and then "flip back" content inside of it
    Sometimes a few "flips" are needed.
    */
    '--scale-x': 'scaleX(1)',
    '--text-direction': 'ltr',
    '--text-align': 'left',
    '--word-break': 'normal',

    /* 320px Special Attention */
    '--iphone5-header-default-button-width': '68px',
    '--iphone5-header-default-button-right': '14px',
    '--iphone5-header-review-button-width': '74px',
    '--iphone5-header-review-button-right': '4px',
    '--iphone5-header-crest-left': '0px',

    /** Selections page positioning (rtl support) - see note below in setLanguageCSS */
    '--contest-list-wrapper-right': 'initial',
    '--contest-list-wrapper-left': contestListWrapperPosition,
    '--content-wrapper-margin-right': 'initial',
    '--content-wrapper-margin-left': contentWrapperMargin,
    '--text-direction-reverse': 'rtl',
};

/* This enables hover styling only for devices that do not have touch screens.
  Hover styling on devices with touch screens can linger on a partial touch and be
  confusing for the user. */
function setHoverStyles() {
    if (!(
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        )) {
        document.body.classList.add('allowHover');
    }
}

function setVH() {
    let prevWindowHeight = window.innerHeight;

    /*
    Some browsers don't calculate vh correctly which led to issues - for example, footer on Galaxy S9 on Chrome on ballot and poll pass pages
    So instead of using vh, calculating it and assigning it to a variable https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    For now easier to have these 3 variables for 100, 90, and 70. If we use vh in many more ways may be easier to just calc 1vh unit as --vh
    And use it ase e.g. calc(var(--vh) * 90)
    */
    window.addEventListener(
        'resize',
        throttle(() => {
            if (prevWindowHeight !== window.innerHeight) {
                prevWindowHeight = window.innerHeight;
                const variables = {
                    '--hundred-vh': `${window.innerHeight}px`,
                    '--ninety-vh': `${window.innerHeight * 0.9}px`,
                    '--seventy-vh': `${window.innerHeight * 0.7}px`,
                };

                cssVariablesState = { ...cssVariablesState,
                    ...variables
                };

                cssVars({
                    preserveVars: false,
                    variables: cssVariablesState,
                });
            }
        }, 200)
    );
}

function initializeCSSVariables() {
    /* equivalent of document.documentElement.style.setProperty('--var', 'value');
           but also works for IE 11 */
    /* Initialize with initial variables. */
    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
    /* Then watch recycling variables already there rather than continuing to use initial variables. */

    cssVars({
        watch: true,
        preserveVars: false,
    });
}

export function initializeCSS() {
    setHoverStyles();
    setVH();
    initializeCSSVariables();
}

export function setContrastHigh() {
    const variables = {
        '--white': '#FFFFFF',
        '--black': '#000000',
        '--lblue': '#00B4E9',
        '--blue': '#20499F',
        '--red': '#F03A47',
        '--yellow': '#FFCB1A',
        '--lgray': '#F5F5F5',
        '--gray': '#979797',
        '--dgray': '#4A4A4A',
        '--review-gray': '#D8D8D8',
        '--chevron-invert': '100%',
        '--icon-invert': '0%',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}

export function setContrastLow() {
    const variables = {
        '--white': '#000000',
        '--black': '#FFFFFF',
        '--lblue': '#20499F',
        '--blue': '#00B4E9',
        '--red': '#F03A47',
        '--yellow': '#4A4A4A',
        '--lgray': '#979797',
        '--gray': '#F5F5F5',
        '--dgray': '#FFCB1A',
        '--review-gray': '#979797',
        '--chevron-invert': '0%',
        '--icon-invert': '100%',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}

export function setLanguageCSS(language) {
    const variables = {
        '--scale-x': language === 'FA' ? 'scaleX(-1)' : 'scaleX(1)',
        '--text-direction': language === 'FA' ? 'rtl' : 'ltr',
        '--text-align': language === 'FA' ? 'right' : 'left',
        '--word-break': language === 'KO' ? 'keep-all' : 'normal',
        /**
         * Since the rtl fix using scaleX(-1) fix does not accomodate for fixed items within
         * with grid layout, additional variables below are used to handle positioning of elements
         */
        '--contest-list-wrapper-right': language === 'FA' ? contestListWrapperPosition : 'initial',
        '--contest-list-wrapper-left': language === 'FA' ? 'initial' : contestListWrapperPosition,
        '--content-wrapper-margin-right': language === 'FA' ? contentWrapperMargin : 'initial',
        '--content-wrapper-margin-left': language === 'FA' ? 'initial' : contentWrapperMargin,
        '--text-direction-reverse': language === 'FA' ? 'ltr' : 'rtl',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}

export function setTextSizeSmall() {
    const variables = {
        '--font-size-base': '8.6px',
        '--font-small': '1.2rem',
        '--font-small-10': '1.25rem',
        '--font-small-20': '1.3rem',
        '--font-medium': '1.4rem',
        '--font-medium-10': '1.5rem',
        '--font-medium-20': '1.6rem',
        '--font-large': '1.8rem',
        '--font-large-20': '2.8rem',
        '--font-xlarge': '3.6rem',
        '--font-xxlarge': '4.4rem',
        '--med-btn-width': '180px',
        '--lg-btn-width': '243px',
        '--xlg-btn-width': '347px',
        '--wayfinding-step-height': '187px',
        '--privacy-choice-height': '400px',
        '--candidate-height': '80px',
        '--sample-text-height': '130px',
        '--review-modal-max-width': '540px',
        '--header-spacer-12-4': '12px',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}

export function setTextSizeMedium() {
    const variables = {
        '--font-size-base': '10px',
        '--font-small': '1.4rem',
        '--font-small-10': '1.6rem',
        '--font-small-20': '1.8rem',
        '--font-medium': '2.0rem',
        '--font-medium-10': '2.4rem',
        '--font-medium-20': '2.8rem',
        '--font-large': '3.2rem',
        '--font-large-20': '3.8rem',
        '--font-xlarge': '4.0rem',
        '--font-xxlarge': '4.8rem',
        '--med-btn-width': '180px',
        '--lg-btn-width': '243px',
        '--xlg-btn-width': '347px',
        '--wayfinding-step-height': '187px',
        '--privacy-choice-height': '420px',
        '--candidate-height': '80px',
        '--sample-text-height': '130px',
        '--review-modal-max-width': '540px',
        '--header-spacer-12-4': '12px',

        /* 320px Special Attention */
        '--iphone5-header-default-button-width': '68px',
        '--iphone5-header-default-button-right': '14px',
        '--iphone5-header-review-button-width': '74px',
        '--iphone5-header-review-button-right': '4px',
        '--iphone5-header-crest-left': '0px',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}

export function setTextSizeLarge() {
    const variables = {
        '--font-size-base': '11.4px',
        '--font-small': '1.8rem',
        '--font-small-10': '1.9rem',
        '--font-small-20': '2.0rem',
        '--font-medium': '2.2rem',
        '--font-medium-10': '2.6rem',
        '--font-medium-20': '3.0rem',
        '--font-large': '3.4rem',
        '--font-large-20': '3.8rem',
        '--font-xlarge': '4.8rem',
        '--font-xxlarge': '5.6rem',
        '--med-btn-width': '200px',
        '--lg-btn-width': '270px',
        '--xlg-btn-width': '347px',
        '--wayfinding-step-height': '210px',
        '--privacy-choice-height': '450px',
        '--candidate-height': '100px',
        '--sample-text-height': '180px',
        '--review-modal-max-width': '620px',
        '--header-spacer-12-4': '4px',

        /* 320px Special Attention */
        '--iphone5-header-default-button-width': '74px',
        '--iphone5-header-default-button-right': '4px',
        '--iphone5-header-review-button-width': '74px',
        '--iphone5-header-review-button-right': '4px',
        '--iphone5-header-crest-left': '10px',
    };

    cssVariablesState = { ...cssVariablesState,
        ...variables
    };

    cssVars({
        preserveVars: false,
        variables: cssVariablesState,
    });
}
export function classNames(classes) {
    return (
        Object.entries(classes)
        // className of string 'undefined' means the css module doesn't have that class
        .filter(([className, enabled]) => Boolean(className !== 'undefined' && enabled))
        .map(([className]) => className)
        .join(' ')
    );
}