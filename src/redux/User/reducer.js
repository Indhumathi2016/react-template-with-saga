import actions from "./actions";

const initState = {
  loading: true,
  users: []
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_USER: {
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
    default:
      return state;
  }
}
