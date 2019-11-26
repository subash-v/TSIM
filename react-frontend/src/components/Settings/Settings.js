import React from "react";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import styles from "../Settings/Settings.css";
import Accordion from "../../core/Accordion";
import MyProfile from "../../components/Settings/MyProfile/MyProfile";
import Password from "../../components/Settings/Password/Password";
import Security from "../../components/Settings/Security/Security";
import PrivacySettings from "../../components/Settings/PrivacySettings/PrivacySettings";
import ContactInfo from "../../components/Settings/ContactInfo/ContactInfo";
import ManageNotification from "../../components/Settings/ManageNotification/ManageNotification";

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
    this.setState({
      activeCard: title.currentTarget.textContent
    });
  };

  render() {
    return (
      <div>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer />
        </div>{" "}
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
                          className={styles.accordionVal}
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
            {this.state.activeCard === "Security" ? <Password /> : null}
          </div>
        </div>
      </div>
    );
  }
}
