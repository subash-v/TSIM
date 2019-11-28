import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllBlogs } from "../../../actions/blog.action";
import BlogFeed from "../BlogFeed";
const mapDispatchToProps = dispatch => {
  return {
    getAllBlogs: () => {
      dispatch(getAllBlogs());
    }
  };
};

const mapStateToProps = state => {
  return {
    allBlogsDetails: state.blog.allBlogsDetails
  };
};
const BlogContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogFeed)
);

export default BlogContainer;
