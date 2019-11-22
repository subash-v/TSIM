import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../modal.actions.js";
import SignUpModule from "../component/SignUpModule.js";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
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
