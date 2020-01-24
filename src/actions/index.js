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