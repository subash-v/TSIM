import React from "react";
import styles from "../Settings/PrivacySettings.css";
import Input2 from "../../core/Input2";

export default class PrivacySettings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      designation: "",
      location: "",
      summary: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>Privacy Settings</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.choose}>
                Choose how your profile appears to non-logged in members
              </div>

              <div className={styles.commonContainer}>
                <div>
                  <div className={styles.title}>PROFILE PICTURE</div>
                  <div className={styles.subTitle}>
                    You can allow non logged in users to view your profile
                    picture
                  </div>
                </div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.secondaryLineSeperrator}></div>

              <div className={styles.buttonContainer}>
                <div className={styles.cancelButton}>CANCEL</div>
                <div className={styles.saveButton}>SAVE CHANGES</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
