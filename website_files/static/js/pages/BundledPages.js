/* All of the below components are loaded into this component so they will be part of one bundle when we code split using React.lazy */
import React from 'react';
import BallotContainer from './Ballot/BallotContainer';
import BallotReview from './BallotReview/BallotReview';
import PollPassContainer from './PollPass/PollPassContainer';
import Oath from './Oath';
import Valediction from './Valediction';

/** 
 * ISB Client BundledPages Page Component 
 * @module BundledPages 
 * @exports module:BundledPages */
export default function BundledPages({
    component,
    ...props
}) {
    let render;
    switch (component) {
        case 'BallotContainer':
            render = < BallotContainer { ...props
            }
            />;
            break;
        case 'BallotReview':
            render = < BallotReview { ...props
            }
            />;
            break;
        case 'PollPassContainer':
            render = < PollPassContainer { ...props
            }
            />;
            break;
        case 'Oath':
            render = < Oath { ...props
            }
            />;
            break;
        case 'Valediction':
            render = < Valediction { ...props
            }
            />;
            break;
        default:
            render = null;
    }

    return render;
}