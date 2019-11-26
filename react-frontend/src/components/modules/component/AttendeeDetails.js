import React, { Component } from "react";
import styles from "./AttendeeDetails.css";
import ControlInput from "../../../core/ControlInput";
export default class AttendeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobileno: ""
    };
  }
  handleChange = val => {
    this.setState(val);
    this.props.onChange(this.state);
  };
  render() {
    return (
      <div className={styles.attendes}>
        <div className={styles.attendeHeader}>
          {this.props.title}{" "}
          {this.props.subTitle && <span>({this.props.subTitle})</span>}
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            value={this.state.name}
            placeholder={"Name"}
            height={40}
            onChange={val => {
              this.handleChange({ name: val });
            }}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            value={this.state.email}
            placeholder={"Email Address"}
            height={40}
            onChange={val => {
              this.handleChange({ email: val });
            }}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            value={this.state.mobileno}
            placeholder={"Mobile No."}
            height={40}
            onChange={val => {
              this.handleChange({ mobileno: val });
            }}
          />
        </div>
      </div>
    );
  }
}
