// selectedPrivacy is stored in localStorage too but is handled separately
const LOCAL_STORAGE_FIELDS = {
    selectedCandidates: true,
    writeInValues: true,
};

const MILLISECONDS_IN_WEEK = 604800000; // 1000ms * 60sec * 60min * 24hr * 7d

const THREE_SECONDS = 3000; // 1000ms * 3sec

/** ISB Client getPrivacy Utility Component */
export const getPrivacy = () => {
    const saved =
        sessionStorage.getItem('selectedPrivacy') || localStorage.getItem('selectedPrivacy');

    let result;
    /* parsing undefined would give an error */
    if (saved) result = JSON.parse(saved);

    /* returns true if and only if we find a saved value that's set to true
    if don't find a saved value, return undefined to reflect that */
    return result;
};

const isExpired = time => Date.now() - time > MILLISECONDS_IN_WEEK;

const getSessionValue = item => {
    let saved;
    let sessionItem = sessionStorage.getItem(item);
    if (sessionItem) {
        sessionItem = JSON.parse(sessionItem);
        if (isExpired(sessionItem.timeStamp)) {
            sessionStorage.removeItem(item);
        } else {
            saved = sessionItem.value;
        }
    }
    return saved;
};

const getLocalValue = item => {
    let saved;
    let localItem = localStorage.getItem(item);
    if (localItem && getPrivacy()) {
        localItem = JSON.parse(localItem);
        if (isExpired(localItem.timeStamp)) {
            localStorage.removeItem(item);
        } else {
            saved = localItem.value;
        }
    }
    return saved;
};

/** ISB Client getItem Utility Component */
export const getItem = (item, defaultValue) =>
    getSessionValue(item) || getLocalValue(item) || defaultValue;

/** ISB Client setItem Utility Component */
export const setItem = (item, value) => {
    // undefined and empty strings cause errors on JSON.parse
    if (value !== undefined && value !== '') {
        const storageItem = JSON.stringify({
            timeStamp: Date.now(),
            value
        });

        sessionStorage.setItem(item, storageItem);

        if (LOCAL_STORAGE_FIELDS[item] && getPrivacy()) {
            localStorage.setItem(item, storageItem);
        }
    }
};

/** ISB Client setPrivacy Utility Component */
export const setPrivacy = selectedPrivacy => {
    sessionStorage.setItem('selectedPrivacy', JSON.stringify(selectedPrivacy));
    localStorage.setItem('selectedPrivacy', JSON.stringify(selectedPrivacy));
    if (!selectedPrivacy) {
        Object.keys(LOCAL_STORAGE_FIELDS).forEach(field => {
            localStorage.removeItem(field);
        });
    }
};

/** ISB Client getUserWasNotified Utility Component */
export const getUserWasNotified = () => JSON.parse(sessionStorage.getItem('userWasNotified'));

/** ISB Client setUserWasNotified Utility Component */
export const setUserWasNotified = bool => {
    sessionStorage.setItem('userWasNotified', JSON.stringify(bool));
};

/** ISB Client setTimeStampOnUnload Utility Component */
export const setTimeStampOnUnload = () => {
    window.addEventListener('unload', () => {
        sessionStorage.setItem('sessionEndTime', Date.now());
    });
};

/** ISB Client useOrDiscardSessionStorage Utility Component */
export const useOrDiscardSessionStorage = storageObject => {
    const prevEndTime = sessionStorage.getItem('sessionEndTime', Date.now());
    if (prevEndTime < Date.now() - THREE_SECONDS) {
        /* Not using sessionStorage.clear() as would rather keep text size, contrast, and language settings */
        Object.keys(storageObject).forEach(key => {
            sessionStorage.removeItem(key);
        });
        setUserWasNotified(false);
    }
};