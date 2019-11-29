import React, { Component } from "react";
import styles from "./PrimaryHeader.css";
import Button from "../general/Button";
import SearchInput from "../general/SearchInput";
import search from "../../core/img/Search.svg";
import HOME from "../../images/Home.svg";
import filled_home from "../../images/Home_selected_blue.svg";

import NETWORK from "../../images/Connection_line.svg";
import FILLED_NETWORK from "../../images/Connection_fill_blue.svg";

import MORE from "../../images/Menu_Line.svg";
import filled_more from "../../images/Menu_Fill_blue.svg";

import MESSAGE from "../../images/Messages_line.svg";
import filled_message from "../../images/Messages_line_blue.svg";

import profile from "../../images/Profile_Line.svg";
import Filled_Profile from "../../images/Profile_Fill_blue.svg";

import EVENT from "../../images/Events_header.svg";
import filled_event from "../../images/Events_header_fill.svg";

import RESOURCES from "../../images/Resources_Header.svg";
import FILLED_RESOURCES from "../../images/Resources_Header_blue.svg";

import FILLED_NOTIFICATION from "../../images/Notification_on_blue.svg";
import NOTIFICATION from "../../images/Notification_off.svg";

import IconWithHeader from "../../core/IconWithHeader";
import ProfileImage from "../../core/ProfileImage";
import GUIDE from "../../images/Guides_header.svg";
import GUIDE_Fill from "../../images/Guides_header_blue.svg";
import PropTypes from "prop-types";
import DesktopOnly from "../general/DesktopOnly";
import MobileHeader from "./MobileHeader";
import MobileOnly from "../general/MobileOnly";
import { ACCESS_TOKEN } from "../../utils/constant";
import * as Cookie from "../../utils/Cookie";

const links = [
  {
    data: profile,
    name: "PROFILE",
    routeLink: "/visual-profile",
    filledImage: Filled_Profile
  },
  {
    data: GUIDE,
    name: "GUIDE",
    routeLink: "/seek-guide",
    filledImage: GUIDE_Fill
  },
  {
    data: EVENT,
    name: "EVENTS",
    routeLink: "/event",
    filledImage: filled_event
  },
  {
    data: RESOURCES,
    name: "RESOURCES",
    routeLink: "/blog",
    filledImage: FILLED_RESOURCES
  }
];
const logedInLinks = [
  { data: HOME, name: "HOME", routeLink: "/", filledImage: filled_home },
  {
    data: NETWORK,
    name: "CONNECTION",
    routeLink: "/network",
    filledImage: FILLED_NETWORK
  },
  {
    data: MESSAGE,
    name: "MESSAGE",
    routeLink: "/chat",
    filledImage: filled_message
  },
  {
    data: NOTIFICATION,
    name: "NOTIFICATION",
    routeLink: "/notification",
    filledImage: FILLED_NOTIFICATION
  },
  { data: MORE, name: "MORE", routeLink: "/events", filledImage: filled_more }
];
export default class PrimaryHeader extends Component {
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  showLoginModal = () => {
    if (this.props.showLoginModule) {
      this.props.showLoginModule(this.props);
    }
  };
  showSignUpModal = () => {
    if (this.props.showSignUpModule) {
      this.props.showSignUpModule(this.props);
    }
  };
  render() {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    return (
      <React.Fragment>
        <DesktopOnly>
          <div className={styles.headerBase}>
            <div
              className={
                isUserLogedIn ? styles.nonLogedInHeader : styles.headerHolder
              }
            >
              <div
                className={
                  isUserLogedIn ? styles.loggedInHolder : styles.logoLinkHolder
                }
              >
                <div
                  className={styles.logoHolder}
                  onClick={() => this.handleredirect("/")}
                ></div>
                <div className={styles.linkHolder}>
                  {!isUserLogedIn
                    ? links.map((value, i) => {
                        return (
                          <div
                            className={
                              this.props.location &&
                              this.props.location.pathname === value.routeLink
                                ? styles.showLine
                                : styles.linkText
                            }
                            onClick={() => this.handleredirect(value.routeLink)}
                          >
                            <IconWithHeader
                              image={
                                this.props.location &&
                                this.props.location.pathname === value.routeLink
                                  ? value.filledImage
                                  : value.data
                              }
                              size={26}
                              header={value.name}
                              fontSize={10}
                            />
                          </div>
                        );
                      })
                    : logedInLinks.map((value, i) => {
                        return (
                          <div
                            className={
                              this.props.location &&
                              this.props.location.pathname === value.routeLink
                                ? styles.showLine
                                : styles.loglinkText
                            }
                            onClick={() => this.handleredirect(value.routeLink)}
                          >
                            <IconWithHeader
                              image={
                                this.props.location &&
                                this.props.location.pathname === value.routeLink
                                  ? value.filledImage
                                  : value.data
                              }
                              size={25}
                              header={value.name}
                              fontSize={10}
                            />
                          </div>
                        );
                      })}
                </div>
              </div>
              <div
                className={
                  isUserLogedIn
                    ? styles.loggedinButton
                    : styles.buttonSearchholder
                }
              >
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
                  {isUserLogedIn && <ProfileImage image={profile} size={0} />}
                  {!isUserLogedIn && (
                    <div
                      className={styles.login}
                      onClick={() => this.showLoginModal()}
                    >
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
                  {!isUserLogedIn && (
                    <div
                      className={styles.signup}
                      onClick={() => this.showSignUpModal()}
                    >
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
        </DesktopOnly>
        <MobileOnly>
          <MobileHeader
            {...this.props}
            showSignUpModal={() => this.showSignUpModal()}
            showLoginModal={() => this.showLoginModal()}
          />
        </MobileOnly>
      </React.Fragment>
    );
  }
}
