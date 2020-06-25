import { all, call, put, takeEvery } from "redux-saga/effects";
import { message } from "antd";
import actions from "./actions";
import {getRequest, postRequest} from 'helpers/axiosClient';

export function* getUser() {
  try {
    const response = yield call(() => getRequest("users"));
    yield put({
      type: actions.GET_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({ type: actions.GET_USER_FAILURE });
    message.error("Something went wrong");
  }
}

export function* getUserPosts(params) {
  try {
    const response = yield call(() => getRequest(`posts?user_id=${params.userId}`));
    yield put({
      type: actions.GET_USER_POSTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({ type: actions.GET_USER_POSTS_FAILURE });
    message.error("Something went wrong");
  }
}

export function* getUserPostsDetails(params) {
  try {
    const response = yield call(() => getRequest(`posts/${params.postId}/comments`));
    yield put({
      type: actions.GET_USER_POST_DETAILS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    yield put({ type: actions.GET_USER_POST_DETAILS_FAILURE });
    message.error("Something went wrong");
  }
}

export function* addComment(params) {
  try {
    yield call(() => postRequest(`posts/${params.postId}/comments`, params.payload));
    yield put({
      type: actions.ADD_COMMENT_SUCCESS,
    });
    yield put({ type: actions.SHOW_COMMENT_MODAL, payload: false });
    message.success('Comment posted successfully')
  } catch (error) {
    yield put({ type: actions.ADD_COMMENT_FAILURE });
    message.error("Something went wrong");
  }
}
export function* addPost(params) {
  try {
    yield call(() => postRequest(`posts`, params.payload));
    yield put({
      type: actions.ADD_POST_SUCCESS,
    });
    yield put({ type: actions.SHOW_COMMENT_MODAL, payload: false });
    message.success('Post added successfully')
  } catch (error) {
    yield put({ type: actions.ADD_POST_FAILURE });
    message.error("Something went wrong");
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_USERS, getUser),
    takeEvery(actions.GET_USER_POSTS, getUserPosts),
    takeEvery(actions.GET_USER_POST_DETAILS, getUserPostsDetails),
    takeEvery(actions.ADD_COMMENT, addComment),
    takeEvery(actions.ADD_POST, addPost)
  ]);
}
