import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchAndUpdate from "../general/SearchAndUpdate";
import CenteredContent from "../../core/CenteredContent";
const links = ["PROFILE", "NETWORK", "COACH", "GUIDANCE", "GUIDE"];
export default class PrimaryHeader extends Component {
  render() {
    return (
      <CenteredContent>
        <div className={styles.headerBase}>
          <div className={styles.headerHolder}>
            <div className={styles.logoHolder}>
              <div className={styles.logo}>The star in me</div>
            </div>
            <div className={styles.linkHolder}>
              {links.map(value => {
                return <div className={styles.linkText}>{value}</div>;
              })}
            </div>

            <div className={styles.search}>
              <SearchAndUpdate
                uiType="hollow"
                placeholder="Search for People, Networks, Blogs & Events"
                value={""}
                labelText={"Check"}
              />
            </div>

            <div className={styles.buttonHolder}>
              <div className={styles.login}>
                <Button
                  type="secondary"
                  height={40}
                  width={120}
                  label="LOGIN"
                />
              </div>
              <div className={styles.signup}>
                <Button type="primary" height={40} width={120} label="SIGNUP" />
              </div>
            </div>
          </div>
        </div>
      </CenteredContent>
    );
  }
}
