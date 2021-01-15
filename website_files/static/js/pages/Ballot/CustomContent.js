import React, {
    Component
} from 'react';
import SubtitleCopy from '../../components/Copy/SubtitleCopy';
import BodyCopy from '../../components/Copy/BodyCopy';
import styles from './CustomContent.module.css';
import {
    scrollBodyTo
} from '../../utils/scroller';

class CustomContent extends Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef();
    }

    componentDidMount() {
        /* If there's no header, the headerRef.current will be null */
        this.headerRef.current && this.headerRef.current.focus();
    }

    componentDidUpdate(prevProps) {
        const {
            contentTabIndex,
            body
        } = this.props;

        /* if updated and a modal isn't open*/
        if (prevProps.body !== body && contentTabIndex !== -1) {
            /* If there's no header, the headerRef.current will be null */
            this.headerRef.current && this.headerRef.current.focus();
            scrollBodyTo({
                toTop: true,
                smooth: false
            });
        }
    }

    render() {
        const {
            electionShortTitle,
            contentTabIndex,
            header,
            body
        } = this.props;

        return ( <
            div className = {
                styles.customContent
            } >
            <
            div className = {
                styles.header
            } >
            <
            div tabIndex = {
                contentTabIndex
            } > {
                electionShortTitle
            } < /div> <
            /div> <
            div className = {
                styles.content
            } >
            <
            SubtitleCopy className = {
                styles.heading
            }
            text = {
                header
            }
            ref = {
                this.headerRef
            }
            tabIndex = {
                contentTabIndex
            }
            /> <
            hr className = {
                `hiddenMobile ${styles.hr}`
            }
            /> <
            BodyCopy tabIndex = {
                contentTabIndex
            }
            text = { < div dangerouslySetInnerHTML = {
                    {
                        __html: body
                    }
                }
                />} /
                >
                <
                hr className = {
                    `hiddenMobile ${styles.hr}`
                }
                /> <
                /div> <
                /div>
            );
        }
    }

    export default CustomContent;