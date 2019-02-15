import { all, call } from 'redux-saga/effects';
import searchSaga from './searchSaga';
import buySaga from './buySaga';
import sellSaga from './sellSaga';
import watchPorfolioSaga, { portfolioSaga } from './portfolioSaga';
import autoMarketUpdateSaga, { watchMarketUpdateSaga } from './marketUpdateSaga';

// eslint-disable-next-line
function * helloSaga() {
  console.log('Hello Saga!');
}

export default function * rootSaga() {
  yield all([
    call(helloSaga),
    call(searchSaga),
    call(buySaga),
    call(sellSaga),
    call(portfolioSaga),
    call(watchPorfolioSaga),
    call(watchMarketUpdateSaga),
    call(autoMarketUpdateSaga),
  ]);
};