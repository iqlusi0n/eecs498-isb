import React from 'react';
import styles from './SubtitleCopy.module.css';

const SubtitleCopy = React.forwardRef(({
    margin,
    text,
    className,
    tabIndex
}, ref) => {
    const style = {
        margin
    };
    if (!text) return null;
    return ( <
        div style = {
            style
        }
        className = {
            `${className} ${styles.subtitle}`
        }
        tabIndex = {
            tabIndex
        }
        ref = {
            ref
        } > {
            text
        } <
        /div>
    );
});

SubtitleCopy.defaultProps = {
    className: '',
};

export default SubtitleCopy;