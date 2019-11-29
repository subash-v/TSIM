import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllBlogs, getBlogsDetails } from "../../../actions/blog.action";
import BlogDetails from "../BlogDetails/BlogDetails";
const mapDispatchToProps = dispatch => {
  return {
    getAllBlogs: () => {
      dispatch(getAllBlogs());
    },
    getBlogsDetails: id => {
      dispatch(getBlogsDetails(id));
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
