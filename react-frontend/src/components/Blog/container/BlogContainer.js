import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllBlogs, getBlogsDetails } from "../../../actions/blog.action";
import BlogFeed from "../BlogFeed";
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
const BlogContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogFeed)
);

export default BlogContainer;
