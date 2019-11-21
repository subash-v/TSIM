import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchInput from "../general/SearchInput";
import search from "../../core/img/Search.svg";
const links = ["PROFILE", "NETWORK", "COACH", "GUIDANCE", "GUIDE"];
export default class PrimaryHeader extends Component {
  handleredirect = () => {
    if (this.props.history) {
      this.props.history.push(`/`);
    }
  };
  render() {
    return (
      <div className={styles.headerBase}>
        <div className={styles.headerHolder}>
          <div className={styles.logoLinkHolder}>
            <div
              className={styles.logoHolder}
              onClick={() => this.handleredirect()}
            ></div>
            <div className={styles.linkHolder}>
              {links.map(value => {
                return <div className={styles.linkText}>{value}</div>;
              })}
            </div>
          </div>
          <div className={styles.buttonSearchholder}>
            <div className={styles.buttonHolder}>
              <div className={styles.search}>
                <SearchInput
                  uiType="hollow"
                  placeholder="Search for People, Networks, Blogs & Events"
                  value={""}
                  labelText={"Check"}
                  iconImage={search}
                  width="300px"
                  borderBottom="none"
                />
              </div>

              <div className={styles.login}>
                <Button
                  type="secondary"
                  height={40}
                  width={100}
                  fontColor={"#4F439A"}
                  label="LOGIN"
                  borderColor="#4F439A"
                />
              </div>
              <div className={styles.signup}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#ffffff"}
                  height={40}
                  width={100}
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
