import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../../modules/modal.actions";
import Home from "../Home";
import { getAllEvents, getEventDetails } from "../../../actions/event.action";

const mapDispatchToProps = dispatch => {
  return {
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
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
    loading: state,
    allEventDetails: state.event.allEventDetails
  };
};
const HomeContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);

export default HomeContainer;
