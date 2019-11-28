import * as eventAction from "../actions/event.action";

const event = (
  state = {
    allEventDetails: null,
    status: null,
    error: null,
    loading: false,
    eventDetails: null
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
    default:
      return state;
  }
};
export default event;
