import React from "react";
import styles from "../Settings/ManageMembers.css";
import linkedin from "../../images/prof1.jpeg";

var UserInfo = [
  { name: "Aishverya Agarwal", imgUrl: linkedin, block: true },
  { name: "Aishverya Agarwal", imgUrl: linkedin, block: true },
  { name: "Aishverya Agarwal", imgUrl: linkedin, block: false },
  { name: "Aishverya Agarwal", imgUrl: linkedin, block: true }
];

export default class ManageMembers extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      designation: "",
      location: "",
      summary: "",
      block: false
    };
  }
  unblock = block => {
    this.setState({
      block: !block
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>Manage Members</div>
              <div className={styles.lineSeparator}></div>

              <div className={styles.choose}>Blocked Members</div>
              {UserInfo.map(info => (
                <div className={styles.commonContainer}>
                  <div>
                    <img src={info.imgUrl} className={styles.img} alt="" />

                    <div className={styles.comments}>{info.name}</div>
                  </div>

                  <div>
                    <div
                      onClick={() => this.unblock(this.state.block)}
                      className={styles.unblock}
                    >
                      {this.state.block ? "Block" : "Unblock"}
                    </div>
                  </div>
                </div>
              ))}

              <div className={styles.secondaryLineSeperrator}></div>

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
