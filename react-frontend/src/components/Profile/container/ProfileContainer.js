import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  UPLOAD_PROFILE_IMAGE_MODAL
} from "../../modules/modal.actions";
import Profile from "../Profile";
const mapDispatchToProps = dispatch => {
  return {
    showImageUploadModal: data => {
      dispatch(showModal(UPLOAD_PROFILE_IMAGE_MODAL, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const ProfileContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);

export default ProfileContainer;
