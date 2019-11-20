import React, { Component } from "react";
import styles from "./EventCard.css";
import defaultImage from "../Images/b.jpg";
export default class Card extends Component {
  render() {
    return (
      <div className={styles.cardBase}>
        <img
          className={styles.storiesImage}
          src={defaultImage}
          alt="no i"
        ></img>

        <div className={styles.contentContainer}>
          <div className={styles.contentHeading}>{this.props.heading}</div>
          <div className={styles.time}>{this.props.time}</div>
          <div className={styles.date}>{this.props.date}</div>
          <div className={styles.location}>{this.props.location}</div>
        </div>
      </div>
    );
  }
}
