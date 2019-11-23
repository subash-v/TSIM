import React, { Component } from "react";
import styles from "./ToolTip.css";
class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = { showScreen: false };
  }

  render() {
    return (
      <div
        // modalOpen={this.state.showScreen}
        className={styles.base}
        style={{
          left: this.props.toolTipLeft,
          right: this.props.toolTipRight,
          top: this.props.toolTipTop,
          bottom: this.props.toolTipBottom,
          width: this.props.toolTipWidth,
          height: this.props.toolTipHeight
        }}
      >
        <div
          className={styles.closeButton}
          handleModal={this.props.closeButton}
        ></div>
        <div
          className={styles.main}
          style={{ width: `${this.props.textWidth}` }}
        >
          {this.props.children}
          <div
            className={styles.triangle}
            style={{
              top: `${this.props.top}`,
              right: `${this.props.right}`,
              bottom: `${this.props.bottom}`,
              left: `${this.props.left}`,
              transform: `${this.props.transform}`,
              display: `${this.props.displayTriangle}`
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ToolTip;
