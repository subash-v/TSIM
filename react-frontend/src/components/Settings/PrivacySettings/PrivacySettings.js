import React from "react";
import styles from "../PrivacySettings/PrivacySettings.css";
import Input2 from "../../../core/Input2";


export default class PrivacySettings extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      designation: "",
      location: ""
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
              <div className={styles.subTitle}>Choose how your profile appears to non-logged in members</div>
              <div className={styles.lineSeparator}></div>

              <div>
                  <div>
                  <div>PROFILE PICTURE</div>
                  <button/>
                  </div>

                  <div>You can allow non logged in users to view your profile picture</div>

              </div>

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

