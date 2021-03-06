import { call, delay, select, put, all, takeEvery } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * marketUpdateSaga() {
  const state = yield select();
  const portfolioStocks = state.portfolio.map(stock => stock.symbol);
  const searchStocks = state.searchResults.map(stock => stock.symbol);
  let portfolioRes = undefined;
  let searchRes = undefined;
  switch (true) {
    case (portfolioStocks.length > 0) && (searchStocks.length > 0):
       const res = yield all([
        call(api.market, portfolioStocks),
        call(api.market, searchStocks),
      ]);
      [portfolioRes, searchRes] = res
      break;
      case (portfolioStocks.length > 0) && (searchStocks.length === 0):
      portfolioRes = yield call(api.market, portfolioStocks);
      break;
      case (portfolioStocks.length === 0) && (searchStocks.length > 0):
      searchRes = yield call(api.market, searchStocks);
      break;
    default:
      break;
  }
  if (portfolioRes && !portfolioRes.err) {
    yield put(actions.marketPortfolioUpdateSuccess(portfolioRes.stocks));
  }
  if (searchRes && !searchRes.err) {
    yield put(actions.marketSearchUpdateSuccess(searchRes.stocks));
  }
};

export function * watchMarketUpdateSaga() {
  yield takeEvery(types.MARKET_UPDATE_INIT, marketUpdateSaga);
} 

export default function * autoMarketUpdateSaga() {
  while (true) {
    yield call(marketUpdateSaga);
    yield delay(5000);
  };
};