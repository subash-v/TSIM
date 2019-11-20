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
            src={defaultImage}
            alt="no i"
          ></img>
          <div className={styles.tags}>MANAGEMENT</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentHeading}>{this.props.heading}</div>
          <div className={styles.time}>
            <div className={styles.timeImage}></div>
            {this.props.time}
          </div>
          <div className={styles.date}>
            <div className={styles.dateImage}></div>
            {this.props.date}
          </div>
          <div className={styles.location}>
            <div className={styles.locationImage}></div>
            {this.props.location}
          </div>
        </div>
      </div>
    );
  }
}
