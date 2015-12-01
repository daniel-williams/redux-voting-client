import {List, Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state, entry) {
    var pair = state.getIn(['vote', 'pair']);
    if(pair && pair.includes(entry)) {
        return state.set('hasVoted', entry);
    } else {
        return state;
    }
}

function resetVote(state) {
    var hasVoted = state.get('hasVoted');
    var pair = state.getIn(['vote', 'pair'], List());
    if(hasVoted && !pair.includes(hasVoted)) {
        return state.remove('hasVoted');
    } else {
        return state;
    }
}

export default function(state = Map(), action) {
    switch(action.type) {
        case 'SET_STATE':
            return resetVote(setState(state, action.state));
        case 'VOTE':
            return vote(state, action.entry);
    }
    return state;
}
