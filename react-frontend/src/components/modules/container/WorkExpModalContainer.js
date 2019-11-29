import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WorkExpModal from "../component/WorkExpModal";
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
const WorkExpModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WorkExpModal)
);

export default WorkExpModalContainer;
