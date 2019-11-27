import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DemoModal from "../component/DemoModal";
import UploadCV from "../component/UploadCV";
import { showModal, UPLOADCV_MODULE } from "../modal.actions.js";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(UPLOADCV_MODULE, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const UploadCVModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UploadCV)
);

export default UploadCVModalContainer;
