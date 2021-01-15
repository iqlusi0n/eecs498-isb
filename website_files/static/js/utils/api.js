import partition from 'lodash/partition';
import get from 'lodash/get';
import {
    getElectionIsActive
} from './ElectionGetters';
const axios = require('axios');

const MODE = process.env.REACT_APP_VOTE_MODE || 'ISB';
const IS_DEV = process.env.NODE_ENV === 'development' ||
    process.env.REACT_APP_DEP_ENV === 'INTERNAL';
const DIMS_HOST = IS_DEV ?
    'https://test.api.lavote.net/vsap' :
    'https://api.lavote.net/vsap';
const DIMS_PRIMARY_ENDPOINT = {
    ISB: 'ReadISBBallotGroupByPrimary',
    UOC: 'ReadUOCAVABallotGroupByPrimary',
    RAV: 'ReadRAVBMBallotGroupByPrimary',
}[MODE];
const DIMS_SECONDARY_ENDPOINT = {
    ISB: 'ReadISBBallotGroupBySecondary',
    UOC: 'ReadUOCAVABallotGroupBySecondary',
    RAV: 'ReadRAVBMBallotGroupBySecondary',
}[MODE];
const ELECTIONS_LIST_PATH = '/elections/list.json';

/* caching ballots and contests means that we don't have to make another network call
 * when the user switches languages */
const BALLOT_CACHE = {};
const CONTEST_CACHE = {};
const ELECTION_CACHE = {};

function getAtPath(obj, path, fallbackPath, fallbackVal) {
    return get(obj, path, null) || get(obj, fallbackPath, null) || fallbackVal;
}

function basicGet(url, defaultVal) {
    return axios({
            method: 'get',
            url,
            headers: {
                'Cache-Control': 'max-age=300'
            },
        })
        .then(response => response.data || [])
        .catch(err => {
            console.error(err);
            return defaultVal;
        });
}

/** ISB Client fetchFont Utility Component */
export const fetchFont = async font => {
    return basicGet(`/fonts/${font}`, null);
}

/* TODO(achilles) The interfaces of the fetchAvailalbeElections,
 * fetchElection, and fetchElections functions are a little bit
 * wonky. We made a small backend change to the election config
 * data that will allow us to make these interfaces more natural,
 * but for now, to minimize scope of the change, we've just
 * modified these functions' implementations. */

/** ISB Client fetchAvailableElections Utility Component */
export const fetchAvailableElections = async () => {
    const electionsList = await basicGet(ELECTIONS_LIST_PATH, []);
    const listedIds = electionsList.map(({
        id
    }) => id);
    return fetchElections(listedIds);
};

/** ISB Client fetchElection Utility Component */
export const fetchElection = async electionId => {
    const cached = ELECTION_CACHE[electionId];
    if (cached) return cached;

    const configs = await basicGet(ELECTIONS_LIST_PATH, []);
    const config = configs.find(({
        id
    }) => id === electionId);
    const parsed = await basicGet(`parsed/${electionId}/election.json`, null);
    let election = null;
    if (config && parsed) {
        election = Object.assign({}, parsed, config);
        ELECTION_CACHE[electionId] = election;
    }

    return election;
}

/** ISB Client fetchElections Utility Component */
export const fetchElections = async electionIds => {
    const elections = await Promise.all(electionIds.map(id => fetchElection(id)));
    return partition(elections, election => getElectionIsActive(election, MODE));
};

/** ISB Client fetchParties Utility Component */
export const fetchParties = electionId => {
    return fetchElection(electionId)
        .then(response => {
            return response.parties || {};
        })
        .catch(err => {
            console.error(err);
            return [];
        });
};

/** ISB Client fetchCrossover Utility Component */
export const fetchCrossover = electionId => {
    return fetchElection(electionId)
        .then(response => response.crossover || [])
        .catch(err => {
            console.error(err);
            return [];
        });
};

/** ISB Client fetchSegmentsWithPrefix Utility Component */
export const fetchSegmentsWithPrefix = (electionId, prefix) => {
    const fetchPrefix = prefix.slice(0, 3).toUpperCase();
    const fullUrl = `parsed/${electionId}/street-segments/${fetchPrefix}.json`;
    return basicGet(fullUrl, []);
};

/** ISB Client fetchPartyBallotMap Utility Component */
export const fetchPartyBallotMap = (electionId, precinctId) => {
    const fullUrl = `parsed/${electionId}/precincts/${precinctId}.json`;
    return basicGet(fullUrl, undefined);
};

const localizeCandidate = (candidate, language) => {
    const localized = { ...candidate
    };
    localized.short_name = candidate.short_name.map(obj => getAtPath(obj, language, 'EN', '')).join(`\n`);
    localized.occupation = candidate.occupation.map(obj => getAtPath(obj, language, 'EN', '')).join(`\n`);
    localized.name = candidate.name.map(obj => getAtPath(obj, language, 'EN', null)).join(`\n`);
    localized.FullHTML = getAtPath(candidate, `FullHTML.${language}`, `FullHTML.EN`, null);
    localized.statements = get(candidate, 'statements', []).map(statement => {
        return {
            ...statement,
            FullHTML: getAtPath(statement, `FullHTML.${language}`, 'FullHTML.EN', null)
        };
    });
    localized.order = candidate.order;
    return localized;
};

const localizeContest = (contest, language) => {
    const localized = { ...contest
    };
    localized.long_description = getAtPath(contest, `long_description.${language}`, `long_description.EN`);
    localized.name = getAtPath(contest, `name.${language}`, `name.EN`, 'Untitled Contest');
    localized.short_name = getAtPath(contest, `short_name.${language}`, `short_name.EN`, null);
    localized.short_description = getAtPath(
        contest,
        `short_description.${language}`,
        `short_description.EN`,
        null
    );
    localized.vote_for_text = get(contest, `vote_for_text.${language}`, `vote_for_text.EN`);
    localized.contest_class = get(contest, 'contest_class', null);
    localized.number_of_writeins = get(contest, 'number_of_writeins', null);
    localized.vote_for_max = get(contest, 'vote_for_max', 0);
    localized.statements = get(contest, 'statements', []).map(statement => {
        return {
            ...statement,
            FullHTML: getAtPath(statement, `FullHTML.${language}`, 'FullHTML.EN', null)
        };
    });
    localized.candidates = contest.candidates.map(candidate => localizeCandidate(candidate, language));
    return localized;
};

const fetchContest = async (electionId, language, contestId) => {
    const fullUrl = `parsed/${electionId}/contests/${contestId}.json`;
    const cached = CONTEST_CACHE[fullUrl];
    const contest = await (cached || basicGet(fullUrl, {}));
    CONTEST_CACHE[fullUrl] = contest;
    const localized = localizeContest(contest, language);
    return localized;
};

/** ISB Client fetchBallot Utility Component */
export const fetchBallot = async (electionId, language, ballotId) => {
    const fullUrl = `parsed/${electionId}/ballots/${ballotId}.json`;
    const cached = BALLOT_CACHE[fullUrl];
    const ballot = await (cached || basicGet(fullUrl, null));
    BALLOT_CACHE[fullUrl] = ballot;
    const contests = await Promise.all(
        ballot.contests.map(contest => fetchContest(electionId, language, contest.contest_id))
    );
    /* different ballots have the same contests in different orders, so we have to
     * merge the fetched contests with the ordering on the ballot. also, each
     * ballot has it's own orderings for candidates, so we need to add the
     * correct candidate ordering to each contest */
    const withOrder = ballot.contests
        .map(contest => {
            const fetched = contests.find(c => c.id === contest.contest_id);
            const orders = contest.candidates; // it's called candidates, but it's not
            const candidates = fetched.candidates;
            const orderedCandidates = candidates
                .map(cand => {
                    const orderObj = orders.find(({
                        candidate_id
                    }) => candidate_id === cand.id);
                    const order = orderObj ?
                        orderObj.order :
                        cand.order;
                    return { ...cand,
                        order
                    };
                })
                .sort((a, b) => a.order - b.order);
            return { ...fetched,
                order: contest.order,
                candidates: orderedCandidates
            };
        })
    return {
        ...ballot,
        contests: withOrder,
    };
};

/** ISB Client dimsPrimaryLookup Utility Component */
export const dimsPrimaryLookup = (electionId, lastname, dob, houseNumber) => {
    return axios
        .get(`${DIMS_HOST}/${DIMS_PRIMARY_ENDPOINT}`, {
            crossDomain: true,
            params: {
                ElectionID: electionId,
                LastName: lastname,
                DateOfBirth: dob,
                HouseNumber: houseNumber,
            },
        })
        .then(response => response.data)
        .catch(err => {
            console.error(err);
            /* DIMS returns have 4 cases:
             * 1. one match found
             * 2. multiple matches found
             * 3. no match found
             * 4. lookup erroree
             * The following is a hack to make case 4 look like case 3 */
            return [{
                error: 'No matches found'
            }];
        });
};

/** ISB Client dimsSecondaryLookup Utility Component */
export const dimsSecondaryLookup = (
    electionId,
    firstname,
    lastname,
    dob,
    houseNumber,
    driversLicense
) => {
    return axios
        .get(`${DIMS_HOST}/${DIMS_SECONDARY_ENDPOINT}`, {
            params: {
                ElectionID: electionId,
                firstName: firstname,
                LastName: lastname,
                DateOfBirth: dob,
                HouseNumber: houseNumber,
                uid: driversLicense,
            },
        })
        .then(response => response.data)
        .catch(err => {
            console.error(err);
            return null;
        });
};

export default {
    fetchAvailableElections,
    fetchElection,
    fetchParties,
    fetchCrossover,
    fetchSegmentsWithPrefix,
    fetchPartyBallotMap,
    fetchBallot,
    dimsPrimaryLookup,
    dimsSecondaryLookup,
};