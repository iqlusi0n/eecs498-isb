import React from 'react';
import LabelCopy from '../Copy/LabelCopy';
import styles from './TextInput.module.css';

/** 
 * ISB Client TextInput Component 
 * @module TextInput 
 * @exports module:TextInput */
export default function TextInput({
    label,
    id,
    placeholder,
    value,
    onChange,
    onKeyDown,
    autoComplete,
    className,
    redOutline,
    redText,
    tabIndex,
    maxLength,
    pattern,
}) {
    return ( <
        div className = {
            `${className} ${styles.textInput}`
        } > {
            /* tabIndex is omitted on purpose for field label as screenreaders pick up the label text
                    already and separately through the name being shared with the input field*/
        } <
        LabelCopy className = {
            styles.labelCopy
        }
        textLabel = {
            label
        }
        name = {
            id
        }
        />

        <
        input className = {
            `${redOutline ? styles.redOutline : ''} ${styles.input}`
        }
        type = 'text'
        name = {
            id
        }
        id = {
            id
        }
        placeholder = {
            placeholder
        }
        value = {
            value
        }
        onChange = {
            onChange
        }
        onKeyDown = {
            onKeyDown
        }
        autoComplete = {
            autoComplete
        }
        tabIndex = {
            tabIndex
        }
        maxLength = {
            maxLength
        }
        pattern = {
            pattern
        }
        />

        {
            redText && < LabelCopy className = {
                styles.redText
            }
            text = {
                redText
            }
            tabIndex = {
                tabIndex
            }
            />} <
            /div>
        );
    }

    TextInput.defaultProps = {
        autoComplete: 'on',
        className: '',
        redOutline: false,
    };