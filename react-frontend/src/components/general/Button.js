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
            backgroundColor={"#4F439A"}
            height={this.props.height}
            textStyle={{
              color: "#FFF",
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
            borderColor={"#4F439A"}
            textStyle={{
              color: "#4F439A",
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
  color: "#212121",
  linearColor: {
    fromColor: "#ce5096",
    toColor: "#da6060"
  }
};
