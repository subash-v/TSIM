import React, { Component } from "react";
import styles from "./Milestone.css";

class Milestone extends Component {
  state = {};
  render() {
    return (
      <div className={styles.base}>
        {!this.props.image ? (
          <div className={styles.addprofileImage}></div>
        ) : (
          <div
            className={styles.profileImage}
            style={{ backgroundImage: `${this.props.image}` }}
          ></div>
        )}
        {this.props.title ? (
          <div className={styles.userMilestone}>
            <div className={styles.milestoneTitle}></div>
            <div className={styles.joining}></div>
          </div>
        ) : (
          <div className={styles.milestoneEmptyText}>Add a Milestone</div>
        )}
      </div>
    );
  }
}

export default Milestone;
