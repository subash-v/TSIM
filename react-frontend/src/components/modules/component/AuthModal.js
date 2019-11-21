import React, { Component } from "react";
import AuthContainer from "../../../containers/AuthContainer";
import ModalPanel from "../../modules/component/ModalPanel";
import { ModalPortal } from "../../modules/component/ModalRoot";
import styles from "./AuthModal.css";
import Media from "react-media";
export default class AuthModal extends Component {
  handleClose = () => {
    if (this.props.closeModal) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <ModalPortal showModal={this.props.showModal}>
        <ModalPanel>
          {this.props.showModal && (
            <div className={styles.main}>
              <AuthContainer
                signUpEmail={this.props.signUpEmail}
                inModal={true}
              />
              <div className={styles.login}>
                <Media query="(min-width: 1024px)">
                  <div
                    className={styles.closeButtonHolder}
                    onClick={this.handleClose}
                  >
                    <div className={styles.closeText}>CLOSE</div>
                  </div>
                </Media>
                <Media query="(max-width: 1024px)">
                  <div
                    className={styles.closeButtonHolder}
                    onClick={this.handleClose}
                  >
                    <div className={styles.closeText} />
                  </div>
                </Media>
              </div>
            </div>
          )}
        </ModalPanel>
      </ModalPortal>
    );
  }
}
