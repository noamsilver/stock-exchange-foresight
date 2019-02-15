import { takeEvery, put } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * portfolioSaga() {
  const res = yield api.portfolio();
  console.log({portfolioRes: res});
  if (res.err) {
    yield put(actions.portfolioError(res.err.message));
  } else {
    yield put(actions.updateFunds(res.funds));
    yield put(actions.portfolioSuccess(res.myStocks));
    yield put(actions.marketUpdateInit())
  }
};

export default function * watchPortfolioSaga() {
  yield takeEvery(types.STOCK_PORTFOLIO_INIT, portfolioSaga)
};