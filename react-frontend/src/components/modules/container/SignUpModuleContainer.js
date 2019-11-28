import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SLIDER_COMPONENT,
  SELECT_EVENT_MODULE
} from "../modal.actions.js";
import { postSignUp } from "../../../actions/loginSignup.action";
import SignUpModule from "../component/SignUpModule.js";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModal: data => {
      dispatch(showModal(LOGIN_MODULE, data));
    },
    showTour: data => {
      dispatch(showModal(SLIDER_COMPONENT, data));
    },
    showEventSelector: data => {
      dispatch(showModal(SELECT_EVENT_MODULE, data));
    },
    postSignUp: userDetails => {
      dispatch(postSignUp(userDetails));
    }
  };
};
const mapStateToProps = state => {
  return {
    loading: state
  };
};
const SignUpModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpModule)
);

export default SignUpModuleContainer;
