import React, { Component } from "react";
import styles from "./BlogCardForHomePage.css";
import defaultImage from "../Images/b.jpg";
export default class Card extends Component {
  render() {
    return (
      <div
        className={
          window.location.pathname === "/"
            ? styles.homeCardBase
            : styles.cardBase
        }
      >
        <div className={styles.profileHolder}>
          <img
            className={
              window.location.pathname === "/"
                ? styles.homeStoryImage
                : styles.storiesImage
            }
            src={defaultImage}
            alt="no i"
          ></img>
          <div className={styles.overlay}>
            <div className={styles.tagBase}>
              <div className={styles.tagContainer}>
                {this.props &&
                  this.props.tags &&
                  this.props.tags.map(tag => {
                    return <div className={styles.tags}>{tag}</div>;
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={
              window.location.pathname === "/"
                ? styles.homeContentHeading
                : styles.contentHeading
            }
          >
            {this.props.heading}
          </div>
          <div className={styles.username}>
            {this.props.name} <span className={styles.or}> | </span>{" "}
            {this.props.time}
          </div>
        </div>
        {window.location.pathname === "/" ? null : (
          <div className={styles.actionBarConatiner}>
            <div className={styles.actionsHolder}>
              <div className={styles.action}>{this.props.likes}</div>
              <div className={styles.action}>{this.props.comments}</div>
              <div className={styles.action}>{this.props.shared}</div>
            </div>
            <div className={styles.wishlist}>wish</div>
          </div>
        )}
      </div>
    );
  }
}
