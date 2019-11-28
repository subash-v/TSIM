import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SelectEventModule from "../component/SelectEventModule";
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
const SelectEventContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectEventModule)
);

export default SelectEventContainer;
