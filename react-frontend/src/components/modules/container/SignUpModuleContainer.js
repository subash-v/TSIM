import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, LOGIN_MODULE } from "../modal.actions.js";
import SignUpModule from "../component/SignUpModule.js";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModal: data => {
      dispatch(showModal(LOGIN_MODULE, data));
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
