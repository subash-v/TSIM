import React from "react";
import styles from "../Welcome/Welcome.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";

// import { Input2 } from "../../core";
export default class Welcome extends React.Component {
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
              <div className={styles.welcomeTxt}>Welcome to&nbsp;</div>
              <div className={styles.startInMe}>The star in me,&nbsp;</div>
              <div className={styles.welcomeTxt}>Pratiksha!</div>

              <div className={styles.stayConnected}>You’re almost done.</div>

              <div className={styles.resetPassword}>
                <div className={styles.remPassword}>
                  Thank you for joining. We may reach out to you for additional
                  validation, if required.{" "}
                </div>
              </div>

              <div className={styles.signUpButton}>LET’S GET STARTED!</div>
              <div></div>
              <div></div>
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
