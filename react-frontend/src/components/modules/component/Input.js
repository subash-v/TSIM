import React, { Component } from "react";
import styles from "./ProfileModal.css";

export default class Input extends Component {
  render() {
    return (
      <div>
        <input
          className={styles.inputbox}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
        />
      </div>
    );
  }
}
