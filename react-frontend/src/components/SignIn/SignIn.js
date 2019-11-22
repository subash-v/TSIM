import React from "react";
import styles from "../SignIn/SignIn.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";

// import { Input2 } from "../../core";
export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      country: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        {/* <CenteredContent> */}
        <div className={styles.signUpContainer}>
          <div className={styles.welTxt}>
            <div className={styles.welcomeTxt}>Welcome Back</div>
            <div className={styles.stayConnected}>
              Stay connected, be informed and keep inspiring.
            </div>
            <div className={styles.emailAddress}>
              <Input2
                placeholder="Email Address"
                value={this.state.country}
                onChange={val => this.onChange(val)}
                textStyle={{ fontSize: 14 }}
                height={50}
                boxy={true}
                borderColor={"#7f7f7f"}
                borderBottom={"#7f7f7f"}
              />
            </div>
            <div className={styles.emailAddress}>
              <Input2
                placeholder="Password"
                value={this.state.country}
                onChange={val => this.onChange(val)}
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
            <div className={styles.resetPassword}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="Remember Password"
                value="true"
              ></input>
              <div className={styles.remPassword}>Remember password</div>
              <div className={styles.forgotPassword}>Forgot password?</div>
            </div>

            <div className={styles.signUpButton}>LOGIN</div>
            <div></div>
            <div>
              <div className={styles.starInTxt}>No Account?&nbsp;&nbsp;</div>

              <div className={styles.logInTxt}>Sign up now</div>
            </div>
            <div className={styles.loginWith}>Login with</div>
          </div>
          <img src={linkedin} className={styles.img} alt="" />
          <img src={Facebook} className={styles.img} alt="" />
          <img src={linkedin} className={styles.img} alt="" />
        </div>
        {/* </CenteredContent> */}
      </React.Fragment>
    );
  }
}
