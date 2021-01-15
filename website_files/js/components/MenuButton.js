import React from 'react';
import LabelCopy from './Copy/LabelCopy';
import {
    ReactComponent as Arrow
} from '../images/arrow_right_2.svg';
import styles from './MenuButton.module.css';

export const TYPE_STYLE_OPTIONS = {
    up: styles.up,
    right: styles.right,
    down: styles.down,
};

/** 
 * ISB Client MenuButton Component 
 * @module MenuButton 
 * @exports module:MenuButton */
export default function MenuButton({
    typeOption,
    text,
    onClick,
    className,
    copyClassName,
    tabIndex,
    asDiv,
}) {
    const typeClass = TYPE_STYLE_OPTIONS[typeOption];

    const buttonClasses = [typeClass, styles.menuButton, className].join(' ');
    const copyClasses = [styles.labelCopy, copyClassName].join(' ');

    const inner = ( <
        > {
            text && ( <
                LabelCopy className = {
                    copyClasses
                }
                center = {
                    typeOption === 'center'
                }
                text = {
                    text
                }
                color = 'black' /
                >
            )
        } {
            (typeOption === 'right' || typeOption === 'down' || typeOption === 'up') && < Arrow / >
        } <
        />
    );

    if (asDiv) {
        return <div className = {
            buttonClasses
        } > {
            inner
        } < /div>;
    }

    return ( <
        button onClick = {
            onClick
        }
        className = {
            buttonClasses
        }
        tabIndex = {
            tabIndex
        } > {
            inner
        } <
        /button>
    );
}