export const GET_GAMES = 'GET_GAMES';
export const IS_LOADING = 'IS_LOADING';

export function getAllGames(){
    return (dispatch) => {
        dispatch(isLoading());
        fetch('https://localhost:44363/api/todo')
            .then(response => response.json())
            .then(responseJSON => {
                dispatch(itemsFetchDataSuccess(responseJSON));
            })
    }
}

function itemsFetchDataSuccess(items) {
    return {
        type: 'GET_GAMES',
        items,
        isLoading: false
    };
}

function isLoading() {
    return {
        type: 'IS_LOADING',
        isLoading: true
    }
}