import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./GetInTouchModal.css";

export default class GetInTouchModal extends Component {
  render() {
    return (
      <BottomSlideModal>
        <div className={styles.container}>
          If you have any suggestions or just want to have a chat , write to us
          at
          <div className={styles.feedbackText}>feedback@thestarinme.com</div>
        </div>
      </BottomSlideModal>
    );
  }
}
