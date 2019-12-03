import React, { Component } from "react";
import styles from "./Skills.css";

class Skills extends Component {
  state = {};

  onshowAddSkillModal = () => {
    if (this.props.showAddSkillModal) this.props.showAddSkillModal();
  };

  onshowAddLanguageModal = () => {
    if (this.props.showAddLanguagesModal) this.props.showAddLanguagesModal();
  };

  onshowAddActivityModal = () => {
    if (this.props.showAddActivityModal) this.props.showAddActivityModal();
  };

  onshowAddInterestModal = () => {
    if (this.props.showAddInterestModal) this.props.showAddInterestModal();
  };

  render() {
    return (
      <div className={styles.base}>
        {this.props.title === "Skills" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddSkillModal()}
            ></div>
            <div>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Skill</div>
            </div>
          </React.Fragment>
        )}
        {this.props.title === "Languages" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddLanguageModal()}
            ></div>
            <div>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Languages</div>
            </div>
          </React.Fragment>
        )}
        {this.props.title === "Interests" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddInterestModal()}
            ></div>
            <div>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Interests</div>
            </div>
          </React.Fragment>
        )}
        {this.props.title === "Recent Activity" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddActivityModal()}
            ></div>
            <div>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Activity</div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Skills;
