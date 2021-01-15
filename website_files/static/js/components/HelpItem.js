import React from 'react';
import BodyCopy from './Copy/BodyCopy';
import SubtitleCopy from './Copy/SubtitleCopy';
import {
    ReactComponent as Arrow
} from '../images/arrow_right_2.svg';
import styles from './HelpItem.module.css';

/** 
 * ISB Client HelpItem Component 
 * @module HelpItem 
 * @exports module:HelpItem */
export default class HelpItem extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                showContentMobile: false
            }; // Either show header or content in mobile
        }

        toggleShowContentMobile = () => {
            this.setState(({
                showContentMobile
            }) => ({
                showContentMobile: !showContentMobile,
            }));
        };

        render() {
            const {
                item
            } = this.props;
            const {
                showContentMobile
            } = this.state;
            return ( <
                div >
                <
                SubtitleCopy className = 'hideMobile'
                margin = '0 0 10px 0'
                text = {
                    item.header
                }
                tabIndex = {
                    0
                }
                /> <
                button className = {
                    `hideTabletDesktop ${styles.headerButton}`
                }
                onClick = {
                    this.toggleShowContentMobile
                } >
                <
                Arrow className = {
                    showContentMobile ? styles.down : undefined
                }
                /> <
                span className = {
                    styles.headerCopy
                } > {
                    item.header
                } < /span> <
                /button> <
                BodyCopy tabIndex = {
                    0
                }
                className = {
                    `${showContentMobile ? undefined : 'hideMobile'} ${styles.body}`
                }
                margin = '0 0 36px 0'
                text = { < div dangerouslySetInnerHTML = {
                        {
                            __html: item.content
                        }
                    }
                    />} /
                    >
                    <
                    /div>
                );
            }
        }