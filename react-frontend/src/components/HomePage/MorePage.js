import React, { Component } from "react";
import styles from "./MorePage.css";
import landingImage from "../../images/landing-page-Event.svg";
import Icon from "../../core/Icon";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
const more = [
  { name: "EVENTS", routingURL: "/event" },
  { name: "RESOURCES", routingURL: "/blog" },
  { name: "GUIDES", routingURL: "/seek-guide" },
  { name: "COACHES", routingURL: "" },
  { name: "MY BOOKMARKS", routingURL: "" },
  { name: "MY BOOKINGS", routingURL: "" },
  { name: "MY SETTINGS", routingURL: "/settings" }
];
export default class MorePage extends Component {
  handleredirect = val => {
    if (this.props.history && val) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    

    return (
      <div className={styles.moreHolder}>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>{" "}
        <CenteredContent>
          <div className={styles.more}>
            <div className={styles.logoHolder}>
              {more.map(value => {
                return (
                  <div className={styles.border}>
                    <div
                      className={styles.linkText}
                      onClick={() => this.handleredirect(value.routingURL)}
                    >
                      <DesktopOnly>
                        <Icon image={landingImage} size={50} />
                      </DesktopOnly>
                      <MobileOnly>
                        <Icon image={landingImage} size={30} />
                      </MobileOnly>
                    </div>
                    <div className={styles.label}>{value.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
