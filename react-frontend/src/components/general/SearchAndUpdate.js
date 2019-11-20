import React from "react";
import PropTypes from "prop-types";
import ControlInput from "../../general/ControlInput.js";
import UnderLinedButton from "../../general/UnderLinedButton.js";
import styles from "./SearchAndUpdate.css";
import Button from "../../general/Button.js";
export default class SearchAndUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: this.props.value,
      errorMessage: null
    };
  }
  getValue(pinCode) {
    const pin = pinCode.replace(/\D/g, "");
    if (pinCode.length <= 6) {
      this.setState({ pinCode: pin });
    }
    if (this.props.onChange) {
      this.props.onChange(pin);
    }
  }
  handleOnFocusInput(event) {
    if (this.props.onFocusInput) {
      this.props.onFocusInput(event);
    }
  }

  handleBlurInput() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.onUpdate();
  }

  handleKeyUp(event) {
    if (event.key === "Go" || event.key === "Enter") {
      this.onUpdate();
    }
  }
  onUpdate() {}
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.inputSearchHolder}>
          <div className={styles.inputHolder}>{this.props.placeholder}</div>
          <div className={styles.buttonHolder}>
            <div className={styles.buttonCover}>icon</div>
          </div>
        </div>
      </div>
    );
  }
}
SearchAndUpdate.propTypes = {
  placeholder: PropTypes.string
};

SearchAndUpdate.defaultProps = {
  placeholder: "search"
};
