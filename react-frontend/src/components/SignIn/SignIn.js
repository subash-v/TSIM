import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

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
  render() {
    return (
      <React.Fragment>
        <BreakpointProvider>
          <Breakpoint small down>
            <CenteredContent>
              <div
                onClick={this.props.closeModal}
                className={styles.MobileBackCircle}
              >
                <img src={Back} className={styles.MobileBackImg} alt="" />
              </div>

              <div className={styles.MobileSignInContainer}>
                <div className={styles.welTxt}>
                  <div className={styles.welcomeTxt}>Welcome Back</div>
                  <div className={styles.stayConnected}>
                    Stay connected, be informed and keep inspiring.
                  </div>
                  <div className={styles.MobileInputBox}>
                    <Input2
                      className={styles.MobileInputBox}
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
                  <div className={styles.MobileInputBox}>
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
                      className={styles.MobileforgotPassword}
                      onClick={() => this.props.showForgotPassword(this.props)}
                    >
                      Forgot password?
                    </div>
                  </div>

                  <div className={styles.loginButton}>LOGIN</div>
                  <div></div>
                  <div>
                    <div className={styles.starInTxt}>
                      No Account?&nbsp;&nbsp;
                    </div>

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
          </Breakpoint>

          <Breakpoint large up>
            {" "}
            <CenteredContent>
              <div
                onClick={this.props.closeModal}
                className={styles.backCircle}
              >
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

                  <div className={styles.loginButton}>LOGIN</div>
                  <div></div>
                  <div>
                    <div className={styles.starInTxt}>
                      No Account?&nbsp;&nbsp;
                    </div>

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
          </Breakpoint>
        </BreakpointProvider>
      </React.Fragment>
    );
  }
}
