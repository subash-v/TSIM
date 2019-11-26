import React, { Component } from "react";
import styles from "./ProfileDetailsInFeed.css";
import profileImage from "../Images/f.jpg";
import Button from "../general/Button";
export default class ProfileDetailsInFeed extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.profileHolder}>
            <div className={styles.profileImageHolder}>
              <img
                src={profileImage}
                width="100%"
                height="100%"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileName}>Pratiksha Gupta</div>
            <div className={styles.designation}>
              Life coach | Interaction Designer
            </div>
            <div className={styles.profileCompletedPercentage}>
              30% Completed
            </div>
            <div className={styles.completedBar}>
              <div
                className={styles.completedLevel}
                style={{ width: "30%" }}
              ></div>
            </div>
            <div className={styles.profileDetailContainer}>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}>345</div>
                <div className={styles.connections}>connections</div>
              </div>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}> 12</div>
                <div className={styles.connections}>Follow</div>
              </div>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}>48 </div>
                <div className={styles.connections}>Post</div>
              </div>
            </div>
            <div className={styles.myProfileButton}>
              <Button
                type="primary"
                backgroundColor={"#E0DEED"}
                fontColor={"#4F439A"}
                borderColor={"#E0DEED"}
                height={40}
                width={136}
                label="MY PROFILE"
                borderRadius={3}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
