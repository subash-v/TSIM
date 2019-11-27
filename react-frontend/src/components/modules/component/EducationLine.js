import React, { Component } from "react";
import ControlInput from "../../../core/ControlInput";
import styles from "./Education.css";
import InputWithIcon from "./InputWithIcon";
import Input from "./Input";
import info from "../../../images/Info Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
export default class EducationLine extends Component {
  state = {
    active: "EDUCATION",
    showModal: "EDUCATION",
    school: "",
    degree: "",
    fieldofstudy: "",
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
    return (
      <div className={styles.inpcont}>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="School/College/University"
            height={50}
            width={674}
            value={this.state.school}
            onChange={val => this.setState({ school: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Degree*"
            height={50}
            width={674}
            value={this.state.degree}
            onChange={val => this.setState({ degree: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Field of Study*"
            height={50}
            width={674}
            value={this.state.fieldofstudy}
            onChange={val => this.setState({ fieldofstudy: val })}
          />
        </div>

        <div className={styles.datecont}>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="Start Date"
            height="50px"
            width="334px"
            value={this.state.startdate}
            onChange={val => this.setState({ startdate: val })}
          ></InputWithIcon>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="End Date"
            height="50px"
            width="334px"
            value={this.state.enddate}
            onChange={val => this.setState({ enddate: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.checkcont}>
          <input className={styles.check} type="checkbox"></input>{" "}
          <div className={styles.checktxt}>Still Studying</div>
        </div>

        <InputWithIcon
          src={info}
          theight="47px"
          twidth="672px"
          imageHeight="20px"
          imageWidth="20px"
          type="text"
          placeholder="Description*"
          height="50px"
          width="674px"
          value={this.state.description}
          onChange={val => this.setState({ description: val })}
        ></InputWithIcon>
        <div className={styles.buttonCont}>
          <div className={styles.uploadcont}>
            {" "}
            <ButtonWithIcon></ButtonWithIcon>
            <div style={{ padding: "10px" }}>Upto 3 files</div>
          </div>
          <Button
            width="674px"
            height="50px"
            backgroundColor="#4F439A"
            color="white"
            label="Update"
          ></Button>
        </div>
      </div>
    );
  }
}
