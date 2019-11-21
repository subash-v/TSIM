import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchInput from "../general/SearchInput";
import search from "../../core/img/Search.svg";
import HOME from "../../images/Home.svg";
import NETWORK from "../../images/Connection_line.svg";
import MORE from "../../images/Menu_Line.svg";
import profile from "../../images/Profile_Line.svg";
import MESSAGE from "../../images/Messages_line.svg";

import IconWithHeader from "../../core/IconWithHeader";
import ProfileImage from "../../core/ProfileImage";

const links = [
  { data: HOME, name: "HOME", routeLink: "/" },
  { data: NETWORK, name: "NETWORK", routeLink: "/network" },
  { data: MORE, name: "MORE", routeLink: "/events" },
  { data: MORE, name: "PROFILE", routeLink: "/profile" }
];
const logedInLinks = [
  { data: HOME, name: "HOME", routeLink: "/" },
  { data: NETWORK, name: "CONNECTION", routeLink: "/network" },
  { data: MESSAGE, name: "MESSAGE", routeLink: "/chat" },
  { data: NETWORK, name: "NOTIFICATION", routeLink: "/notification" },
  { data: MORE, name: "MORE", routeLink: "/events" },
  { data: MORE, name: "PROFILE", routeLink: "/profile" }
];
export default class PrimaryHeader extends Component {
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  showModal = () => {
    // if(this.props.showCliqCenterModule)
    // {
    //   this.props.showCliqCenterModule()
    // }
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.headerBase}>
        <div
          className={
            this.props.login ? styles.nonLogedInHeader : styles.headerHolder
          }
        >
          <div className={styles.logoLinkHolder}>
            <div
              className={styles.logoHolder}
              onClick={() => this.handleredirect("/")}
            ></div>
            <div className={styles.linkHolder}>
              {!this.props.login
                ? links.map((value, i) => {
                    return (
                      <div
                        className={styles.linkText}
                        onClick={() => this.handleredirect(value.routeLink)}
                      >
                        <IconWithHeader
                          image={value.data}
                          size={25}
                          fontSize={10}
                          header={value.name}
                        />
                      </div>
                    );
                  })
                : logedInLinks.map((value, i) => {
                    return (
                      <div
                        className={styles.loglinkText}
                        onClick={() => this.handleredirect(value.routeLink)}
                      >
                        <IconWithHeader
                          image={value.data}
                          size={25}
                          header={value.name}
                          fontSize={10}
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
              {this.props.login && <ProfileImage image={profile} size={2} />}
              {!this.props.login && (
                <div className={styles.login} onClick={() => this.showModal()}>
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
              )}
              {!this.props.login && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
