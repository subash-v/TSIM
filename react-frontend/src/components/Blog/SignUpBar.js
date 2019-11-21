import React, { Component } from "react";
import styles from "./SignUpBar.css";
import SearchAndUpdate from "../general/SearchAndUpdate";
import signUpImage from "../Images/Signupbanner.svg";
import Input2 from "../../core/Input2";
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
            <div className={styles.signupText}>
              Sign up to read more stories
            </div>

            <div className={styles.subText}>It won’t take long!</div>
            <div className={styles.subText}>
              Sign up to get access to interesting stories on the platform
            </div>
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
                    <div className={styles.button}> {"GET STARTED"}</div>
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
