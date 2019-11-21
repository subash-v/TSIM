import React from "react";
import styles from "./IconWithHeader.css";
import Icon from "./Icon.js";
import PropTypes from "prop-types";
import VisibilityChild from "./VisibilityChild.js";
export default class IconWithHeader extends React.Component {
  render() {
    return (
      <div
        className={!this.props.iconShow ? styles.base : styles.baseNoPadding}
      >
        {!this.props.iconShow && (
          <div className={styles.iconHolder}>
            <VisibilityChild visible={true}>
              <Icon image={this.props.image} size={30} />
            </VisibilityChild>
          </div>
        )}

        <div className={styles.textHolder}>{this.props.header}</div>
        {this.props.children}
      </div>
    );
  }
}
IconWithHeader.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  iconShow: PropTypes.bool
};
IconWithHeader.defaultProps = {
  iconShow: false
};
