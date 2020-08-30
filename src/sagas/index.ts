import { all, fork } from 'redux-saga/effects';
import bookSaga from './dashboardSaga';
//import cartSaga from './cartSaga';


export const rootSaga = function* root() {
  yield all([fork(bookSaga)]);
};