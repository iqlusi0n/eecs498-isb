import React from 'react';
import styles from './LabelCopy.module.css';

const COLOR_STYLE_OPTIONS = {
    white: styles.white,
    black: styles.black,
    blackNoVar: styles.blackNoVar,
};

/** 
 * ISB Client LabelCopy Component 
 * @module LabelCopy 
 * @exports module:LabelCopy */
export default function LabelCopy({
    margin,
    text,
    textLabel,
    className,
    color,
    center,
    name,
    tabIndex,
}) {
    const style = margin;
    const colorClass = COLOR_STYLE_OPTIONS[color];
    const labelCopyClass = [className, colorClass, styles.labelCopy, center && styles.center].join(
        ' '
    );

    if (textLabel)
        return ( <
            label style = {
                style
            }
            className = {
                labelCopyClass
            }
            htmlFor = {
                name
            }
            tabIndex = {
                tabIndex
            } > {
                textLabel
            } <
            /label>
        );
    if (!text) return null;
    return ( <
        span style = {
            style
        }
        className = {
            labelCopyClass
        }
        tabIndex = {
            tabIndex
        } > {
            text
        } <
        /span>
    );
}

LabelCopy.defaultProps = {
    color: 'black',
};