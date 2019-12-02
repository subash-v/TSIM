import React, { Component } from "react";
import styles from "./PollingResult.css";
import { pollingResult } from './PollingResultWithImage/PollingResultWithImage'
export default class PollingResult extends Component {
  render() {
    return (
      <React.Fragment>
        {pollingResult.map((m) => {
          return (
            <div className={styles.pollingContainer}>
              <div className={styles.pollingTag}>
                <div className={styles.pollingLabel}>{m.option}</div>
              </div>
              <div className={styles.pollBar}>
                <div className={styles.pollQuestionContainer}>
                  <div className={styles.pollQuestion} >
                    {m.question}
                  </div>
                  <div className={styles.pollPercentage}>{m.percentage}%</div>
                </div>
                <div className={styles.pollLevel} style={{ width: m.percentage + "%" }}></div>
              </div>
            </div>
          )
        })}

      </React.Fragment>
    );
  }
}
