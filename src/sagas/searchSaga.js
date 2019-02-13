import { debounce, put, select } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * searchSaga() {
  console.log('in searchSaga');
  const state = yield select();
  if (state.searchValue.length > 0) {
    const res = yield api.search(state.searchValue);
    console.log({res});
    if (res.err) {
      yield put(actions.searchError(res.error.message));
    } else {
      yield put(actions.searchResults(res.stocks));
    }
  }
};

export default function * watchSearchSaga() {
  yield debounce(500, types.STOCK_SEARCH_INIT, searchSaga);
};