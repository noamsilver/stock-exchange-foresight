import { all, call } from 'redux-saga/effects';
import searchSaga from './searchSaga';

// eslint-disable-next-line
function * helloSaga() {
  console.log('Hello Saga!');
}

export default function * rootSaga() {
  yield all([
    call(helloSaga),
    call(searchSaga),
  ]);
};