import React, {
    Suspense,
    lazy
} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom';
import './index.css';
import {
    initializeCSS
} from './utils/cssHelpers';
import {
    throttleTabbing,
    throttleSelectUpAndDown
} from './utils/accessibilityHelpers';
import {
    smoothScrollPolyfill
} from './utils/polyfills';
import {
    getLoadingScreen
} from './utils/loadingHelpers';
import {
    IS_DEV
} from './utils/process';

if (!IS_DEV) {
    // lazy load fix for IE from https://github.com/Financial-Times/polyfill-library/issues/163
    // eslint-disable-next-line
    Object.prototype[Symbol.toStringTag] = Object.prototype[Symbol.toStringTag];
}

const App = lazy(() =>
    import ('./App'));

initializeCSS();

throttleTabbing();
throttleSelectUpAndDown();

smoothScrollPolyfill();

ReactDOM.render( <
    Suspense fallback = {
        getLoadingScreen(window.location.pathname, true)
    } >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /Suspense>,
    document.getElementById('root')
);