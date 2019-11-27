import React, { Component } from "react";
import ControlInput from "../../../core/ControlInput";
import styles from "./WorkExpModal.css";
import InputWithIcon from "./InputWithIcon";
import Input from "./Input";
import info from "../../../images/Info Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import WorkForm from "./WorkForm";
import VolunteerForm from "./VounteerForm";
const formType = [{ name: "Work" }, { name: "Volunteer" }];
export default class Jobline extends Component {
  state = {
    active: "Work",
    showModal: "WORK",
    job: "",
    organization: "",
    industry: "",
    location: "",
    startdate: "",
    enddate: "",
    description: ""
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
        {this.state.showModal === "WORK" && (
          <div>
            <WorkForm />
          </div>
        )}
        {this.state.showModal === "VOLUNTEER" && (
          <div>
            <VolunteerForm />
          </div>
        )}
      </div>
    );
  }
}
