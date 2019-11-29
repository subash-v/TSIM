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

export const GET_REGISTER_EVENT_DETAILS_REQUEST =
  "GET_REGISTER_EVENT_DETAILS_REQUEST";
export const GET_REGISTER_EVENT_DETAILS_SUCCESS =
  "GET_REGISTER_EVENT_DETAILS_SUCCESS";
export const GET_REGISTER_EVENT_DETAILS_FAILURE =
  "GET_REGISTER_EVENT_DETAILS_FAILURE";

export const BOOK_EVENT_REQUEST = "BOOK_EVENT_REQUEST";
export const BOOK_EVENT_SUCCESS = "BOOK_EVENT_SUCCESS";
export const BOOK_EVENT_FAILURE = "BOOK_EVENT_FAILURE";

export const PAYMENT_STATUS_REQUEST = "PAYMENT_STATUS_REQUEST";
export const PAYMENT_STATUS_SUCCESS = "PAYMENT_STATUS_SUCCESS";
export const PAYMENT_STATUS_FAILURE = "PAYMENT_STATUS_FAILURE";

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
      let url = `events/${id}`;
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

export function getFilterRequest() {
  return {
    type: GET_FILTER_REQUEST,
    status: REQUESTING
  };
}

export function getFilterSuccess(filterList) {
  return {
    type: GET_FILTER_SUCCESS,
    status: SUCCESS,
    filterList
  };
}

export function getFilterFailure(error) {
  return {
    type: GET_FILTER_FAILURE,
    status: ERROR,
    error
  };
}

export function getFilterList() {
  return async dispatch => {
    dispatch(getFilterRequest());
    try {
      let url = `events/filters`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getFilterSuccess(resultJson));
    } catch (e) {
      return dispatch(getFilterFailure(e.message));
    }
  };
}

export function getRegisterEventRequest() {
  return {
    type: GET_REGISTER_EVENT_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getRegisterEventSuccess(registerList) {
  return {
    type: GET_REGISTER_EVENT_DETAILS_SUCCESS,
    status: SUCCESS,
    registerList
  };
}

export function getRegisterEventFailure(error) {
  return {
    type: GET_REGISTER_EVENT_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getRegisterEvent(id) {
  return async dispatch => {
    dispatch(getRegisterEventRequest());
    try {
      let url = `events/slots/${id}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getRegisterEventSuccess(resultJson));
    } catch (e) {
      return dispatch(getRegisterEventFailure(e.message));
    }
  };
}

export function bookEventRequest() {
  return {
    type: BOOK_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function bookEventSuccess(paymentMessage) {
  return {
    type: BOOK_EVENT_SUCCESS,
    status: SUCCESS,
    paymentMessage
  };
}

export function bookEventFailure(error) {
  return {
    type: BOOK_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function bookEvent(id, details) {
  return async dispatch => {
    dispatch(bookEventRequest());
    try {
      let url = `events/booking/${id}`;
      const result = await post(url, details);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(bookEventSuccess(resultJson));
    } catch (e) {
      return dispatch(bookEventFailure(e.message));
    }
  };
}

export function paymentStatusRequest() {
  return {
    type: PAYMENT_STATUS_REQUEST,
    status: REQUESTING
  };
}

export function paymentStatusSuccess(paymentStatus) {
  return {
    type: PAYMENT_STATUS_SUCCESS,
    status: SUCCESS,
    paymentStatus
  };
}

export function paymentStatusFailure(error) {
  return {
    type: PAYMENT_STATUS_FAILURE,
    status: ERROR,
    error
  };
}

export function paymentStatus(id, details) {
  return async dispatch => {
    dispatch(paymentStatusRequest());
    try {
      let url = `events/booking/${id}`;
      const result = await post(url, details);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(paymentStatusSuccess(resultJson));
    } catch (e) {
      return dispatch(paymentStatusFailure(e.message));
    }
  };
}
