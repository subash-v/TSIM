import React, { Component } from "react";
import styles from "./RecommendedConnection.css";
import profileImage from "../Images/f.jpg";
import Button from "../general/Button";
export default class RecommendedConnection extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.profileHolder}>
            <div className={styles.profilePic}>
              <img
                src={profileImage}
                width="100%"
                height="100%"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.profileName}>Meghna Sharma</div>
              <div className={styles.profileDesignation}>
                Interaction Designer
              </div>
              <div className={styles.profileAddress}>Bengaluru, India</div>
            </div>
          </div>
          <div className={styles.mutualConnectionInfoDetails}>
            <div className={styles.mutualConnectionImages}>
              <img src={profileImage} className={styles.dot} alt={"profile"} />
              <img src={profileImage} className={styles.dot} alt={"profile"} />
              {/* <img src={profileImage} className={styles.dot} alt={"profile"} />
          <span className={styles.more}>+26</span> */}
              <div className={styles.mutualConnectionInfo}>
                2 Mutual Connections
              </div>
            </div>
            <div className={styles.buttonContainer}>
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
      </div>
    );
  }
}
