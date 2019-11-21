import React, { Component } from "react";
import styles from "./SecondaryHeader.css";
import Button from "../general/Button";
import search from "../../core/img/Search.svg";
import Icon from "../../core/Icon";
export default class SecondaryHeader extends Component {
  handleredirect = () => {
    if (this.props.history) {
      this.props.history.push(`/`);
    }
  };
  render() {
    return (
      <div className={styles.headerBase}>
        <div className={styles.headerHolder}>
          <div
            className={styles.logoHolder}
            onClick={() => this.handleredirect()}
          ></div>
          <div className={styles.searchLoginHolder}>
            <div className={styles.search}>
              <Icon image={search} size={"20px"}></Icon>
            </div>

            <div className={styles.buttonHolder}>
              <div className={styles.login}>
                <Button
                  type="secondary"
                  height={40}
                  width={120}
                  fontColor={"#FFF"}
                  label="LOGIN"
                  borderColor="none"
                />
              </div>
              <div className={styles.signup}>
                <Button
                  type="primary"
                  backgroundColor={"#fff"}
                  fontColor={"#4F439A"}
                  height={40}
                  width={120}
                  label="SIGN UP"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
