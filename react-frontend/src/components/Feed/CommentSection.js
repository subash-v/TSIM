import React, { Component } from "react";
import styles from "./FeedCard.css";
import profile from "../Images/f.jpg";
import imageattach from "../../images/Image_add_blue.svg";
import CommentText from "./CommentText";

export default class CommentSection extends Component {
  render() {
    return (
      <div className={styles.commentcont}>
        <div className={styles.commsec}>
          <div className={styles.profilepicture}>
            <img
              className={styles.commentprofile}
              src={profile}
              height="35px"
              width="35px"
            />
          </div>
          <CommentText
            src={imageattach}
            imageHeight="16px"
            imageWidth="16px"
            placeholder="Type your Comment"
          />
        </div>
      </div>
    );
  }
}
