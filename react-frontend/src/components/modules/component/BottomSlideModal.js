import React from "react";
import styles from "./BottomSlideModal.css";
export default class BottomSlideModal extends React.Component {
  render() {
    return (
      <div style={{ width: this.props.width }} className={styles.crossIconHide}>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
