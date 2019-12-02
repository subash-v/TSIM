import * as eventAction from "../actions/event.action";

const event = (
  state = {
    status: null,
    error: null,
    loading: false,
    eventDetails: null,
    allEventDetails: null,

    filterList: null,
    filterLoader: false,

    registerEventList: null,
    registerEventLoader: false,

    paymentStatus: null,
    paymentDetails: null,
    paymentLoader: false,
    paymentError: null,

    paymentStatusDetails: null
  },
  action
) => {
  switch (action.type) {
    case eventAction.GET_ALL_EVENTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.GET_ALL_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        allEventDetails: action.eventDetails
      });
    case eventAction.GET_ALL_EVENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_EVENT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.GET_EVENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        eventDetails: action.eventDetails
      });
    case eventAction.GET_EVENT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_FILTER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: true
      });

    case eventAction.GET_FILTER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        filterList: action.filterList
      });
    case eventAction.GET_FILTER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        error: action.error
      });
    case eventAction.GET_REGISTER_EVENT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: true
      });

    case eventAction.GET_REGISTER_EVENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: false,
        registerEventList: action.registerList
      });
    case eventAction.GET_REGISTER_EVENT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: false,
        error: action.error
      });
    case eventAction.BOOK_EVENT_REQUEST:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: true
      });

    case eventAction.BOOK_EVENT_SUCCESS:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentDetails: action.paymentMessage
      });
    case eventAction.BOOK_EVENT_FAILURE:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentError: action.error
      });
    case eventAction.PAYMENT_STATUS_REQUEST:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: true,
        paymentDetails: null
      });

    case eventAction.PAYMENT_STATUS_SUCCESS:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentStatusDetails: action.paymentStatus
      });
    case eventAction.PAYMENT_STATUS_FAILURE:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentError: action.error
      });
    default:
      return state;
  }
};
export default event;
