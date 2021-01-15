import get from 'lodash/get';

/* ********************************************************************************
 *
 *
 * TOP-LEVEL GETTERS
 *
 *
 * ***************************************************************************** */
/** ISB Client getContests Utility Component */
export const getContests = ballot => get(ballot, 'contests', []);

/** ISB Client getIsContest Utility Component */
export const getIsContest = item => Boolean(get(item, 'candidates', false));

/** ISB Client getCustomContent Utility Component */
export const getCustomContent = (lookupId, ballot) => {
    const customContent = get(ballot, 'custom_content') || [];
    return customContent.find(({
        id
    }) => id === lookupId);
};

/** ISB Client getNumCompletedContests Utility Component */
export const getNumCompletedContests = (contests, selections) => {
    const completedContests = contests.filter(contest => {
        const selectionsForContest = get(selections, `${getId(contest)}`, []);
        return selectionsForContest.length > 0;
    });
    return completedContests.length;
};

/** ISB Client getFullOrdering Utility Component */
export const getFullOrdering = ballot => {
    const contests = getContestsInOrder(ballot);
    const customContent = getAllCustomContent(ballot);
    let ordering = contests.map(contest => ({
        id: contest.id,
        content: contest,
        type: 'contest'
    }));
    const getIndices = (ids, type, idPath) => {
        return ids
            .map(id => {
                return ordering.findIndex(o => {
                    return o.type === type && get(o, idPath, null) === id;
                });
            })
            .filter(i => i != -1);
    };
    const addItems = (items, targetsPath, idPath, type) => {
        const addedItems = [];
        /* sometimes an item late in the items list needs to be added before an
         * early item is addedd. One solution to this is to order the items
         * beforehand by treating them as a linked list. The solution we chose is
         * to just keep looping through the items, attempting to add each, until
         * every item in the list cannot be added. */
        let moreToAdd = true;
        while (moreToAdd) {
            moreToAdd = false;
            items.forEach((item, i) => {
                /* if we've already added this item, we return (and DO NOT set * moreToAdd) */
                if (addedItems.includes(i)) return;
                const targets = get(item, targetsPath, []);
                const indices = getIndices(targets, type, idPath);
                if (indices.length > 0) {

                    /* we found an item to add, so we should keep the outer loop going */
                    moreToAdd = true;
                    /* we shouldn't add items twice, so we need to keep track of which one
                     * have been added */
                    addedItems.push(i);
                }
                indices.sort().forEach((index, i) => {
                    const orderItem = {
                        id: item.id,
                        content: item,
                        type: 'custom'
                    };
                    if (i === 0 || !item.displayOnlyOnce) ordering.splice(index + i, 0, orderItem);
                });
            });
        }
    };
    const ballotType = customContent.filter(cc => cc.type === 'BALLOT');
    const divisionType = customContent.filter(cc => cc.type === 'DIVISION');
    const contestType = customContent.filter(cc => cc.type === 'CONTEST');
    const headerType = customContent.filter(cc => cc.type === 'CONTEST HEADING');
    const customType = customContent.filter(cc => cc.type === 'CUSTOM CONTENT');
    ballotType.forEach(b => ordering.splice(0, 0, {
        id: b.id,
        content: b,
        type: 'custom'
    }));
    addItems(divisionType, 'divisions', 'content.division', 'contest');
    addItems(contestType, 'contests', 'content.id', 'contest');
    addItems(headerType, 'contests', 'content.id', 'contest');
    addItems(customType, 'contents', 'content.id', 'custom');
    return ordering.map(({
        id,
        type
    }) => ({
        id,
        type
    }));
};

/* ********************************************************************************
 *
 *
 * CONTEST GETTERS
 *
 *
 * ***************************************************************************** */

/** ISB Client getId Utility Component */
export const getId = contest => get(contest, 'id', undefined);

/** ISB Client getContest Utility Component */
export const getContest = (contestId, ballot) => {
    const contests = getContests(ballot);
    return contests.find(contest => getId(contest) === contestId);
};

/** ISB Client getVoteForMax Utility Component */
export const getVoteForMax = contest => get(contest, 'vote_for_max', 1);

/** ISB Client getNumSelectionsRem Utility Component */
export const getNumSelectionsRem = (contest, numSelected) => {
    const voteForMax = getVoteForMax(contest);
    return voteForMax - numSelected;
};

/** ISB Client getNumWriteIns Utility Component */
export const getNumWriteIns = contest => get(contest, 'number_of_writeins', 0);

/** ISB Client getOrder Utility Component */
export const getOrder = contest => get(contest, 'order', -1);

/** ISB Client getCandidates Utility Component */
export const getCandidates = contest => get(contest, 'candidates', []);

/** ISB Client getContestTitle Utility Component */
export const getContestTitle = contest => get(contest, 'name', undefined);

/** ISB Client getContestShortTitle Utility Component */
export const getContestShortTitle = contest => get(contest, 'short_name', undefined);

/** ISB Client getContestIsMeasure Utility Component */
export const getContestIsMeasure = contest =>
    get(contest, 'contest_class', false) === 'ballot_measure_class';

/** ISB Client getVoteForText Utility Component */
export const getVoteForText = contest => get(contest, 'vote_for_text', undefined);

/** ISB Client getLongDescription Utility Component */
export const getLongDescription = contest => get(contest, 'long_description', undefined);

/** ISB Client getContestStatements Utility Component */
export const getContestStatements = contest => get(contest, 'statements', undefined);

/* ********************************************************************************
 *
 *
 *  CANDIDATE GETTERS
 *
 *
 * ***************************************************************************** */

/** ISB Client getCandidateId Utility Component */
export const getCandidateId = candidate => get(candidate, 'id', undefined);

/** ISB Client getCandidate Utility Component */
export const getCandidate = (candidateId, contest) => {
    const candidates = getCandidates(contest);
    return candidates.find(candidate => getCandidateId(candidate) === candidateId);
};

/** ISB Client getCandidateName Utility Component */
export const getCandidateName = candidate => get(candidate, 'name', undefined);

/** ISB Client getCandidateOccupation Utility Component */
export const getCandidateOccupation = candidate => get(candidate, 'occupation', undefined);

/** ISB Client getCandidateBio Utility Component */
export const getCandidateBio = candidate => get(candidate, 'bio', undefined);

/** ISB Client getCandidateAnalysis Utility Component */
export const getCandidateAnalysis = candidate => get(candidate, 'argFor', undefined);

/** ISB Client getCandidateRebuttal Utility Component */
export const getCandidateRebuttal = candidate => get(candidate, 'argAgainst', undefined);

/** ISB Client getCandidateIsWriteIn Utility Component */
export const getCandidateIsWriteIn = candidate => get(candidate, 'isWriteIn', false);

/** ISB Client getCandidateParty Utility Component */
export const getCandidateParty = candidate => get(candidate, 'partyId', null);

/* ********************************************************************************
 *
 *
 * SELECTIONS GETTERS
 *
 *
 * ***************************************************************************** */

/** ISB Client getNumSelected Utility Component */
export const getNumSelected = (selections, contest) => {
    const id = getId(contest);
    const selectionsForContest = get(selections, id, []);
    return selectionsForContest.length;
};

/** ISB Client getTotalNumSelected Utility Component */
export const getTotalNumSelected = selections =>
    Object.values(selections).reduce((acc, val) => acc + val.length, 0);

/* ********************************************************************************
 *
 *
 * MISCELLANEOUS GETTERS
 *
 *
 * ***************************************************************************** */

const getAllCustomContent = ballot => {
    return get(ballot, 'custom_content') || [];
};

/** ISB Client getBallotItem Utility Component */
export const getBallotItem = (id, ballot) => {
    /* TODO(achilles) will need to rethink design in order to obviate the following
     * shenanigans */
    return getContest(id, ballot) || getCustomContent(id, ballot) || null;
};

/** ISB Client getContestsInOrder Utility Component */
export const getContestsInOrder = ballot => {
    const contests = getContests(ballot);
    return contests.sort((a, b) => getOrder(a) - getOrder(b));
};
/** ISB Client getBallotItemsInOrder Utility Component */
export const getBallotItemsInOrder = ballot => {
    const fullOrdering = getFullOrdering(ballot);
    const customContent = getAllCustomContent(ballot);
    const contests = getContests(ballot);
    return fullOrdering.map(({
        id,
        type
    }) => {
        return type === 'contest' ? getContest(id, ballot) : getCustomContent(id, ballot);
    });
};

/** ISB Client getFirstContestId Utility Component */
export const getFirstContestId = ballot => getId(getContestsInOrder(ballot)[0]);
/** ISB Client getFirstBallotItem Utility Component */
export const getFirstBallotItem = ballot => {
    return getBallotItemsInOrder(ballot)[0];
};

/** ISB Client getNextContest Utility Component */
export const getNextContest = (contest, ballot) => {
    const contestsInOrder = getContestsInOrder(ballot);

    /* return the first contest which has order greater
     * than the current contest */
    let test;
    for (let i = 0; i < contestsInOrder.length; i += 1) {
        test = contestsInOrder[i];
        if (getOrder(test) > getOrder(contest)) {
            return test;
        }
    }

    return undefined;
};
/** ISB Client getNextBallotItem Utility Component */
export const getNextBallotItem = (item, ballot) => {
    const fullOrdering = getFullOrdering(ballot);
    const items = getBallotItemsInOrder(ballot);
    const currentIndex = items.findIndex(o => o.id === item.id);
    return currentIndex + 1 < items.length ? items[currentIndex + 1] : undefined;
};
/** ISB Client getPrevContest Utility Component */
export const getPrevContest = (contest, ballot) => {
    const contestsInReverse = getContestsInOrder(ballot).reverse();

    /* return the first contest which has order greater
     * than the current contest */
    let test;
    for (let i = 0; i < contestsInReverse.length; i += 1) {
        test = contestsInReverse[i];
        if (getOrder(test) < getOrder(contest)) {
            return test;
        }
    }

    return undefined;
};
/** ISB Client getPrevBallotItem Utility Component */
export const getPrevBallotItem = (item, ballot) => {
    const fullOrdering = getFullOrdering(ballot);
    const items = getBallotItemsInOrder(ballot);
    const currentIndex = items.findIndex(o => o.id === item.id);
    return currentIndex - 1 >= 0 ? items[currentIndex - 1] : undefined;
};

/** ISB Client updateSelections Utility Component */
export const updateSelections = (contestId, candidateId, currentSelections, ballot) => {
    const contest = getContest(contestId, ballot);
    const selectionsForContest = get(currentSelections, contestId, []);
    const numSelections = get(selectionsForContest, 'length', 0);
    const voteForMax = getVoteForMax(contest);

    let newSelectionsForContest;
    if (selectionsForContest.includes(candidateId)) {
        newSelectionsForContest = selectionsForContest.filter(currentId => currentId !== candidateId);
    } else if (voteForMax > numSelections) {
        newSelectionsForContest = [...selectionsForContest, candidateId];
    } else if (voteForMax === 1) {
        // so user doesn't have to deselect a candidate before choosing a different candidate
        newSelectionsForContest = [candidateId];
    } else {
        // if voteForMax > 1 and numSelections === voteForMax
        return null;
    }

    const newSelections = { ...currentSelections,
        [contestId]: newSelectionsForContest
    };

    return newSelections;
};

export function getFetchPath(election, language, ballotStyleId) {
    return `${getId(election)}/${language}/${ballotStyleId}`;
}
export function shouldRefetch(
    election,
    language,
    selectedBallotStyleId,
    selectedBallot,
    fetchedPath,
    currentPage
) {
    if (
        election &&
        language &&
        selectedBallotStyleId &&
        (currentPage.startsWith('/ballot') ||
            currentPage.startsWith('/review') ||
            currentPage.startsWith('/pollpass')) &&
        ((selectedBallot && selectedBallot.id) !== selectedBallotStyleId ||
            getFetchPath(election, language, selectedBallotStyleId) !== fetchedPath)
    ) {
        return true;
    }
    return false;
}

export function hasIncompleteBallots(matchedElections, completedBallots, inactiveElections) {
    let areMoreBallots = false;
    for (let i = 0; i < matchedElections.length; i += 1) {
        if (!completedBallots[matchedElections[i]] &&
            inactiveElections.indexOf(matchedElections[i]) < 0
        ) {
            areMoreBallots = true;
            break;
        }
    }
    return areMoreBallots;
}