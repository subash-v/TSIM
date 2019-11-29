import React, { Component } from "react";
import styles from "./PollingResult.css";
export default class PollingResult extends Component {
  render() {
    return (
      <div className={styles.pollingContainer}>
        <div className={styles.pollingTag}>
          <div className={styles.pollingLabel}>A</div>
        </div>
        <div className={styles.pollBar}>
          <div className={styles.pollQuestionContainer}>
            <div className={styles.pollQuestion}>
              Wouldn't it be amazing to access a unique profile builder
            </div>
            <div className={styles.pollPercentage}>30%</div>
          </div>
          <div className={styles.pollLevel} style={{ width: "30%" }}></div>
        </div>
      </div>
    );
  }
}
