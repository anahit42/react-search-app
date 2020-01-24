export function inputChange (params) {
    return {
        type: 'INPUT_CHANGED',
        payload: params
    }
}

export function searchRequestSuccess (results) {
    return {
        type: 'SEARCH_REQUEST_SUCCESS',
        payload: results
    }
}

export function searchRequestFailure (error) {
    return {
        type: 'SEARCH_REQUEST_FAILURE',
        payload: error
    }
}

export function clearSearchResults () {
    return {
        type: 'CLEAR_SEARCH_RESULTS'
    }
}

export function selectTeam (team) {
    return {
        type: 'TEAM_SELECTED',
        payload: team
    }
}

export function removeTeam (team) {
    return {
        type: 'TEAM_REMOVED',
        payload: team
    }
}