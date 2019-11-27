import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, REGISTER_DETAILS_MODAL } from "../../modules/modal.actions";
import EventDetailsPage from "../EventDetailsPage";
const mapDispatchToProps = dispatch => {
  return {
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const EventDetailsPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage)
);

export default EventDetailsPageContainer;
