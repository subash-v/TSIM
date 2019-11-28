import React from "react";
import styles from "../SignIn/SignIn.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";
import Back from "../../images/Back.svg";

// import { Input2 } from "../../core";
export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleLogin = () => {
    if (this.props.getLogin) {
      this.props.getLogin(this.state);
    }
  };
  render() {
    return (
      <React.Fragment>
        <CenteredContent>
          <div onClick={this.props.closeModal} className={styles.backCircle}>
            <img src={Back} className={styles.backImg} alt="" />
          </div>

          <div className={styles.signInContainer}>
            <div className={styles.welTxt}>
              <div className={styles.welcomeTxt}>Welcome Back</div>
              <div className={styles.stayConnected}>
                Stay connected, be informed and keep inspiring.
              </div>
              <div className={styles.inputBox}>
                <Input2
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={val => this.setState({ email: val })}
                  textStyle={{ fontSize: 14 }}
                  height={50}
                  boxy={true}
                  borderColor={"#7f7f7f"}
                  borderBottom={"#7f7f7f"}
                />
              </div>
              <div className={styles.inputBox}>
                <Input2
                  placeholder="Password"
                  value={this.state.password}
                  onChange={val => this.setState({ password: val })}
                  textStyle={{ fontSize: 14 }}
                  height={50}
                  boxy={true}
                  borderColor={"#7f7f7f"}
                  borderBottom={"#7f7f7f"}
                  // // onFocus={() => {
                  // //   this.handleOnFocusInput();
                  // }}
                />
              </div>
              <div className={styles.passwordBlock}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="Remember Password"
                  value="true"
                ></input>
                <div className={styles.remPassword}>Remember password</div>
                <div
                  className={styles.forgotPassword}
                  onClick={() => this.props.showForgotPassword(this.props)}
                >
                  Forgot password?
                </div>
              </div>

              <div
                className={styles.loginButton}
                onClick={() => this.handleLogin()}
              >
                LOGIN
              </div>
              <div></div>
              <div>
                <div className={styles.starInTxt}>No Account?&nbsp;&nbsp;</div>

                <div
                  className={styles.signUpNow}
                  onClick={() => {
                    this.props.showSignUpModal();
                  }}
                >
                  Sign up now
                </div>
              </div>
              <div className={styles.loginWith}>Login with</div>
            </div>
            <img src={linkedin} className={styles.img} alt="" />
            <img src={Facebook} className={styles.img} alt="" />
            <img src={linkedin} className={styles.img} alt="" />
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
