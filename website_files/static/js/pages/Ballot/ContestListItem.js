import BodyCopy from '../../components/Copy/BodyCopy';
import {
    ReactComponent as Completed
} from '../../images/complete.svg';
import {
    ReactComponent as Selected
} from '../../images/current.svg';
import {
    ReactComponent as Bullet
} from '../../images/bullet.svg';
import React from 'react';
import styles from './ContestListItem.module.css';

/** 
 * ISB Client ContestListItem Page Component 
 * @module ContestListItem 
 * @exports module:ContestListItem */
export default class ContestListItem extends React.Component {
    render() {
        const {
            onSelectContest,
            id,
            title,
            isSelected,
            isCompleted,
            numSelected,
            voteForMax,
            activeRef,
            contentTabIndex,
            copy,
            selectedLanguage,
        } = this.props;

        let Icon;
        if (isCompleted) {
            Icon = Completed;
        } else if (isSelected) {
            Icon = Selected;
        } else {
            Icon = Bullet;
        }

        return ( <
            button key = {
                id
            }
            ref = {
                isSelected && activeRef
            }
            className = {
                `${isSelected ? styles.selected : undefined} ${styles.contestListItem}`
            }
            onClick = {
                () => onSelectContest(id)
            }
            tabIndex = {
                contentTabIndex
            } >
            <
            span className = {
                `${isCompleted && selectedLanguage === 'FA' ? 'content-flip' : undefined}`
            } > < Icon className = {
                styles.icon
            }
            /></span >
            <
            div className = {
                styles.copy
            } >
            <
            BodyCopy className = {
                styles.contestName
            }
            text = {
                title || copy.tm
            }
            /> <
            p className = {
                styles.contestProgress
            } > {
                `${numSelected}/${voteForMax} ${copy.fx}`
            } < /p> <
            /div> <
            /button>
        );
    }
}