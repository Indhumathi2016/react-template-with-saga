import { all, call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import actions from './actions';
import { getRequest } from 'helpers/axiosClient';

export function* getUser(params) {
    try {
        const response = yield call(() => getRequest('user'));
        yield put({
            type: actions.GET_USER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: actions.GET_USER_FAILURE });
            message.error('Something went wrong');
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_USER, getUser),
    ]);
}
