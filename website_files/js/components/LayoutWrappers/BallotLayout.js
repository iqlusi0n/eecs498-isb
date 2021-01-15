import React, {
    useRef,
    useEffect,
    useState
} from 'react';
import throttle from 'lodash/throttle';
import styles from './BallotLayout.module.css';
import {
    scrollBodyTo
} from '../../utils/scroller';

function getRelevantValues(element) {
    const current = element && element.current ?
        element.current :
        {};
    const {
        clientHeight,
        scrollTop,
        scrollHeight
    } = current;
    return {
        current,
        clientHeight,
        scrollTop,
        scrollHeight
    };
}

function getCanScroll(element) {
    const {
        clientHeight,
        scrollHeight
    } = getRelevantValues(element);
    return clientHeight < scrollHeight;
}

function getScrollIsMore(element) {
    const {
        clientHeight,
        scrollTop,
        scrollHeight
    } = getRelevantValues(element);
    return clientHeight + scrollTop + 2 <= scrollHeight;
}

function doScroll(scrollIsMore) {
    if (scrollIsMore) {
        scrollBodyTo({
            toTop: false,
            smooth: true,
            factor: 0.75
        });
    } else {
        scrollBodyTo();
    }
}


/** 
 * ISB Client BallotLayout Component 
 * @module BallotLayout 
 * @exports module:BallotLayout */
export default function BallotLayout({
    children,
    className,
    contentClassName
}) {
    const scrolled = useRef(null);
    const [canScroll, setCanScroll] = useState(true);
    const [scrollIsMore, setScrollIsMore] = useState(true);
    useEffect(() => setCanScroll(getCanScroll(scrolled)));

    const onScroll = () => setScrollIsMore(getScrollIsMore(scrolled));

    useEffect(() => {
        const throttledScroll = throttle(onScroll, 200);

        scrolled.current.addEventListener('scroll', throttledScroll);

        return () => {
            scrolled.current.removeEventListener('scroll', throttledScroll);
        };
    }, []);


    return ( <
        div className = {
            `grid-content ${styles.flip}`
        }
        ref = {
            scrolled
        } >
        <
        div className = {
            `${className} ${styles.page}`
        } >
        <
        div className = {
            `${contentClassName} ${styles.content}`
        } > {
            children(
                () => doScroll(scrollIsMore),
                scrollIsMore,
                canScroll,
            )
        } <
        /div> <
        /div> <
        /div>
    );
}

BallotLayout.defaultProps = {
    className: '',
    contentClassName: '',
};