import React, {
    Component
} from 'react';
import PollPassOverview from './PollPassOverview';
import PollPassGenerate from './PollPassGenerate';
import get from 'lodash/get';
import {
    getElectionShortTitle,
    getElectionId,
    getElectionDate,
    getElectionJurisdictionId,
} from '../../utils/ElectionGetters';
import {
    getContests,
    getContest,
    getCandidate,
    getCandidateIsWriteIn,
} from '../../utils/BallotGetters';
import {
    fetchBallot
} from '../../utils/api';
import Copy from '../../utils/CopyManager';

function selectionsHasWriteIns(selections, ballot) {
    const contestIds = Object.keys(selections || []);
    /* find a contest that has a write-in selected */
    return Boolean(
        contestIds.find(contestId => {
            const candidateIds = get(selections, contestId, []);
            /* find a candidate that is a write-in */
            return Boolean(
                candidateIds.find(candidateId => {
                    const contest = getContest(contestId, ballot);
                    const candidate = getCandidate(candidateId, contest);
                    return getCandidateIsWriteIn(candidate);
                })
            );
        })
    );
}

/** 
 * ISB Client PollPassContainer Page Component 
 * @module PollPassContainer 
 * @exports module:PollPassContainer */
export default class PollPassContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOverview: true,
            englishBallot: null,
            fetched: null
        };
        this.onContinueClick = this.onContinueClick.bind(this);
    }

    /* We failed to support all languages on the ballot pdf generation feature,
     * so we need to fetch the English ballot whenever we make it to the poll pass
     * page, and use it for populating PDFs. This feature was not designed or
     * thought through, and we probably need to rethink it. */
    componentDidUpdate() {
        const {
            ballot,
            election
        } = this.props;
        const {
            fetched
        } = this.state;
        const bid = get(ballot, 'id');
        const eid = getElectionId(election);
        const fetchPath = eid + bid;

        const fetchEnglishBallot = () => {
            fetchBallot(eid, 'EN', bid).then(englishBallot => {
                this.setState({
                    englishBallot
                });
            });
        };

        if (bid && eid && fetched !== fetchPath) {
            this.setState({
                fetched: fetchPath
            }, fetchEnglishBallot);
        }
    }

    onContinueClick() {
        this.setState({
            showOverview: false
        });
    }

    buildBallotPrecinctData() {
        const {
            election,
            selectedPrecincts,
            ballot,
            partyId
        } = this.props;

        return {
            jurisdictionId: getElectionJurisdictionId(election),
            electionId: getElectionId(election),
            reportingUnit: get(selectedPrecincts, getElectionId(election), null),
            ballotStyleId: get(ballot, 'id'),
            partyId: partyId,
        };
    }

    render() {
        const {
            history,
            mode,
            language,
            election,
            selections,
            writeInValues,
            contentTabIndex,
            clearSelections,
            updateCompletedBallots,
            hasIncompleteBallots,
            ballot,
            updateSelectedLanguage
        } = this.props;

        const {
            showOverview
        } = this.state;

        return showOverview ? ( <
            PollPassOverview onContinue = {
                this.onContinueClick
            }
            copy = {
                Copy('PollPassOverview', mode, language)
            }
            mode = {
                mode
            }
            language = {
                language
            }
            contentTabIndex = {
                contentTabIndex
            }
            />
        ) : (
            this.state.englishBallot && ( <
                PollPassGenerate selections = {
                    selections
                }
                ballotPrecinctData = {
                    this.buildBallotPrecinctData()
                }
                mode = {
                    mode
                }
                hasWriteIns = {
                    selectionsHasWriteIns(selections, ballot)
                }
                writeInValues = {
                    writeInValues
                }
                electionName = {
                    getElectionShortTitle(election, language)
                }
                electionDate = {
                    getElectionDate(election)
                }
                electionId = {
                    getElectionId(election)
                }
                updateCompletedBallots = {
                    updateCompletedBallots
                }
                hasIncompleteBallots = {
                    hasIncompleteBallots
                }
                contests = {
                    getContests(ballot)
                }
                history = {
                    history
                }
                copy = {
                    Copy('PollPassGenerate', mode, language)
                }
                language = {
                    language
                }
                contentTabIndex = {
                    contentTabIndex
                }
                clearSelections = {
                    clearSelections
                }
                updateSelectedLanguage = {
                    updateSelectedLanguage
                }
                />
            )
        );
    }
}