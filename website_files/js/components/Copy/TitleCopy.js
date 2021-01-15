import React from 'react';
import styles from './TitleCopy.module.css';

/** 
 * ISB Client TitleCopy Component 
 * @module TitleCopy 
 * @exports module:TitleCopy */
export default function TitleCopy({
    width,
    text,
    margin,
    className,
    tabIndex
}) {
    const style = {
        margin,
        width
    };
    if (!text) return null;
    return ( <
        div tabIndex = {
            tabIndex
        }
        style = {
            style
        }
        className = {
            `modal-title-override ${className} ${styles.title}`
        } >
        {
            text
        } <
        /div>
    );
}

TitleCopy.defaultProps = {
    className: '',
};