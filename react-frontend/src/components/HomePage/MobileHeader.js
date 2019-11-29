import React, { Component } from "react";
import styles from "./MobileHeader.css";
import Image from "../../core/Image";
import Button from "../general/Button";
import menu from "../../images/Menu_Line.svg"
export default class MobileHeader extends Component {
  state={
    showSearch:false
  }
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
          </div>
          <div className={styles.searchLoginContainer}>
            <div className={styles.searchLoginHolder}>
              <div className={styles.searchIcon} //onClick={()=>this.setState({showSearch:!this.state.showSearch})}//
              >
  
              </div>
            </div>
            <div
              className={styles.login}
              onClick={() => this.props.showLoginModal()}
            >
              <Button
                type="secondary"
                height={30}
                width={82}
                fontColor={"#4F439A"}
                label="LOGIN"
                borderRadius="5px 0px 0px 5px"
                borderColor="#4F439A"
                fontSize={"12px"}
              />
            </div>

            <div
              className={styles.signup}
              onClick={() => this.props.showSignUpModal()}
            >
              <Button
                type="primary"
                backgroundColor={"#4F439A"}
                fontColor={"#ffffff"}
                height={30}
                borderRadius="0px 5px 5px 0px"
                width={92}
                label="SIGN UP"
                fontSize={"12px"}
              />
            </div>
          </div>
          <div className={styles.menu}></div>
        </div>


      </div>
    );
  }
}
