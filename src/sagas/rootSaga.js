import { all, call } from 'redux-saga/effects';
import searchSaga from './searchSaga';
import buySaga from './buySaga';
import sellSaga from './sellSaga';
import watchPorfolioSaga, { portfolioSaga } from './portfolioSaga';
import autoMarketUpdateSaga, { watchMarketUpdateSaga } from './marketUpdateSaga';
import resetSaga from './resetSaga';

export default function * rootSaga() {
  yield all([
    call(searchSaga),
    call(buySaga),
    call(sellSaga),
    call(portfolioSaga),
    call(watchPorfolioSaga),
    call(watchMarketUpdateSaga),
    call(autoMarketUpdateSaga),
    call(resetSaga),
  ]);
};