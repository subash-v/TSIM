import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../../modules/modal.actions";
import Home from "../Home";
const mapDispatchToProps = dispatch => {
  return {
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const HomeContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);

export default HomeContainer;
