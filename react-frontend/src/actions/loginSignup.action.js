import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  ACCESS_TOKEN
} from "../utils/constant";
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
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      Cookie.createCookie(ACCESS_TOKEN, resultJson.token);
      return dispatch(loginUserSuccess(resultJson));
    } catch (e) {
      return dispatch(loginUserFailure(e.message));
    }
  };
}

export function signUpUserRequest() {
  return {
    type: SIGN_UP_USER_REQUEST,
    status: REQUESTING
  };
}

export function signUpUserSuccess(signUpDetails) {
  return {
    type: SIGN_UP_USER_SUCCESS,
    status: SUCCESS,
    signUpDetails
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGN_UP_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function postSignUp(userSignUpDetails) {
  return async dispatch => {
    dispatch(signUpUserRequest());
    try {
      let url = `users`;
      const result = await post(url, userSignUpDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      Cookie.createCookie(ACCESS_TOKEN, resultJson.token);
      return dispatch(signUpUserSuccess(resultJson));
    } catch (e) {
      return dispatch(signUpUserFailure(e.message));
    }
  };
}
