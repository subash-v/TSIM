import React from "react";
import styles from "../ForgotPassword/ForgotPassword.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";

// import { Input2 } from "../../core";
export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      country: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <CenteredContent>
          <div className={styles.signUpContainer}>
            <div className={styles.welTxt}>
              <div className={styles.welcomeTxt}>Forgot Password</div>
              <div className={styles.stayConnected}>
                Enter your email address that you used to register. We'll send
                you <br /> an email with a link to reset your password.
              </div>

              <div className={styles.emailAddress}>
                <Input2
                  placeholder="Enter your registered email"
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

              <div className={styles.signUpButton}>LOGIN</div>
              <div></div>
              <div>
                <div className={styles.starInTxt}>Back to login</div>
              </div>
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
