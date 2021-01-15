import React from 'react';
import styles from './DefaultStickyFooter.module.css';

function DefaultStickyFooter({
    children,
    contentClassName,
    inMainBody
}) {
    return ( <
        div className = {
            `${styles.footer} ${inMainBody ? '' : 'content-flip'}`
        } >
        <
        div className = {
            styles.contentContainer
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

DefaultStickyFooter.defaultProps = {
    contentClassName: '',
};

export default DefaultStickyFooter;