import React, { Component } from "react";
import styles from "./MorePage.css";
import landingImage from "../../images/landing-page-Event.svg";
import Icon from "../../core/Icon";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
const more = [
  { data: landingImage, name: "EVENTS" },
  { name: "RESOURCES" },
  { name: "GUIDES" },
  { name: "COACHES" },
  { name: "MY BOOKMARKS" },
  { name: "MY BOOKINGS" },
  { name: "MY SETTINGS" }
];
export default class MorePage extends Component {
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
                    <div className={styles.linkText}>
                      <Icon image={landingImage} size={50} />
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
