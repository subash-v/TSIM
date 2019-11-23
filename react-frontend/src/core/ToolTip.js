import React, { Component } from "react";
import styles from "./ToolTip.css";
class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = { showScreen: false };
  }
  handleModal(val) {
    this.setState({ showScreen: false });
  }

  render() {
    return (
      <div
        // modalOpen={this.props.showScreen}
        className={this.state.showScreen === true ? styles.base : styles.noBase}
        style={{
          left: this.props.toolTipLeft,
          right: this.props.toolTipRight,
          top: this.props.toolTipTop,
          bottom: this.props.toolTipBottom
        }}
        handleModal={() => this.handleModal(this.props.handleModal)}
      >
        <div className={styles.closeButton}></div>
        <div className={styles.main}>
          {this.props.children}
          <div
            className={styles.triangle}
            style={{
              top: `${this.props.top}`,
              right: `${this.props.right}`,
              bottom: `${this.props.bottom}`,
              left: `${this.props.left}`,
              transform: `${this.props.transform}`
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ToolTip;
