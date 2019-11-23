import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import WorkIcon from "./WorkIcon"
import icon1 from "../../../images/Awards-line.svg";
import icon2 from "../../../images/Certification Line.svg";
import icon3 from "../../../images/Education-line.svg";
import icon4 from "../../../images/Job-line.svg";
import Button from "../../../core/Button";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "./WorkExpModal.css";
const IconType=
[
  { name: "Awards" },
  { name: "Certification" },
  { name: "Edcation" },
  { name: "Job" }
];

export default class WorkExpModal extends Component {
  state = { active: "" };
  handleClick = val => {
    this.setState({
      active: val
    });
  };
  render() {
    return (
      <BottomSlideModal width="auto">
        <div className={styles.centermodal}>
          <div className={styles.headerCont}>
            <div className={styles.profileheader}>Edit Work Experience</div>
          </div>
          <div className={styles.brdr}></div>
       <div className={styles.workicon}>  
       {IconType.map(val => {
              return (
                <WorkIcon src={icon1}
                  onClick={() => this.handleClick(val.name)}
                  selected={this.state.active === val.name ? true : false}
                >
                  {val.name}
                </WorkIcon>
              );
            })}</div> 
          <div className={styles.inpcont}>
          <div>
          <Input classname={styles.radio} type="radio" name="type"></Input> 
          <Input type="radio" name="type"></Input>
          </div>
            <Input className={styles.input} type="text" placeholder="Designation/Job Position*"></Input>
            <Input className={styles.Input} type="text" placeholder="
Organisation/Company*"></Input>
<Input className={styles.Input} type="text" placeholder="
Industry*"></Input>
<Input className={styles.Input} type="text" placeholder="
Location"></Input>

            <div className={styles.label}>Professional Summary</div>
            <div>
              <Textarea
                placeholder="(For ex: A Human resources leader with over 18 years of experience across Talent management, HR Policy and Recruitment)"
                rows={"3"}
              />
            </div>
          </div>
          <div className={styles.buttonCont}>
            <Button
              width="160px"
              backgroundColor="transparent"
              color="#4F439A"
              label="Cancel"
            ></Button>
            <Button
              width="160px"
              backgroundColor="#E0DEED"
              color="#4F439A"
              label="Save Changes"
            ></Button>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
