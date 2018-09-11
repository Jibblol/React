import { getAllGames } from './getAllGames';
import Config from '../../config';

export const ADD_GAME = 'ADD_GAME';

export function addGame(title, description, year) {
    return (dispatch) => {
        fetch(Config.serverUrl + '/api/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                year: year
            })
        })
            .then(() => {
                dispatch(getAllGames());
            })
    }
}