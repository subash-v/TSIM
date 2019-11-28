import React, { Component } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

import SignIn from "../../SignIn/SignIn";
import RightSlideModal from "./RightSlideModal";
import styles from "./LoginModule.css";

export default class LoginModule extends Component {
  render() {
    return (
      <BreakpointProvider>
        <Breakpoint small down>
          <RightSlideModal>
            <div className={styles.base}>
              <SignIn {...this.props} />
            </div>
          </RightSlideModal>
        </Breakpoint>

        <Breakpoint large up>
          <RightSlideModal>
            <div className={styles.base}>
              <SignIn {...this.props} />
            </div>
          </RightSlideModal>
        </Breakpoint>
      </BreakpointProvider>
    );
  }
}
