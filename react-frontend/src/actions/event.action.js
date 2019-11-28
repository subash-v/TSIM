import { SUCCESS, FAILURE, REQUESTING, ERROR } from "../utils/constant";
import { get, post } from "../utils/apiRequest.js";

export const GET_ALL_EVENTS_REQUEST = "GET_ALL_EVENTS_REQUEST";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAILURE = "GET_ALL_EVENTS_FAILURE";

export const GET_EVENT_DETAILS_REQUEST = "GET_EVENT_DETAILS_REQUEST";
export const GET_EVENT_DETAILS_SUCCESS = "GET_EVENT_DETAILS_SUCCESS";
export const GET_EVENT_DETAILS_FAILURE = "GET_EVENT_DETAILS_FAILURE";

export const GET_FILTER_REQUEST = "GET_FILTER_REQUEST";
export const GET_FILTER_SUCCESS = "GET_FILTER_SUCCESS";
export const GET_FILTER_FAILURE = "GET_FILTER_FAILURE";

export function getAllEventsRequest() {
  return {
    type: GET_ALL_EVENTS_REQUEST,
    status: REQUESTING
  };
}

export function getAllEventsSuccess(eventDetails) {
  return {
    type: GET_ALL_EVENTS_SUCCESS,
    status: SUCCESS,
    eventDetails
  };
}

export function getAllEventsFailure(error) {
  return {
    type: GET_ALL_EVENTS_FAILURE,
    status: ERROR,
    error
  };
}

export function getAllEvents() {
  return async dispatch => {
    dispatch(getAllEventsRequest());
    try {
      let url = `events?limit=10&page=1`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getAllEventsSuccess(resultJson));
    } catch (e) {
      return dispatch(getAllEventsFailure(e.message));
    }
  };
}

export function getEventDetailsRequest() {
  return {
    type: GET_EVENT_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getEventDetailsSuccess(eventDetails) {
  return {
    type: GET_EVENT_DETAILS_SUCCESS,
    status: SUCCESS,
    eventDetails
  };
}

export function getEventDetailsFailure(error) {
  return {
    type: GET_EVENT_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getEventDetails(id) {
  return async dispatch => {
    dispatch(getEventDetailsRequest());
    try {
      let url = `events?${id}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getEventDetailsSuccess(resultJson));
    } catch (e) {
      return dispatch(getEventDetailsFailure(e.message));
    }
  };
}
