import React, { Component } from "react";
import ProfileImage from "./ProfileImage";
import profile from "../Images/f.jpg";
import styles from "./FeedProfileHolder.css";
export default class FeedProfileHolder extends Component {
  render() {
    return (
      <div className={styles.feedHeaderContainer}>
        <div className={styles.profileImage}>
          <ProfileImage src={profile} />
        </div>
        <div className={styles.profileDetails}>
          <div className={styles.profileName}>The star in me</div>
          <div className={styles.date}>1 Sept 2019 </div>
        </div>
      </div>
    );
  }
}
