import { takeEvery, put, call, delay } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * resetSaga() {
  yield put(actions.marketResetClearError());
  const res = yield call(api.reset);
  if (!res) {
    yield put(actions.marketResetError('Reseting your portfolio faild.'));
    yield call(clearErrorAfter20);
  } else {
    yield put(actions.marketResetSuccess());
    yield put(actions.portfolioInit());
  }
}

export function * clearErrorAfter20() {
  yield delay(20000);
  yield put(actions.marketResetClearError())
}

export default function * watchResetSaga() {
  yield takeEvery(types.MARKET_RESET_INIT, resetSaga)
}