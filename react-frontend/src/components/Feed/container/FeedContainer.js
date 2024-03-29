import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, USER_POST_MODAL } from "../../modules/modal.actions";
import Feed from "../Feed";

const mapDispatchToProps = dispatch => {
  return {
    showUserPostModal: data => {
      dispatch(showModal(USER_POST_MODAL, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const FeedContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Feed)
);

export default FeedContainer;
