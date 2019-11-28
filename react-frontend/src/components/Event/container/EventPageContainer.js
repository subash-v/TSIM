import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  FILTER_MODULE,
  EVENT_DETAIL_SLIDER_COMPONENT
} from "../../modules/modal.actions";
import EventPage from "../EventPage";
import {
  getAllEvents,
  getEventDetails,
  getFilterList
} from "../../../actions/event.action";
const mapDispatchToProps = dispatch => {
  return {
    showFilterModule: data => {
      dispatch(showModal(FILTER_MODULE, data));
    },
    showEventDetailsModule: data => {
      dispatch(showModal(EVENT_DETAIL_SLIDER_COMPONENT, data));
    },
    getAllEvents: () => {
      dispatch(getAllEvents());
    },
    getEventDetails: id => {
      dispatch(getEventDetails(id));
    },
    getFilterList: () => {
      dispatch(getFilterList());
    }
  };
};

const mapStateToProps = state => {
  return {
    allEventDetails: state.event.allEventDetails,
    eventDetails: state.event.eventDetails,
    filterList: state.event.filterList,
    filterLoader: state.event.filterLoader
  };
};
const EventPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventPage)
);

export default EventPageContainer;
