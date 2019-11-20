import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchAndUpdate from "../general/SearchAndUpdate";
import CenteredContent from "../../core/CenteredContent";
import search from "../../core/img/Search.svg";
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
                iconImage={search}
              />
            </div>

            <div className={styles.buttonHolder}>
              <div className={styles.login}>
                <Button
                  type="secondary"
                  height={40}
                  width={120}
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
                  width={120}
                  label="SIGN UP"
                />
              </div>
            </div>
          </div>
        </div>
      </CenteredContent>
    );
  }
}
