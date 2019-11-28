import * as eventAction from "../actions/event.action";

const event = (
  state = {
    allEventDetails: null,
    status: null,
    error: null,
    loading: false,
    eventDetails: null,
    filterList: null,
    filterLoader: false
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
    default:
      return state;
  }
};
export default event;
