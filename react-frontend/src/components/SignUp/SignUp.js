import React from "react";
import styles from "../SignUp/SignUp.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";
import Back from "../../images/Back.svg";
// import { Input2 } from "../../core";
export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      country: "",
      email: "",
      firstName: "",
      lastName: "",
      newPassword: "",
      confirmPassword: ""
    };
  }
  render() {
    return (
      <React.Fragment>
        <CenteredContent>
          <div onClick={this.props.closeModal} className={styles.backCircle}>
            <img src={Back} className={styles.backImg} alt="" />
          </div>
          <div className={styles.button}></div>
          <div className={styles.signUpContainer}>
            <div className={styles.welTxt}>
              <div className={styles.joinTxt}>Join</div>
              <div
                className={styles.starTxt}
                onClick={() => this.props.showTour(this.props)}
              >
                The star in me
              </div>
              <div className={styles.welTxt}>
                <div className={styles.joinTxt}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Gender"
                    value="Female"
                  ></input>
                </div>
                <div className={styles.femaleCheck}>Yes, I am female</div>
              </div>
              <div className={styles.countrySelection}>
                <Input2
                  placeholder="Select your country"
                  value={this.state.country}
                  onChange={val => this.setState({ country: val })}
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

              <div className={styles.socialContainer}>
                <div className={styles.linkedinNfbContainer}>
                  <img src={linkedin} className={styles.img} alt="" />
                  <div className={styles.linkedinTxt}>SignUp with LinkedIn</div>
                </div>
                <div className={styles.linkedinNfbContainer}>
                  <img src={Facebook} className={styles.img} alt="" />
                  <div className={styles.linkedinTxt}>SignUp with LinkedIn</div>
                </div>
              </div>

              <fieldset>
                <legend>OR</legend>
              </fieldset>
              {/* 
              <div className={styles.divideBase}>
                <div className={styles.dividingLine} />
                <div className={styles.dividingLineMain}>OR</div>
              </div> */}

              <div className={styles.nameContainer}>
                <div className={styles.firstName}>
                  <Input2
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={val => this.setState({ firstName: val })}
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
                <div className={styles.lastName}>
                  <Input2
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={val => this.setState({ lastName: val })}
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
                  // // onFocus={() => {
                  // //   this.handleOnFocusInput();
                  // }}
                />
              </div>
              <div className={styles.inputBox}>
                <Input2
                  placeholder="New Password (Min 6 Characters)"
                  value={this.state.newPassword}
                  onChange={val => this.setState({ newPassword: val })}
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
              <div className={styles.inputBox}>
                <Input2
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={val => this.setState({ confirmPassword: val })}
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
              <div className={styles.minChar}>
                <div className={styles.circle}></div>
                <div className={styles.circleTxt}>Atleast 6 characters</div>
              </div>
              <div className={styles.termsNcondition}>
                By signing up, I agree to the terms and conditions.
              </div>
              <div
                className={styles.signUpButton}
                onClick={() => this.props.showTour(this.props)}
              >
                SIGN UP NOW
              </div>
              <div></div>
              <div>
                <div className={styles.starInTxt}>
                  Already have an account on&nbsp;
                </div>
                <div className={styles.accountTxt}>The star in me?&nbsp;</div>

                <div
                  className={styles.logInTxt}
                  onClick={() => this.props.showLoginModal()}
                >
                  Log In
                </div>
              </div>
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
