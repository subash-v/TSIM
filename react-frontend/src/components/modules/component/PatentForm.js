import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
export default class PatentForm extends Component {
  state = {
    active: "Patent",
    showModal: "PATENT",
    title: "",
    office: "",
    number: "",
    issuedate: "",
    description: ""
  };
  render() {
    return (
      <div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Patent Title*"
            height={50}
            width={674}
            value={this.state.title}
            onChange={val => this.setState({ title: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Patent Office"
            height={50}
            width={674}
            value={this.state.office}
            onChange={val => this.setState({ office: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Patent Number"
            height={50}
            width={674}
            value={this.state.number}
            onChange={val => this.setState({ number: val })}
          />
        </div>

        <div className={styles.datecont}>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="Issue Date"
            height="50px"
            width="674px"
            value={this.state.issuedate}
            onChange={val => this.setState({ issuedate: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.desccont}>
          <InputWithIcon
            src={info}
            theight="47px"
            twidth="672px"
            imageHeight="20px"
            imageWidth="20px"
            type="text"
            placeholder="Description (Mention Patent URL, etc)"
            height="50px"
            width="674px"
            value={this.state.description}
            onChange={val => this.setState({ description: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.buttonCont}>
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
