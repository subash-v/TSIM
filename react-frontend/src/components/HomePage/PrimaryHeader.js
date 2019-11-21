import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchInput from "../general/SearchInput";
import search from "../../core/img/Search.svg";
import HOME from "../../images/Home.svg";
import NETWORK from "../../images/Connection_line.svg";
import MORE from "../../images/Menu_Line.svg";
import IconWithHeader from "../../core/IconWithHeader";
const links = [
  { data: HOME, name: "HOME", routeLink: "/" },
  { data: NETWORK, name: "NETWORK", routeLink: "/network" },
  { data: MORE, name: "MORE", routeLink: "/events" }
];
export default class PrimaryHeader extends Component {
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    return (
      <div className={styles.headerBase}>
        <div className={styles.headerHolder}>
          <div className={styles.logoLinkHolder}>
            <div
              className={styles.logoHolder}
              onClick={() => this.handleredirect("/")}
            ></div>
            <div className={styles.linkHolder}>
              {links.map((value, i) => {
                return (
                  <div
                    className={styles.linkText}
                    onClick={() => this.handleredirect(value.routeLink)}
                  >
                    <IconWithHeader
                      image={value.data}
                      size={32}
                      header={value.name}
                    />
                  </div>
                );
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
                  borderBottom="none"
                />
              </div>

              <div className={styles.login}>
                <Button
                  type="secondary"
                  height={40}
                  width={"100%"}
                  fontColor={"#4F439A"}
                  label="LOGIN"
                  borderRadius="none"
                  borderColor="#4F439A"
                />
              </div>
              <div className={styles.signup}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#ffffff"}
                  height={40}
                  borderRadius="none"
                  width={"100%"}
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
