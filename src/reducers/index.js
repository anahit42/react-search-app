import { combineReducers } from 'redux';

const searchReducer = (searchResults = [], action) => {
  if (action.type === 'SEARCH_REQUEST_SUCCESS') {
    return action.payload;
  } else if (action.type === 'CLEAR_SEARCH_RESULTS') {
    return [];
  }

  return searchResults;
};

const favoritesListReducer = (selectedTeams = [], action) => {
  if (action.type === 'TEAM_SELECTED') {
    const teamIsSelected = selectedTeams.some((team) => team.id === action.payload.id);

    return teamIsSelected ? selectedTeams : [...selectedTeams, action.payload];
  } else if (action.type === 'TEAM_REMOVED') {
    return selectedTeams.filter((team) => team.id !== action.payload.id);
  }

  return selectedTeams;
};

export default combineReducers({
  searchResults: searchReducer,
  selectedTeams: favoritesListReducer
});
