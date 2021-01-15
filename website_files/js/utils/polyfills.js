import smoothscroll from 'smoothscroll-polyfill';

/* Note that we are importing most polyfills via public/polyfillIO.js
  See README.md for more information */

/* Polyfills JS scroll methods and options through Safari 6, IE 9, Edge 12.
   Polyfill.io doesn't have scroll polyfills */
export function smoothScrollPolyfill() {
    smoothscroll.polyfill();
}

export function Uint8Slice() {
    /* A needed polyfill for pdf-lib for IE 11 */
    if (!Uint8Array.prototype.slice) {
        Object.defineProperty(Uint8Array.prototype, 'slice', {
            value: function(begin, end) {
                return new Uint8Array(Array.prototype.slice.call(this, begin, end));
            },
        });
    }
}