import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import WorkIcon from "./WorkIcon";
import awardIcon from "../../../images/Awards-line.svg";
import awardIconFill from "../../../images/Awards-fill.svg";
import certificateIcon from "../../../images/Certification Line.svg";
import certificateIconFill from "../../../images/Certification-Fill .svg";
import educationIcon from "../../../images/Education-line.svg";
import educationIconFill from "../../../images/Education-line-fill.svg";
import jobIconFill from "../../../images/job-line-blue-fill.svg";
import jobIcon from "../../../images/Job-line.svg";
import Button from "../../../core/Button";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "./WorkExpModal.css";
import ButtonWithIcon from "./ButtonWithIcon";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ControlInput from "../../../core/ControlInput";
import Jobline from "./Jobline";
import EducationLine from "./EducationLine.js";
import Certification from "./Certification";
import Awards from "./Awards";

const IconType = [
  { name: "JOB", image: jobIcon, image1: jobIconFill },
  { name: "Education", image: educationIcon, image1: educationIconFill },
  {
    name: "Certification",
    image: certificateIcon,
    image1: certificateIconFill
  },
  { name: "Awards", image: awardIcon, image1: awardIconFill }
];

export default class WorkExpModal extends Component {
  state = {
    active: "JOB",
    showModal: "JOB",
    job: "",
    organization: "",
    industry: "",
    location: "",
    startdate: "",
    enddate: "",
    description: ""
  };
  handleClick = val => {
    console.log(val.toUpperCase());
    console.log(val);
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };
  render() {
    console.log(this.state.showModal, this.state.description);
    return (
      <BottomSlideModal width="auto">
        <div className={styles.centermodal}>
          <div className={styles.headerCont}>
            <div className={styles.workheader}>
              Add{" "}
              {this.state.active === "JOB"
                ? "Work Experience"
                : this.state.active && this.state.active === "Awards"
                ? "Honors & Awards"
                : this.state.active}
            </div>
          </div>
          <div className={styles.workicon}>
            {IconType.map(val => {
              return (
                <WorkIcon
                  src={this.state.active === val.name ? val.image1 : val.image}
                  height="50px"
                  width="50px"
                  onClick={() => this.handleClick(val.name)}
                  selected={this.state.active === val.name ? true : false}
                ></WorkIcon>
              );
            })}
          </div>
          {this.state.showModal === "JOB" && (
            <div>
              <Jobline />
            </div>
          )}
          {this.state.showModal === "EDUCATION" && (
            <div>
              <EducationLine />
            </div>
          )}
          {this.state.showModal === "CERTIFICATION" && (
            <div>
              <Certification />
            </div>
          )}
          {this.state.showModal === "AWARDS" && (
            <div>
              <Awards />
            </div>
          )}
        </div>
      </BottomSlideModal>
    );
  }
}
