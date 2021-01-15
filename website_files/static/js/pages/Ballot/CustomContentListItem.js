import BodyCopy from '../../components/Copy/BodyCopy';
import React from 'react';
import styles from './CustomContentListItem.module.css';

/** 
 * ISB Client CustomContentListItem Page Component 
 * @module CustomContentListItem 
 * @exports module:CustomContentListItem */
export default class CustomContentListItem extends React.Component {
    render() {
        const {
            onSelectBallotItem,
            header,
            isSelected,
            activeRef,
            contentTabIndex
        } = this.props;

        return ( <
            button ref = {
                isSelected && activeRef
            }
            className = {
                `${isSelected ? styles.selected : undefined} ${styles.contentListItem}`
            }
            onClick = {
                onSelectBallotItem
            }
            tabIndex = {
                contentTabIndex
            } >
            <
            div className = {
                styles.copy
            } >
            <
            BodyCopy className = {
                styles.header
            }
            text = {
                header
            }
            /> <
            /div> <
            /button>
        );
    }
}