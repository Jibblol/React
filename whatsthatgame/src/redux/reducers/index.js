import { combineReducers } from 'redux';

import { GET_GAMES, IS_LOADING } from '../actions/getAllGames';

let initialGamesReducer = { data: [] };

const gamesReducer = (state = initialGamesReducer, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {...state, data: action.items, isLoading: action.isLoading};

        case IS_LOADING:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    gamesReducer
})

export default rootReducer;