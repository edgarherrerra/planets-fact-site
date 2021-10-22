import { call, delay, put, take } from "redux-saga/effects";
import { actionTypes, tickClock } from "./actions";

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock());
    yield delay(1000);
  }
}

function* rootSaga() {
  yield call(runClockSaga);
}

export default rootSaga;
