import React from "react";
import PrimaryHeaderContainer from "../../HomePage/container/PrimaryHeaderContainer";
import styles from "../SettingsContainer/SettingsContainer.css";
import Accordion from "../../../core/Accordion";
import MyProfile from "../MyProfile";
import Security from "../Security";
import PrivacySettings from "../PrivacySettings";
import ContactInfo from "../ContactInfo";
import ManageNotification from "../ManageNotification";
import ManageMembers from "../ManageMembers";
const accData = [
  {
    title: "PROFILE SETTINGS",
    context: ["My Profile", "Privacy"]
  },
  {
    title: "ACCOUNT SETTINGS",
    context: ["Contact Info", "Security", "Notification", "Blocking"]
  }
];

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      activeCard: "My Profile"
    };
  }

  onOpenAccordian = activeIndex => {
    this.setState({
      activeIndex
    });
  };

  rightDisplay = title => {
    console.log("xelpxeekc====>", title.currentTarget.textContent);
    this.setState({
      activeCard: title.currentTarget.textContent
    });
  };

  render() {
    console.log("ACTIVE_CARD", this.state.activeCard);
    return (
      <div>
        <PrimaryHeaderContainer />
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            {accData &&
              accData.map((val, i) => {
                return (
                  <React.Fragment>
                    <Accordion
                      key={i}
                      currentAccordian={i}
                      text={val.title}
                      onOpen={index => this.onOpenAccordian(index)}
                      activeIndex={this.state.activeIndex}
                    >
                      {val.context.map(title => (
                        <p
                          onClick={title => this.rightDisplay(title)}
                          className={
                            this.state.activeCard === title
                              ? styles.activeCard
                              : styles.accordionVal
                          }
                        >
                          {title}
                        </p>
                      ))}
                    </Accordion>
                  </React.Fragment>
                );
              })}
          </div>
          <div className={styles.rightContainer}>
            {this.state.activeCard === "My Profile" ? <MyProfile /> : null}
            {this.state.activeCard === "Contact Info" ? <ContactInfo /> : null}
            {this.state.activeCard === "Notification" ? (
              <ManageNotification />
            ) : null}
            {this.state.activeCard === "Privacy" ? <PrivacySettings /> : null}
            {this.state.activeCard === "Security" ? <Security /> : null}
            {this.state.activeCard === "Blocking" ? <ManageMembers /> : null}
          </div>
        </div>
      </div>
    );
  }
}
