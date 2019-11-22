import React, { Component } from "react";
import styles from "./Skills.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.addButton}></div>
        {/* {this.props.skills < 10 ? ( */}
        <div>
          <div>{this.props.skills}</div>
          <div className={styles.addSkill}>Add Skill</div>
        </div>
        {/* ) : (
          this.props.skills
        )} */}
      </div>
    );
  }
}

export default Skills;
