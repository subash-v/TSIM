import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileModal from "../component/ProfileModal";
import { showModal, CENTER_MODULE_DEMO } from "../modal.actions.js";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(CENTER_MODULE_DEMO, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const ProfileModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileModal)
);

export default ProfileModalContainer;
