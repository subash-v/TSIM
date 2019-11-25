import React from "react";
import styles from "../ContactInfo/ContactInfo.css";
import Input2 from "../../../core/Input2";


export default class ContactInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      phNumner: "",
      email: "",
      linkedInLink: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>Contact Info</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.commonContainer}>
                <div className={styles.label}>Phone Number</div>
                <div>
                  <Input2
                    placeholder="+919876543210"
                    value={this.state.phNumner}
                    onChange={val => this.setState({phNumner:val})}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                    // borderBottom={"#7f7f7f"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>
              </div>
              <div className={styles.commonContainer}>
                <div className={styles.label}>Email Address</div>
                <div>
                  <Input2
                    placeholder="pratiksha.g@xelpmoc.in"
                    value={this.state.email}
                    onChange={val => this.setState({email:val})}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                    // borderBottom={"#7f7f7f"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>
              </div>
              <div className={styles.commonContainer}>
                <div className={styles.label}>LinkedIn Profile</div>
                <div>
                  <Input2
                    placeholder="www.linkedin.com/pratikshagupta"
                    value={this.state.linkedInLink}
                    onChange={val => this.setState({linkedInLink:val})}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                    // borderBottom={"#7f7f7f"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>
              </div>
  
              <div className={styles.buttonContainer}>
                <div className={styles.cancelButton}>CANCEL</div>
                <div className={styles.saveButton}>SAVE CHANGES</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }

}

