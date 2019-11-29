import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllBlogs, getBlogsDetails } from "../../../actions/blog.action";
import { GET_IN_TOUCH, showModal } from "../../modules/modal.actions";
import BlogDetails from "../BlogDetails/BlogDetails";
const mapDispatchToProps = dispatch => {
  return {
    getAllBlogs: () => {
      dispatch(getAllBlogs());
    },
    getBlogsDetails: id => {
      dispatch(getBlogsDetails(id));
    },
    showGetInTouchModal: data => {
      dispatch(showModal(GET_IN_TOUCH, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    allBlogsDetails: state.blog.allBlogsDetails,
    loader: state.blog.loader,
    blogDetails: state.blog.blogDetails
  };
};
const BlogDetailsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogDetails)
);

export default BlogDetailsContainer;
