import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./RegisterDetailsModule.css";
export default class RegisterDetailsModule extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.modalBase}>data</div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}
