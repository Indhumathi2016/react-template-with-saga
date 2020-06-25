import actions from "./actions";

const initState = {
  loading: true,
  users: [],
  userPosts: [],
  currentUserName: "",
  comments: [],
  currentPost: {},
  isShowModal: false,
  isAdding: false,
  isFetchingUsers: false,
  isFetchingPosts: false,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_USERS:
      return {
        ...state,
        isFetchingUsers: true,
      }
    case actions.GET_USER_POSTS: {
      return {
        ...state,
        isFetchingPosts: true
      };
    }
    case actions.GET_USER_SUCCESS: {
      return {
        ...state,
        isFetchingUsers: false,
        users: action.payload
      };
    }
    case actions.GET_USER_FAILURE: {
      return {
        ...state,
        isFetchingUsers: false
      };
    }
    case actions.GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        isFetchingPosts: false
      };
    case actions.GET_USER_POSTS_FAILURE:
      return {
        ...state,
        isFetchingPosts: false
      };
    case actions.SET_POST_DETAILS:
      return {
        ...state,
        currentUserName: action.userName,
        currentPost: action.post
      };
    case actions.GET_USER_POST_DETAILS_SUCCESS:
      return {
        ...state,
        comments: action.payload
      };
    case actions.SHOW_COMMENT_MODAL:
      return {
        ...state,
        isShowModal: action.payload
      };
    case actions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isAdding: false
      };
    case actions.ADD_COMMENT:
      return {
        ...state,
        isAdding: true
      };
    case actions.ADD_POST:
      return {
        ...state,
        isAdding: true
      };
    case actions.ADD_POST_SUCCESS:
      return {
        ...state,
        isAdding: false
      };
    case actions.ADD_POST_FAILURE:
      return {
        ...state,
        isAdding: false
      };
    default:
      return state;
  }
}
