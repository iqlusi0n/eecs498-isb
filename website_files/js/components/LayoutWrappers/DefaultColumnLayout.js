import React from 'react';
import styles from './DefaultColumnLayout.module.css';

/** 
 * ISB Client DefaultColumnLayout Component 
 * @module DefaultColumnLayout 
 * @exports module:DefaultColumnLayout */
export default function DefaultColumnLayout({
    children,
    className,
    contentClassName
}) {
    return ( <
        div className = "grid-content" >
        <
        div className = {
            `${className} ${styles.page}`
        } >
        <
        div className = {
            `${contentClassName} ${styles.content}`
        } > {
            children
        } < /div> <
        /div> <
        /div>
    );
}

DefaultColumnLayout.defaultProps = {
    className: '',
    contentClassName: '',
};