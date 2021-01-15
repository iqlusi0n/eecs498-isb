import React from 'react';
import LabelCopy from './Copy/LabelCopy';
import styles from './NavButton.module.css';
import {
    ReactComponent as Arrow
} from '../images/arrow_right_2.svg';
import {
    ReactComponent as Language
} from '../images/language_2.svg';
import {
    ReactComponent as Settings
} from '../images/settings_2.svg';
import {
    ReactComponent as Help
} from '../images/help_2.svg';
import {
    ReactComponent as Review
} from '../images/review_2.svg';

export const COLOR_STYLE_OPTIONS = {
    yellow: styles.yellow,
    white: styles.white,
    gray: styles.gray,
    transparent: styles.transparent,
    black: styles.black,
    secondary: styles.secondary,
};

export const TYPE_STYLE_OPTIONS = {
    up: styles.up,
    left: styles.left,
    right: styles.right,
    upRight: styles.upRight /* Up arrow on right side of text instead of left */ ,
    down: styles.down,
    center: styles.center,
    icon: styles.icon,
    iconTopMobile: styles.iconTopMobile,
};

export const ICON_OPTIONS = {
    language: Language,
    settings: Settings,
    help: Help,
    review: Review,
};

const getLabelColor = colorOption => {
    if (colorOption === 'gray') {
        return 'blackNoVar';
    } else if (colorOption === 'black') {
        return 'white';
    }
    return 'black';
};

const getIcon = iconOption => {
    const Icon = ICON_OPTIONS[iconOption];
    return <Icon / > ;
};

/** 
 * ISB Client NavButton Component 
 * @module NavButton 
 * @exports module:NavButton */
export default function NavButton({
    colorOption,
    typeOption,
    iconOption,
    text,
    onClick,
    height,
    width,
    margin,
    className,
    tabIndex,
    children,
    ariaLabel,
}) {
    const colorClass = COLOR_STYLE_OPTIONS[colorOption] || COLOR_STYLE_OPTIONS.white;
    const typeClass = TYPE_STYLE_OPTIONS[typeOption] || COLOR_STYLE_OPTIONS.center;

    const buttonClass = [colorClass, typeClass, styles.navButton, className].join(' ');

    const style = {
        height,
        width,
        margin
    };

    return ( <
        button aria - label = {
            ariaLabel
        }
        style = {
            style
        }
        onClick = {
            onClick
        }
        className = {
            `${className} ${buttonClass}`
        }
        tabIndex = {
            tabIndex
        } >
        {
            (typeOption === 'up' || typeOption === 'left') && < Arrow / >
        } {
            (typeOption === 'icon' || typeOption === 'iconTopMobile') && getIcon(iconOption)
        } {
            text && ( <
                LabelCopy className = {
                    styles.labelCopy
                }
                center = {
                    typeOption === 'center'
                }
                text = {
                    text
                }
                color = {
                    getLabelColor(colorOption)
                }
                />
            )
        } {
            (typeOption === 'right' || typeOption === 'down' || typeOption === 'upRight') && < Arrow / >
        } {
            children
        } <
        /button>
    );
}

NavButton.defaultProps = {
    className: '',
    children: null,
};