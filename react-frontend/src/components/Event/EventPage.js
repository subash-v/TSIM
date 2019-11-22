import React, { Component } from "react";
import styles from "./EventPage.css";
import Button from "../general/Button.js";
import Card from "../general/EventCard";
import CenteredContent from "../../core/CenteredContent";
import Footer from "../Footer/Footer";

import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
export const carouselData = [
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    title: "WEFT Women Entrepreneurs Annual Conference & Awards 2019",
    time: "10 am – 5 pm",
    date: "21 Sep, 22 Sep",
    location: "Koramangala, Bengaluru"
  }
];
export default class EventPage extends Component {
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <PrimaryHeaderContainer history={this.props.history} />
          </div>
          <CenteredContent>
            <div className={styles.container}>
              <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                  <div className={styles.contentContainer}>
                    <div className={styles.heading}>{"Seek Guidance"}</div>
                    <div className={styles.content}>
                      {
                        "There are times when we need more than a sounding board. We need a person with experience in our field, to guide us. "
                      }
                    </div>
                    <div className={styles.content}>
                      Reach out to a guide or become one.{" "}
                    </div>
                    <div className={styles.buttonHolder}>
                      <div className={styles.button}>
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          height={50}
                          width={210}
                          label="Seek Guidance"
                          borderRadius={10}
                        />
                      </div>
                      <div className={styles.button}>
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          height={50}
                          width={210}
                          label="Register as a guide"
                          borderRadius={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.filterBase}>
                <div className={styles.tagAndFilter}>
                  <div className={styles.tagContainer}>
                    <div className={styles.tagButton}>Self Improvement</div>
                  </div>
                  <div className={styles.filterButtonContainer}>
                    <div
                      className={styles.fliterButton}
                      onClick={() => this.handleredirect("/eventDetails")}
                    >
                      <Button
                        type="primary"
                        backgroundColor={"transparent"}
                        fontColor={"#4F439A"}
                        height={40}
                        width={118}
                        label="Fliter"
                        borderRadius={10}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.recommendedEvents}>
                <div className={styles.recommendedEventsHeading}>
                  Recommended Events
                </div>
                <div className={styles.viewAllButtonContainer}>
                  <Button
                    type="primary"
                    backgroundColor={"#E0DEED"}
                    borderColor="#E0DEED"
                    fontColor={"#4F439A"}
                    height={50}
                    width={210}
                    label="VIEW ALL"
                    borderRadius={10}
                  />
                </div>
              </div>
              <div className={styles.storiesContainer}>
                {carouselData.map((val, i) => (
                  <div className={styles.card}>
                    <Card
                      image={""}
                      heading={val.title}
                      time={val.time}
                      date={val.date}
                      location={val.location}
                      key={i}
                      visibleChildrenDesktop={2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CenteredContent>
          <div className={styles.footerSection}>
            <Footer history={this.props.history} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
