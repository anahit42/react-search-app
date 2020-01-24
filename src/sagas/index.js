import { put, throttle } from 'redux-saga/effects';

import SearchApi from '../api/search';

import { searchRequestSuccess, searchRequestFailure, clearSearchResults } from '../actions';

function * handleInput (action) {
  const { q, index } = action.payload;

  try {
    if (q.length <= 1) {
      yield put(clearSearchResults());
      return;
    }

    const response = yield SearchApi.get('/search', {
      params: { q, index }
    });

    const categoryData = response.data.find((el) => el.category === index);
    const searchResults = categoryData ? categoryData.documents : [];

    yield put(searchRequestSuccess(searchResults));
  } catch (error) {
    yield put(searchRequestFailure(error));
  }
}

export function * watchInput () {
  yield throttle(2000, 'INPUT_CHANGED', handleInput);
}
