import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  UPLOAD_PROFILE_IMAGE_MODAL,
  UPLOAD_CV_MODAL,
  ADD_SKILLS,
  ADD_LANGUAGES,
  ADD_ACTIVITIES,
  ADD_INTEREST
} from "../../modules/modal.actions";
import Profile from "../Profile";
const mapDispatchToProps = dispatch => {
  return {
    showImageUploadModal: data => {
      dispatch(showModal(UPLOAD_PROFILE_IMAGE_MODAL, data));
    },
    showUploadCvModal: data => {
      dispatch(showModal(UPLOAD_CV_MODAL, data));
    },
    showAddSkillModal: data => {
      dispatch(showModal(ADD_SKILLS, data));
    },
    showAddLanguagesModal: data => {
      dispatch(showModal(ADD_LANGUAGES, data));
    },
    showAddInterestModal: data => {
      dispatch(showModal(ADD_INTEREST, data));
    },
    showAddActivityModal: data => {
      dispatch(showModal(ADD_ACTIVITIES, data));
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
