import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  SELECT_EVENT_MODULE,
  PROFILE_MODAL,
  WORKEXP_MODAL
} from "../../modules/modal.actions";
import PrimaryHeader from "../PrimaryHeader";
import WorkExpModal from "../../modules/component/WorkExpModal";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(WORKEXP_MODAL, data));
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
