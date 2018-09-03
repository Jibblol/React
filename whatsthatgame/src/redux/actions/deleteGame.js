import { getAllGames } from './getAllGames';
export const DELETE_GAME = 'DELETE_GAME';

export function deleteGame(id) {
    return(dispatch) => {
        fetch('https://localhost:44363/api/todo/' + id, {
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