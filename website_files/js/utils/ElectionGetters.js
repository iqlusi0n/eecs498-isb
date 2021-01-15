import get from 'lodash/get';

/* Get field value in English if undefined in selected language */

/** ISB Client getWithENFallback Utility Component */
export const getWithENFallback = (object, path, language, defaultValue) =>
    get(object, `${path}.${language}`, get(object, `${path}.EN`, defaultValue));

/* ********************************************************************************
 *
 *
 * ELECTION OBJECT GETTERS
 *
 *
 * ***************************************************************************** */
/** ISB Client getParties Utility Component */
export const getParties = (election, lang) => {
    const partiesArr = get(election, 'parties', []);
    const partiesObj = {};
    partiesArr.forEach(party => {
        partiesObj[party.id] = getWithENFallback(party, 'display_name', lang, null);
    });
    return partiesObj;
};

/** ISB Client langIsActive Utility Component */
export const langIsActive = (election, lang) => {
    return Boolean(get(election, `languages.${lang}`, false));
};

/** ISB Client getElectionId Utility Component */
export const getElectionId = election => get(election, 'id', undefined);

/** ISB Client getIsPartisan Utility Component */
export const getIsPartisan = election => {
    /* if is_partisan isn't specified, we default to true */
    if (Object.keys(election).includes('isPartisan')) {
        return election.isPartisan;
    } else {
        return true;
    }
};

/** ISB Client getNonPartisanParty Utility Component */
export const getNonPartisanParty = (parties, election) => {
    /* TODO(achilles) data is flawed at the moment, this is a workaround */
    switch (getElectionId(election)) {
        default: return getParty(parties, 'NP');
    }
};

/** ISB Client getElectionShortTitle Utility Component */
export const getElectionShortTitle = (election, language) =>
    getWithENFallback(election, 'short_title', language, undefined);

/** ISB Client getElectionTitle Utility Component */
export const getElectionTitle = (election, language) =>
    getWithENFallback(election, 'title', language, undefined);

/** ISB Client getElectionDate Utility Component */
export const getElectionDate = election => {
    const dateStr = get(election, 'electionDate', undefined);
    /* TODO(achilles) VBL dates are wrong: they're given as some day at midnight
     * UTC, but should be given to us as midnight PACIFIC time. The dates they're
     * giving us correspond to 5 PM Pacific time, which is not when elections
     * start */
    return dateStr.includes('00:00:00Z') ? dateStr.replace('00:00:00Z', '12:00:00Z') : dateStr;
};

/** ISB Client getElectionJurisdictionId Utility Component */
export const getElectionJurisdictionId = election => get(election, 'jurisdictionId', undefined);

/** ISB Client getElectionIsActive Utility Component */
export const getElectionIsActive = (election, mode) => {
    const isActive = get(election, `status.${mode}`) === 'ACTIVE';
    /* On the backend we have 2 fields "parsed" and "active", but on the front
     * we think of "active" as both "parsed and active". We may want to update the
     * backend so as to only expose a single status to the front */
    const isParsed = Boolean(get(election, 'parsed', false));
    return isActive && isParsed;
}

/* ********************************************************************************
 *
 *
 * PARTY OBJECT GETTERS
 *
 *
 * ***************************************************************************** */

/** ISB Client getPartyId Utility Component */
export const getPartyId = party => get(party, 'id', undefined);

/** ISB Client getParty Utility Component */
export const getParty = (parties, partyId) => {
    if (!(parties && partyId)) return undefined;
    return parties.find(party => getPartyId(party) === partyId);
};

/** ISB Client getPartyName Utility Component */
export const getPartyName = (party, language) =>
    getWithENFallback(party, 'display_name', language, undefined);

/** ISB Client getPartyTitle Utility Component */
export const getPartyTitle = (party, language) =>
    getWithENFallback(party, 'display_name', language, undefined);

/* ********************************************************************************
 *
 *
 * HELPERS
 *
 *
 * ***************************************************************************** */
/** ISB Client getSelectableParties Utility Component */
export const getSelectableParties = (parties, registeredParty, partyBallotMap, election) => {
    const mappedParties = Object.keys(partyBallotMap);
    const isPartisan = getIsPartisan(election);
    const nonPartisanParty = getNonPartisanParty(parties, election);
    const nonPartisanPartyId = getPartyId(nonPartisanParty);
    const registeredPartyId = getPartyId(registeredParty);

    /* only select parties inlcuded in the mapped parties
     * only inlucde the non partisan party if the election is non partisan
     * only inlcude the registered party if there is one */
    return parties
        .filter(({
            id
        }) => mappedParties.includes(id))
        .filter(({
            id
        }) => {
            if (isPartisan) {
                if (registeredPartyId) {
                    return id === registeredPartyId;
                } else {
                    return true;
                }
            } else {
                return id === nonPartisanPartyId;
            }
        });
};

/** ISB Client getCrossoverParties Utility Component */
export const getCrossoverParties = (parties, crossover, partyBallotMap, party) => {
    if (!(party && crossover && partyBallotMap && parties)) return [];

    const mappedParties = Object.keys(partyBallotMap);

    const crossoverMapping = crossover.find(crossoverItem => {
        const partyId = getPartyId(party);
        const crossoverPartyId = get(crossoverItem, 'party_id', undefined);
        return partyId === crossoverPartyId;
    });

    if (!crossoverMapping) return [];

    const crossoverPartyIds = get(crossoverMapping, 'crossover_party_id', []);

    return crossoverPartyIds
        .map(partyId => mappedParties.includes(partyId) && getParty(parties, partyId))
        .filter(partyObj => partyObj);
};