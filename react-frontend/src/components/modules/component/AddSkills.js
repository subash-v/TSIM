import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./AddSkills.css";
import Input2 from "../../../core/Input2";
import { render } from "react-dom";
import Select from "react-select";
import Button from "../../../core/Button";
import { tag } from "postcss-selector-parser";
import TagsInput from "../../general/TagsInput";

// const options = [
//   { value: "design", label: "Design Management" },
//   { value: "strawberry", label: "Photography" },
//   { value: "story", label: "StoryBoarding" },
//   { value: "sketching", label: "Sketching" }
// ];

export default class AddSkill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      totalSkills: []
    };
  }

  addSkills = () => {
    let skillData = this.state.totalSkills;
    if (this.state.skills.length !== 0) {
      skillData.push(this.state.skills);
      this.setState({ totalSkills: skillData, skills: "" });
    }
  };

  onSkillChange(val) {
    this.setState({ skills: val });
  }

  render() {
    return (
      <BottomSlideModal width="50%">
        <div className={styles.base}>
          <React.Fragment>
            <div className={styles.title}>Add Skills</div>
            <div className={styles.selectSection}>
              <Input2
                placeholder="Add Skills"
                value={this.state.skills}
                onChange={val => this.onSkillChange(val)}
                textStyle={{ fontSize: 14 }}
                height={50}
              ></Input2>
              {
                <div
                  className={styles.addButton}
                  onClick={() => this.addSkills()}
                ></div>
              }
            </div>
            <div className={styles.filtered}>
              <TagsInput value={this.state.totalSkills} />
            </div>
            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                color={"#fff"}
                backgroundColor={"#4F439A"}
                height={50}
                width={"100%"}
                label="UPLOAD"
                borderRadius={3}
              />
            </div>
          </React.Fragment>
        </div>
      </BottomSlideModal>
    );
  }
}
