import React from "react";
import CoreButton from "../../core/Button.js";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  renderButton() {
    var { backgroundColor, borderRadius, textStyle, ...other } = this.props;
    switch (this.props.type) {
      case "primary":
        return (
          <CoreButton
            {...other}
            backgroundColor={this.props.backgroundColor}
            height={this.props.height}
            borderRadius="4px"
            textStyle={{
              color: this.props.fontColor,
              fontSize: 16,
              fontFamily: "semibold"
            }}
          />
        );

      case "secondary":
        return (
          <CoreButton
            {...other}
            backgroundColor={"transparent"}
            height={this.props.height}
            borderColor={this.props.borderColor}
            borderRadius="4px"
            textStyle={{
              color: this.props.fontColor,
              fontSize: 16,
              fontFamily: "semibold"
            }}
          />
        );

      default:
        return <CoreButton {...this.props} />;
    }
  }
  render() {
    return <React.Fragment>{this.renderButton()}</React.Fragment>;
  }
}

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "hollow",
    "linearGradient"
  ])
};

Button.defaultProps = {
  height: 36,
  fontColor: "#212121",
  backgroundColor: "#4F439A",
  borderColor: "#4F439A",
  linearColor: {
    fromColor: "#ce5096",
    toColor: "#da6060"
  }
};
