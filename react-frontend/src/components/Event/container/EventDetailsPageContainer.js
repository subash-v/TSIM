import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, REGISTER_DETAILS_MODAL } from "../../modules/modal.actions";
import EventDetailsPage from "../EventDetailsPage";
import { getEventDetails } from "../../../actions/event.action";
const mapDispatchToProps = dispatch => {
  return {
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    },

    getEventDetails: id => {
      dispatch(getEventDetails(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    eventDetails: state.event.eventDetails
  };
};
const EventDetailsPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EventDetailsPage)
);

export default EventDetailsPageContainer;
