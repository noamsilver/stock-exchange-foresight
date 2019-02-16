import { takeEvery, put, call } from 'redux-saga/effects';
import api from '../api';
import types from '../types';
import actions from '../actions';

export function * buySaga(action) {
  yield put(actions.stockBuyClearError());
  
  const res = yield call(api.buy, action.payload.symbol, action.payload.quantity);
  console.log({buyRes: res})
  if (res.err) {
    yield put(actions.stockBuyError(res.err.message));
  } else {
    yield put(actions.stockBuySuccess());
    yield put(actions.portfolioInit());
    yield put(actions.updateFunds(res.funds));
  }
}

export default function * watchBuySaga() {
  yield takeEvery(types.STOCK_BUY_INIT, buySaga)
}