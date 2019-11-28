import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

import styles from "./RightSlideModal.css";
export default class RightSlideModal extends React.Component {
  render() {
    return (
      <BreakpointProvider>
        <Breakpoint small down>
          <div className={styles.MobileBase}>
            <div
              style={{ width: this.props.width }}
              className={styles.crossIconHide}
            >
              <div className={styles.content}>{this.props.children}</div>
            </div>
          </div>
        </Breakpoint>

        <Breakpoint large up>
          <div className={styles.base}>
            <div
              style={{ width: this.props.width }}
              className={styles.crossIconHide}
            >
              <div className={styles.content}>{this.props.children}</div>
            </div>
          </div>
        </Breakpoint>
      </BreakpointProvider>
    );
  }
}
