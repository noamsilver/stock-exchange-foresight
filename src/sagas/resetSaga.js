import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * resetSaga() {
  const res = yield call(api.reset);
  console.log({resetRes: res})
  if (res.err) {
    yield put(actions.marketResetError(res.err.message));
  } else {
    yield put(actions.marketResetSuccess());
    yield put(actions.portfolioInit());
  }
}

export default function * watchResetSaga() {
  yield takeEvery(types.MARKET_RESET_INIT, resetSaga)
}