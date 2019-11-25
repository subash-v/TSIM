import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, CENTER_MODULE_DEMO } from "../modal.actions.js";
import Connections from "../../Connections/ConnectionsPage";
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
const ConnectionContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Connections)
);

export default ConnectionContainer;
