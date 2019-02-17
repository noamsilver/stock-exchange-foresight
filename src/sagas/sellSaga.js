import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * sellSaga(action) {
  yield put(actions.stockSellClearError());
  const res = yield call(api.sell, action.payload);
  if (res.err) {
    yield put(actions.stockSellError(res.err.message));
  } else {
    yield put(actions.stockSellSuccess());
    yield put(actions.portfolioInit());
    yield put(actions.updateFunds(res.funds));
  }
}

export default function * watchSellSaga() {
  yield takeEvery(types.STOCK_SELL_INIT, sellSaga)
}