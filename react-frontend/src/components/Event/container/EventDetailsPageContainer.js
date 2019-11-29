import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, REGISTER_DETAILS_MODAL } from "../../modules/modal.actions";
import EventDetailsPage from "../EventDetailsPage";
import {
  getEventDetails,
  getRegisterEvent,
  bookEvent
} from "../../../actions/event.action";

const mapDispatchToProps = dispatch => {
  return {
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    },
    getEventDetails: id => {
      dispatch(getEventDetails(id));
    },
    getRegisterEvent: id => {
      dispatch(getRegisterEvent(id));
    },
    bookEvent: (id, details) => {
      dispatch(bookEvent(id, details));
    }
  };
};

const mapStateToProps = state => {
  return {
    eventDetails: state.event.eventDetails,
    registerEventList: state.event.registerEventList,
    paymentStatus: state.event.paymentStatus,
    paymentDetails: state.event.paymentDetails,
    paymentLoader: state.event.paymentLoader,
    paymentError: state.event.paymentError
  };
};
const EventDetailsPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage)
);

export default EventDetailsPageContainer;
