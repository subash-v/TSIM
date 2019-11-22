import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  FORGOT_PASSWORD_MODULE,
  LOGIN_MODULE,
  SIGNUP_MODULE
} from "../modal.actions.js";
import LoginModule from "../component/LoginModule";
const mapDispatchToProps = dispatch => {
  return {
    showForgotPassword: data => {
      dispatch(showModal(FORGOT_PASSWORD_MODULE, data));
    },
    showLoginModal: data => {
      dispatch(showModal(LOGIN_MODULE, data));
    },
    showSignUpModal: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    }
  };
};
const mapStateToProps = state => {
  return {
    loading: state
  };
};
const SignInModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginModule)
);

export default SignInModuleContainer;
