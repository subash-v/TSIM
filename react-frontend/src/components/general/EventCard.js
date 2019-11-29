import React, { Component } from "react";
import styles from "./EventCard.css";
import defaultImage from "../Images/b.jpg";
export default class Card extends Component {
  render() {
    return (
      <div className={styles.cardBase}>
        <div className={styles.imageBase}>
          <img
            className={styles.storiesImage}
            src={this.props.image ? this.props.image : defaultImage}
            alt="no i"
          ></img>
          <div className={styles.eventLabelContainer}>
            {this.props &&
              this.props.eventLabels &&
              this.props.eventLabels.map(label => {
                return <div className={styles.tags}>{label}</div>;
              })}
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={
              window.location.pathname === "/"
                ? styles.homeheadingtext
                : styles.contentHeading
            }
          >
            {this.props.heading}
          </div>
          <div className={styles.time}>
            <div className={styles.timeImage}></div>
            {this.props.time}
          </div>
          <div className={styles.date}>
            <div className={styles.dateImage}></div>
            {this.props.date}
          </div>
          <div className={styles.location}>
            <div
              className={
                window.location.pathname === "/"
                  ? styles.homeLocationImage
                  : styles.locationImage
              }
            ></div>
            <div
              className={
                window.location.pathname === "/"
                  ? styles.homeLocationText
                  : styles.locationText
              }
            >
              {this.props.location}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
