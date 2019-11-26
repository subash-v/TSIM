import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  SLIDER_COMPONENT,SELECT_EVENT_MODULE,PROFILE_MODAL,ADD_POS_FORM

} from "../../modules/modal.actions";
import PrimaryHeader from "../PrimaryHeader";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(ADD_POS_FORM, data));
    },
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    }
    , showsliderComponent: data => {
      dispatch(showModal(SLIDER_COMPONENT, data));
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
