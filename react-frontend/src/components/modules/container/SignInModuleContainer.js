import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, LOGIN_MODULE } from "../modal.actions.js";
import LoginModule from "../component/LoginModule";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(LOGIN_MODULE, data));
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
