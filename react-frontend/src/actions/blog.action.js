import { SUCCESS, FAILURE, REQUESTING, ERROR } from "../utils/constant";
import { get, post } from "../utils/apiRequest.js";

export const GET_ALL_BLOGS_REQUEST = "GET_ALL_BLOGS_REQUEST";
export const GET_ALL_BLOGS_SUCCESS = "GET_ALL_BLOGS_SUCCESS";
export const GET_ALL_BLOGS_FAILURE = "GET_ALL_BLOGS_FAILURE";

export const GET_BLOG_DETAILS_REQUEST = "GET_BLOG_DETAILS_REQUEST";
export const GET_BLOG_DETAILS_SUCCESS = "GET_BLOG_DETAILS_SUCCESS";
export const GET_BLOG_DETAILS_FAILURE = "GET_BLOG_DETAILS_FAILURE";

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

export function getBlogsDetailsRequest() {
  return {
    type: GET_BLOG_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getBlogsDetailsSuccess(blogsDetails) {
  return {
    type: GET_BLOG_DETAILS_SUCCESS,
    status: SUCCESS,
    blogsDetails
  };
}

export function getBlogsDetailsFailure(error) {
  return {
    type: GET_BLOG_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getBlogsDetails(id) {
  return async dispatch => {
    dispatch(getBlogsDetailsRequest());
    try {
      let url = `blogs/${id}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getBlogsDetailsSuccess(resultJson));
    } catch (e) {
      return dispatch(getBlogsDetailsFailure(e.message));
    }
  };
}
