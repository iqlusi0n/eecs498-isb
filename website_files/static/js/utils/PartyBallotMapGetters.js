import get from 'lodash/get';
import {
    getElectionId
} from './ElectionGetters';

/** ISB Client getBallotStyleId Utility Component */
export const getBallotStyleId = (partyId, partyBallotMap) =>
    get(partyBallotMap, partyId, undefined);

/** ISB Client getElectionBallotKey Utility Component */
export const getElectionBallotKey = (election, partyId, partyBallotMap) =>
    getElectionId(election) + getBallotStyleId(partyId, partyBallotMap);