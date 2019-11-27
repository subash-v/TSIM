import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
export default class VolunteerForm extends Component {
  state = {
    active: "VOLUNTEER",
    showModal: "VOLUNTEER",
    organization: "",
    volunteerrole: "",
    cause: "",
    location: "",
    startdate: "",
    enddate: "",
    description: "",
    files: []
  };
  handleChange = files => {
    console.log(files.length);
    if (this.state.files.length + files.length <= 3) {
      let existingFile = this.state.files;
      existingFile.push(...files);
      // files.map(file => {
      //   console.log(file);
      // });
      console.log("Existing", existingFile);
      this.setState({ files: existingFile });
    }
  };
  handleClick = files => {
    console.log(files);
    let existingFile = this.state.files;
    var index = existingFile.findIndex(val => {
      return val.name == files;
    });
    existingFile.splice(index, 1);
    this.setState({ files: existingFile });
  };
  render() {
    return (
      <div>
        {" "}
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Organisation/Company*"
            height={50}
            width={674}
            value={this.state.organization}
            onChange={val => this.setState({ organization: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Volunteer Role"
            height={50}
            width={674}
            value={this.state.volunteerrole}
            onChange={val => this.setState({ volunteerrole: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Cause"
            height={50}
            width={674}
            value={this.state.cause}
            onChange={val => this.setState({ cause: val })}
          />
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            type="text"
            placeholder="Location*"
            height={50}
            width={674}
            value={this.state.location}
            onChange={val => this.setState({ location: val })}
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
          <div className={styles.checktxt}>Currently Working</div>
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
            <ButtonWithIcon
              onChange={event => {
                console.log("Button", event.target.files);
                this.handleChange(event.target.files);
              }}
            ></ButtonWithIcon>
            <div style={{ padding: "10px" }}>
              {this.state.files.map(val => (
                <div>
                  {val.name}
                  <button
                    onClick={() => {
                      this.handleClick(val.name);
                    }}
                  >
                    remove
                  </button>
                </div>
              ))}
              Upto 3 files
            </div>
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
