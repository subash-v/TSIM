import * as eventAction from "../actions/blog.action";

const blog = (
  state = {
    allBlogsDetails: null,
    status: null,
    error: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case eventAction.GET_ALL_BLOGS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.GET_ALL_BLOGS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        allBlogsDetails: action.blogsDetails
      });
    case eventAction.GET_ALL_BLOGS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default blog;
