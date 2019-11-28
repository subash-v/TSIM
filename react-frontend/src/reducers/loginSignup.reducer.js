import * as loginAction from "../actions/loginSignup.action";
import * as signUpAction from "../actions/loginSignup.action";

const loginSignup = (
  state = {
    loginDetails: null,
    status: null,
    error: null,
    loading: false,
    signUpDetails: null
  },
  action
) => {
  switch (action.type) {
    case loginAction.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case loginAction.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        loginDetails: action.loginDetails
      });
    case loginAction.loginUserFailure:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case signUpAction.SIGN_UP_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case signUpAction.SIGN_UP_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        signUpDetails: action.signUpDetails
      });
    case signUpAction.SIGN_UP_USER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default loginSignup;
