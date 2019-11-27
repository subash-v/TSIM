import { SUCCESS, FAILURE, REQUESTING, ERROR } from "../utils/constant";
import * as Cookie from "../utils/Cookie.js";
import { get, post } from "../utils/apiRequest.js";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST,
    status: REQUESTING
  };
}

export function loginUserSuccess(loginDetails) {
  return {
    type: LOGIN_USER_SUCCESS,
    status: SUCCESS,
    loginDetails
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function getLogin(userLoginDetails) {
  return async dispatch => {
    dispatch(loginUserRequest());
    try {
      let url = `users/login`;
      const result = await post(url, userLoginDetails);
      const resultJson = await result;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(loginUserSuccess(resultJson));
    } catch (e) {
      return dispatch(loginUserFailure(e.message));
    }
  };
}
