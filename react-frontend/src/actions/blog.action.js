import { SUCCESS, FAILURE, REQUESTING, ERROR } from "../utils/constant";
import { get, post } from "../utils/apiRequest.js";

export const GET_ALL_BLOGS_REQUEST = "GET_ALL_BLOGS_REQUEST";
export const GET_ALL_BLOGS_SUCCESS = "GET_ALL_BLOGS_SUCCESS";
export const GET_ALL_BLOGS_FAILURE = "GET_ALL_BLOGS_FAILURE";

export function getAllBlogsRequest() {
  return {
    type: GET_ALL_BLOGS_REQUEST,
    status: REQUESTING
  };
}

export function getAllBlogsSuccess(blogsDetails) {
  return {
    type: GET_ALL_BLOGS_SUCCESS,
    status: SUCCESS,
    blogsDetails
  };
}

export function getAllBlogsFailure(error) {
  return {
    type: GET_ALL_BLOGS_FAILURE,
    status: ERROR,
    error
  };
}

export function getAllBlogs() {
  return async dispatch => {
    dispatch(getAllBlogsRequest());
    try {
      let url = `blogs?limit=10&offset=1`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getAllBlogsSuccess(resultJson));
    } catch (e) {
      return dispatch(getAllBlogsFailure(e.message));
    }
  };
}
