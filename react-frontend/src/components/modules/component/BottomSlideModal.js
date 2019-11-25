import React from "react";
import styles from "./BottomSlideModal.css";
import PropTypes from "prop-types";
export default class BottomSlideModal extends React.Component {
  render() {
    return (
      <div
      className={
        this.props.showCrossIcon === false
          ? styles.crossIconHide
          : styles.base
      }
    >
      <div className={styles.content}>{this.props.children}</div>
    </div>
    );
  }
}


BottomSlideModal.defaultProps = {
showCrossIcon:false
};
