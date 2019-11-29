import React, { Component } from "react";
import styles from "./SignUpBar.css";
import SearchAndUpdate from "../general/SearchAndUpdate";
import signUpImage from "../Images/Signupbanner.svg";
import Input2 from "../../core/Input2";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
export default class SignUpBar extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <div className={styles.signupHolder}>
        <div className={styles.signUpContainer}>
          <div className={styles.signup}>
            <DesktopOnly>
              <div
                className={styles.signupText}
                style={{ fontSize: this.props.fontSize }}
              >
                {this.props.heading}
              </div>
            </DesktopOnly>
            <MobileOnly>
              <div className={styles.signupText}>{this.props.heading}</div>
            </MobileOnly>
            <div className={styles.subText}>{this.props.content}</div>
            {this.props.content2 && (
              <div className={styles.subText}>
                Sign up to get access to interesting stories on the platform
              </div>
            )}
            <div className={styles.inputBase}>
              <div className={styles.inputContainer}>
                <div className={styles.inputWithButton}>
                  <div className={styles.inputHolder}>
                    <div className={styles.input}>
                      <Input2
                        placeholder="Enter your Email Address"
                        value={this.state.email}
                        onChange={val => this.onChange(val)}
                        textStyle={{ fontSize: 14 }}
                        height={50}
                        boxy={true}
                        borderColor={"#fff"}
                        borderBottom={"#fff"}
                        // // onFocus={() => {
                        // //   this.handleOnFocusInput();
                        // }}
                      />
                    </div>
                  </div>
                  <div className={styles.buttonHolder}>
                    <div className={styles.button}>
                      {" "}
                      {this.props.buttonText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageHolder}>
            <img
              className={styles.signUpImage}
              src={signUpImage}
              alt="no i"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
SignUpBar.defaultProps = {
  heading: "Sign up to read more stories",
  content: "It won’t take long!",
  content2: true,
  buttonText: "GET STARTED"
};
