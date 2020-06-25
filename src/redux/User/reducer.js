import actions from "./actions";

const initState = {
  loading: true,
  users: [],
  userPosts: [],
  currentUserName: '',
  comments: [],
  currentPost: {},
  isShowCommentModal: false,
  addCommentLoader: false,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_USER_POSTS: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    }
    case actions.GET_USER_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case actions.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
      }
    case actions.SET_POST_DETAILS:
      return {
        ...state,
        currentUserName: action.userName,
        currentPost: action.post
      }
    case actions.GET_USER_POST_DETAILS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      }
    case actions.SHOW_COMMENT_MODAL:
      return {
        ...state,
        isShowCommentModal: action.payload,
      }
    case actions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoader: false
      }
    case actions.ADD_COMMENT:
      return {
        ...state,
        addCommentLoader: true,
      }
    case actions.ADD_POST:
      return {
        ...state,
        addCommentLoader: true,
      }
    case actions.ADD_POST_SUCCESS:
      return {
        ...state,
        addCommentLoader: false,
      }
    case actions.ADD_POST_FAILURE:
      return {
        ...state,
        addCommentLoader: false,
      }
    default:
      return state;
  }
}
