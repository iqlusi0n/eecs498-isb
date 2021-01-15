import React from 'react';
import styles from './LinkButton.module.css';

/** 
 * ISB Client LinkButton Component 
 * @module LinkButton 
 * @exports module:LinkButton */
export default function LinkButton({
    text,
    onClick,
    className,
    tabIndex
}) {
    return ( <
        button onClick = {
            onClick
        }
        className = {
            `${className} ${styles.linkButton}`
        }
        tabIndex = {
            tabIndex
        } > {
            text
        } <
        /button>
    );
}

LinkButton.defaultProps = {
    className: '',
};