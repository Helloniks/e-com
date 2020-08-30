import { all, fork, put, takeEvery } from "redux-saga/effects";
import booksData from "../mock/mockdata";
import { getProductsSuccess } from "../actions/dashboardAction";
import { DashboardActionTypes } from "../model/Dashboard";

function* handleFetch() {
  try {

    //this is a mock data.. becuase api which was given its not working.
    const data = booksData;
    yield put(getProductsSuccess(data));
  } catch (err) {
    // if (err instanceof Error && err.stack) {
    //   yield put(fetchError(err.stack));
    // } else {
    //   yield put(fetchError("An unknown error occurred."));
    // }
  }
}

function* watchFetchRequest() {
  yield takeEvery(DashboardActionTypes.FETCH_REQUEST, handleFetch);
}

function* dashboardSaga() {
  yield all([fork(watchFetchRequest)]);
}
export default dashboardSaga;