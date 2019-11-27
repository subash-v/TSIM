import React, { Component } from "react";
import ControlInput from "../../../core/ControlInput";
import styles from "./Awards.css";
import InputWithIcon from "./InputWithIcon";
import Input from "./Input";
import info from "../../../images/Info Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
export default class Awards extends Component {
  state = {
    active: "AWARDS",
    showModal: "AWARDS",
    awardtitle: "",
    issuer: "",
    eventname: "",
    issuedate: "",
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
            placeholder="Honor/Award Title*"
            height={50}
            width={674}
            value={this.state.awardtitle}
            onChange={val => this.setState({ awardtitle: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Issuer"
            height={50}
            width={674}
            value={this.state.issuer}
            onChange={val => this.setState({ issuer: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Event Name"
            height={50}
            width={674}
            value={this.state.eventname}
            onChange={val => this.setState({ eventname: val })}
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
            placeholder="Description*"
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
