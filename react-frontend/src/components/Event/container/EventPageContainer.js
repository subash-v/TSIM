import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, FILTER_MODULE } from "../../modules/modal.actions";
import EventPage from "../EventPage";
const mapDispatchToProps = dispatch => {
  return {
    showFilterModule: data => {
      dispatch(showModal(FILTER_MODULE, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const EventPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventPage)
);

export default EventPageContainer;
