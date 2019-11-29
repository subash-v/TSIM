import React, { Component } from "react";
import ControlInput from "../../../core/ControlInput";
import styles from "./Certification.css";
import InputWithIcon from "./InputWithIcon";
import Input from "./Input";
import info from "../../../images/Info_Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import CertificationForm from "./CertificationForm";
import PublicationForm from "./PublicationForm";
import PatentForm from "./PatentForm";
const formType = [
  { name: "Certification" },
  { name: "Publication" },
  { name: "Patent" }
];
export default class Certification extends Component {
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

  handleChange = val => {
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };
  render() {
    return (
      <div className={styles.inpcont}>
        <div className={styles.radioco}>
          {formType.map(val => {
            return (
              <div className={styles.radiocont}>
                <Input
                  type="radio"
                  onChange={() => this.handleChange(val.name)}
                  value={val.name}
                  name="form"
                  checked={this.state.active === val.name ? "checked" : ""}
                ></Input>
                <label>{val.name}</label>
              </div>
            );
          })}
        </div>
        {this.state.showModal === "CERTIFICATION" && (
          <div>
            <CertificationForm />
          </div>
        )}
        {this.state.showModal === "PUBLICATION" && (
          <div>
            <PublicationForm />
          </div>
        )}
        {this.state.showModal === "PATENT" && (
          <div>
            <PatentForm />
          </div>
        )}
      </div>
    );
  }
}
