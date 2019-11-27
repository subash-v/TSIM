import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
export default class CertificationForm extends Component {
  state = {
    active: "Certification",
    showModal: "CERTIFICATION",
    certificationname: "",
    organization: "",
    certificateid: "",
    certificateurl: "",
    issuedate: "",
    expirydate: ""
  };
  render() {
    return (
      <div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Certification/Course Name*"
            height={50}
            width={674}
            value={this.state.certificationname}
            onChange={val => this.setState({ certificationname: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Issuing Organisation/Institute*"
            height={50}
            width={674}
            value={this.state.organization}
            onChange={val => this.setState({ organization: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Certificate ID"
            height={50}
            width={674}
            value={this.state.certificateid}
            onChange={val => this.setState({ certificateid: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Certificate URL"
            height={50}
            width={674}
            value={this.state.certificateurl}
            onChange={val => this.setState({ certificateurl: val })}
          />
        </div>
        <div className={styles.checkcont}>
          <input className={styles.check} type="checkbox"></input>{" "}
          <div className={styles.checktxt}>No Expiry Date</div>
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
            value={this.state.issuedate}
            onChange={val => this.setState({ issuedate: val })}
          ></InputWithIcon>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="End Date"
            height="50px"
            width="334px"
            value={this.state.expirydate}
            onChange={val => this.setState({ expirydate: val })}
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
