import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./SelectEvent.css";
import Avatar from "./Avatar.js";
const eventType = [
  { name: "Explore Events" },
  { name: "Access Resource" },
  { name: "View user feed" },
  { name: "Build your profile" }
];
export default class SelectEventModule extends Component {
  state = { active: "" };
  handleClick = val => {
    this.setState({
      active: val
    });
  };
  render() {
    return (
      <BottomSlideModal>
        <div
          style={{
            width: "741px",
            margin: "auto",
            background: "#fff",
            borderRadius: "5px",
            paddingBottom: " 40px"
          }}
        >
          <div className={styles.title}>SELECT ONE TO START</div>
          <div className={styles.avatcont}>
            {eventType.map(val => {
              return (
                <Avatar
                  onClick={() => this.handleClick(val.name)}
                  selected={this.state.active === val.name ? true : false}
                >
                  {val.name}
                </Avatar>
              );
            })}
          </div>
          <div className={styles.explrcont}>
            Explore
            <span style={{ color: "#AD5DA3" }}> The star in me</span>
          </div>
          <div className={styles.exdesc}>
            Create your best profile, connect with other professionals, access
            curated content, seek or share career guidance and start networking!
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
