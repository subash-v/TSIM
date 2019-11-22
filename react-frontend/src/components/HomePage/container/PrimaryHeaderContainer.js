import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, MODULE_DEMO, SLIDER_COMPONENT } from "../../modules/modal.actions";
import PrimaryHeader from "../PrimaryHeader";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(MODULE_DEMO, data));
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
  connect(mapStateToProps, mapDispatchToProps)(PrimaryHeader)
);

export default PrimaryHeaderContainer;
