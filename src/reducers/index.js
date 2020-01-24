import { combineReducers} from 'redux';

const searchReducer = (searchResults = [], action) => {
    if (action.type === 'SEARCH_REQUEST_SUCCESS') {
        return action.payload;
    }

    return searchResults;
};

export default combineReducers({
    searchResults: searchReducer,
});