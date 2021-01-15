import React from 'react';
import NavButton from '../../components/NavButton';
import DefaultStickyFooter from '../../components/LayoutWrappers/DefaultStickyFooter';
import {
    getId
} from '../../utils/BallotGetters';
import styles from './BallotNavigation.module.css';

/** 
 * ISB Client BallotNavigation Page Component 
 * @module BallotNavigation 
 * @exports module:BallotNavigation */
export default function BallotNavigation(props) {
    const {
        prevBallotItem,
        nextBallotItem,
        contestXOfTotal,
        onSelectBallotItem,
        onReadyToReview,
        contentTabIndex,
        numCurrentContestSelections,
        maxSelections,
        copy,
        hideBack,
        selectedItemIsContest,
    } = props;

    return ( <
        DefaultStickyFooter contentClassName = {
            styles.footerContent
        } >
        <
        NavButton className = {
            `hiddenMobileTablet ${styles.reviewButton}`
        }
        width = '235px'
        colorOption = 'white'
        text = {
            copy.ge
        }
        typeOption = 'icon'
        iconOption = 'review'
        onClick = {
            () => onReadyToReview()
        }
        tabIndex = {
            contentTabIndex
        }
        />

        <
        div className = {
            styles.navContainer
        } > { <
            NavButton
            className = {
                [styles.nav, styles.back, hideBack && styles.hideBack].join(' ')
            }
            colorOption = {
                Boolean(prevBallotItem) ? 'white' : 'gray'
            }
            typeOption = 'left'
            text = {
                copy.gf
            }
            onClick = {
                () => {
                    Boolean(prevBallotItem) && onSelectBallotItem(getId(prevBallotItem));
                }
            }
            tabIndex = {
                contentTabIndex
            }
            />
        }

        {
            selectedItemIsContest && ( <
                div className = {
                    `${false ? 'hiddenMobile hiddenTablet hiddenDesktop' : ''} ${
              styles.progress
            }`
                } >
                <
                div className = {
                    styles.ballotProgress
                }
                tabIndex = {
                    contentTabIndex
                } > {
                    contestXOfTotal
                } <
                /div> <
                div className = {
                    `hiddenDesktop ${styles.selections}`
                }
                tabIndex = {
                    contentTabIndex
                } >
                {
                    `${numCurrentContestSelections}/${maxSelections} ${copy.fx}`
                } < /div> <
                /div>
            )
        }

        <
        NavButton className = {
            [styles.nav, styles.next].join(' ')
        }
        colorOption = {!nextBallotItem || numCurrentContestSelections ? 'yellow' : 'white'
        }
        typeOption = 'right'
        text = {
            nextBallotItem ? copy.gh : copy.ge
        }
        onClick = {
            () => {
                Boolean(nextBallotItem) ? onSelectBallotItem(getId(nextBallotItem)) : onReadyToReview();
            }
        }
        tabIndex = {
            contentTabIndex
        }
        /> <
        /div> <
        /DefaultStickyFooter>
    );
}