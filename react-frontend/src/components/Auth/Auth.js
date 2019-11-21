import React from "react";
import Login from "../SignIn/SignIn";
import Signup from "../SignUp/SignUp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import styles from "./Login.module.css";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "signup"
    };
  }
  goToLogin = () => {
    this.setState({ show: "login" });
  };
  goToSignup = () => {
    this.setState({ show: "signup" });
  };
  goToForgotPassword = () => {
    this.setState({ show: "forgotPassword" });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.userArea}>
          {this.state.show === "signup" && (
            <Signup goToSignup={this.goToSignup} />
          )}
          {this.state.show === "login" && <Login goToLogin={this.goToLogin} />}
          {this.state.show === "forgotPassword" && (
            <ForgotPassword goToForgotPassword={this.goToForgotPassword} />
          )}
        </div>
      </React.Fragment>
    );
  }
}
