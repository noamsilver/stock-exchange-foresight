import { debounce, put, select, call } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * searchSaga() {
  const state = yield select();
  if (state.searchValue.length > 0) {
    const res = yield call(api.search, state.searchValue);
    console.log({searchRes: res});
    if (res.err) {
      yield put(actions.searchError(res.err.message));
    } else {
      yield put(actions.searchResults(res.stocks));
      yield put(actions.searchPopupShow());
    }
  } else {
    yield put(actions.searchPopupHide());
  }
};

export default function * watchSearchSaga() {
  yield debounce(500, types.STOCK_SEARCH_INIT, searchSaga);
};