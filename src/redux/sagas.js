import { all } from 'redux-saga/effects';
import userSaga from './User/saga';

export default function* rootSaga(getState) {
  yield all([userSaga()]);
}
