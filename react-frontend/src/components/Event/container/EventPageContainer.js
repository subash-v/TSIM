import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  FILTER_MODULE,
  EVENT_DETAIL_SLIDER_COMPONENT
} from "../../modules/modal.actions";
import EventPage from "../EventPage";
import { getAllEvents, getEventDetails } from "../../../actions/event.action";
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
    }
  };
};

const mapStateToProps = state => {
  return {
    event: state.event
  };
};
const EventPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventPage)
);

export default EventPageContainer;
