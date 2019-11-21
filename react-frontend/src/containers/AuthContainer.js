import React from "react";
import Auth from "../components/Auth/Auth";
import { withRouter } from "react-router";

class AuthWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      referral: null
    };
  }
  render() {
    return (
      <React.Fragment>
        <Auth inModal={this.props.inModal} />
      </React.Fragment>
    );
  }
}

export default withRouter(AuthWithState);
