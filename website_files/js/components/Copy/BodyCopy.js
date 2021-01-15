import React from 'react';
import styles from './BodyCopy.module.css';

/** 
 * ISB Client BodyCopy Component 
 * @module BodyCopy 
 * @exports module:BodyCopy */
export default function BodyCopy({
    margin,
    text,
    className,
    tabIndex
}) {
    const style = {
        margin
    };
    if (!text) return null;
    return ( <
        div style = {
            style
        }
        className = {
            `${className} ${styles.body}`
        }
        tabIndex = {
            tabIndex
        } > {
            text
        } <
        /div>
    );
}

BodyCopy.defaultProps = {
    className: '',
};