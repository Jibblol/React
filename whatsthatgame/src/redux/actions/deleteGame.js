import { getAllGames } from './getAllGames';
import Config from '../../config';
export const DELETE_GAME = 'DELETE_GAME';

export function deleteGame(id) {
    return(dispatch) => {
        fetch(Config.serverUrl + '/api/todo/' + id, {
            method: 'DELETE'
        })
        .then(() => {
            dispatch(getAllGames());
        })
    }
}

function itemsDeleteDataSuccess(items) {
    return {
        type: 'DELETE_GAME',
        items,
        isLoading: false
    };
}