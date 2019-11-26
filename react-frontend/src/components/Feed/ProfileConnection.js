import React, { Component } from "react";
import profileImage from "../Images/f.jpg";
import styles from "./ProfileConnection.css";
import Button from "../general/Button";
import coverImage from "../Images/b.jpg";
export default class ProfileConnection extends Component {
  render() {
    return (
      <div className={styles.connectProfileContainer}>
        <div className={styles.coverImageForConnectionProfile}>
          <img
            src={coverImage}
            width="100%"
            height="100%"
            className={styles.image}
          />
        </div>
        <div className={styles.connectProfileHolder}>
          <div className={styles.connectProfileImageHolder}>
            <img
              src={profileImage}
              width="100%"
              height="100%"
              className={styles.connectProfileImage}
            />
          </div>
          <div className={styles.profileName}>Akarshika Das</div>
        </div>
        <div className={styles.connectProfileDetailsContainer}>
          <div className={styles.connectProfileDetails}>
            <div className={styles.connectProfileDesignations}>
              Life Coach | Product Designer
            </div>
            <div className={styles.connectProfileTags}>
              Product Management{" "}
              <span className={styles.connectProfileTagsMoreThenOne}>+2</span>
            </div>
          </div>
          <div className={styles.connectionButton}>
            <Button
              type="primary"
              backgroundColor={"#E0DEED"}
              fontColor={"#4F439A"}
              borderColor={"#E0DEED"}
              height={30}
              width={90}
              label="CONNECT"
              borderRadius={3}
            />
          </div>
        </div>
      </div>
    );
  }
}
