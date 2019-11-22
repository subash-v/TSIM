import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  TOPIC_MODULE
} from "../../modules/modal.actions";
import PrimaryHeader from "../PrimaryHeader";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(TOPIC_MODULE, data));
    },
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
const PrimaryHeaderContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PrimaryHeader)
);

export default PrimaryHeaderContainer;
