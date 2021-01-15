export const PASS_ACTION_STATUSES = {
    INIT: 'INIT',
    LOADING: 'LOADING',
    COMPLETE: 'COMPLETE',
    ERROR: 'ERROR',
};

export const PASS_ACTION_TYPES = {
    PRINT: 'print',
    DOWNLOAD: 'download',
    SCREENSHOT: 'screenshot',
};

export const PASS_ACTION_TYPES_VALUES = Object.keys(PASS_ACTION_TYPES)
    .map(type => PASS_ACTION_TYPES[type]);