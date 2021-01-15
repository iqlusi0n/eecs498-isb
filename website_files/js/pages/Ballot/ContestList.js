import React, {
    Component
} from 'react';
import throttle from 'lodash/throttle';
import NavButton from '../../components/NavButton';
import ContestListItem from './ContestListItem';
import get from 'lodash/get';
import {
    getVoteForMax,
    getId,
    getContestTitle,
    getIsContest
} from '../../utils/BallotGetters';
import Copy from '../../utils/CopyManager';
import CustomContentListItem from './CustomContentListItem';
import styles from './ContestList.module.css';

class ContestList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isScrolledToBottom: false
        };

        this.activeRef = React.createRef();
        this.wrapperRef = React.createRef();
        this.doScroll = this.doScroll.bind(this);
        this.renderContestListItems = this.renderContestListItems.bind(this);
    }

    componentDidMount() {
        this.centerScroll();
        this.wrapperRef.current.addEventListener('scroll', throttle(this.handleScrollButton, 200));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.displayedBallotItemId !== this.props.displayedBallotItemId) {
            this.centerScroll();
        }
    }

    handleScrollButton = e => {
        const {
            current
        } = this.wrapperRef;
        if (current) {
            const {
                clientHeight,
                scrollTop,
                scrollHeight
            } = current;
            const isScrolledToBottom = scrollTop + clientHeight === scrollHeight;
            if (this.state.isScrolledToBottom !== isScrolledToBottom) {
                this.setState({
                    isScrolledToBottom
                });
            }
        }
    };

    centerScroll() {
        const {
            current: active
        } = this.activeRef;
        if (!active) return;
        const {
            current: wrapper
        } = this.wrapperRef;
        const {
            clientHeight: activeHeight,
            offsetTop
        } = active;
        const {
            clientHeight,
            scrollTop
        } = wrapper;
        wrapper.scrollBy(0, -clientHeight / 2 + (offsetTop - scrollTop) + activeHeight / 2);
    }

    doScroll() {
        const {
            current
        } = this.wrapperRef;
        const {
            clientHeight,
            scrollTop,
            scrollHeight
        } = current;
        const toScroll = clientHeight / 2;

        /* if not scrolled all the way down, scroll down half of the height of the view */
        if (scrollTop + clientHeight < scrollHeight) {
            current.scrollBy({
                top: toScroll,
                behavior: 'smooth'
            });
            /* if scrolled all the down, scroll back to the top of the view */
        } else {
            current.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
        this.handleScrollButton();
    }

    renderContestListItems() {
        const {
            ballotItemsInOrder,
            displayedBallotItemId,
            onSelectBallotItem,
            selections,
            contentTabIndex,
            mode,
            selectedLanguage,
        } = this.props;

        return ballotItemsInOrder.map((item, idx) =>
            getIsContest(item) ? ( <
                ContestListItem key = {
                    item.id
                }
                id = {
                    getId(item)
                }
                title = {
                    getContestTitle(item)
                }
                activeRef = {
                    this.activeRef
                }
                isSelected = {
                    getId(item) === displayedBallotItemId
                }
                isCompleted = {
                    getVoteForMax(item) - get(selections, getId(item), []).length < 1
                }
                numSelected = {
                    get(selections, getId(item), []).length
                }
                voteForMax = {
                    getVoteForMax(item)
                }
                onSelectContest = {
                    () => onSelectBallotItem(getId(item))
                }
                contentTabIndex = {
                    contentTabIndex
                }
                copy = {
                    Copy('ContestListItem', mode, selectedLanguage)
                }
                selectedLanguage = {
                    selectedLanguage
                }
                />
            ) : ( <
                CustomContentListItem
                /* key needs to be idx since can have the exact same custom content appear more than once */
                key = {
                    idx
                }
                id = {
                    item.name
                }
                header = {
                    item.header[selectedLanguage]
                }
                activeRef = {
                    this.activeRef
                }
                isSelected = {
                    item.id === displayedBallotItemId
                }
                onSelectBallotItem = {
                    () => onSelectBallotItem(getId(item))
                }
                contentTabIndex = {
                    contentTabIndex
                }
                />
            )
        );
    }

    render() {
        const {
            contentTabIndex,
            copy
        } = this.props;
        const {
            isScrolledToBottom
        } = this.state;
        return ( <
            div className = {
                styles.contestList
            } >
            <
            div className = {
                styles.header
            }
            tabIndex = {
                contentTabIndex
            } > {
                copy.fv
            } <
            /div>

            <
            div ref = {
                this.wrapperRef
            }
            className = {
                styles.list
            } > {
                this.renderContestListItems()
            } <
            div className = {
                styles.end
            }
            tabIndex = {
                contentTabIndex
            } > {
                copy.uj
            } <
            /div> <
            /div>

            <
            NavButton className = {
                styles.moreButton
            }
            width = '100%'
            onClick = {
                this.doScroll
            }
            text = {
                isScrolledToBottom ? copy.cw : copy.fw
            }
            colorOption = 'yellow'
            typeOption = {
                isScrolledToBottom ? 'upRight' : 'down'
            }
            tabIndex = {
                contentTabIndex
            }
            /> <
            /div>
        );
    }
}

ContestList.defaultProps = {
    contestsInOrder: [],
};

export default ContestList;