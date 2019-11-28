import React, { Component } from "react";
import styles from "./EventPage.css";
import Button from "../general/Button.js";
import Card from "../general/EventCard";
import CenteredContent from "../../core/CenteredContent";
import Footer from "../Footer/Footer";
import EventSliderComponent from "./EventSliderComponent/EventSliderComponent";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FilterSliderComponent from "./FilterSliderComponent/FilterSliderComponent";
import MobileOnly from "../general/MobileOnly";
import DesktopOnly from "../general/DesktopOnly";
import MobileHeader from "../HomePage/MobileHeader";
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

  showEventDetailsModule = () => {
    if (this.props.showEventDetailsModule) {
      this.props.showEventDetailsModule();
    }
  };
  componentDidMount = () => {
    this.props.getAllEvents();
    this.props.getFilterList();
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <div className={styles.fixedHeader}>
              <DesktopOnly>
                <PrimaryHeaderContainer />
              </DesktopOnly>
              <MobileOnly>
                <MobileHeader />
              </MobileOnly>
            </div>
          </div>
          <React.Fragment>
            <EventSliderComponent {...this.props} />
            <div className={styles.filterBase}>
              <div className={styles.tagAndFilter}>
                <FilterSliderComponent></FilterSliderComponent>
                <div className={styles.filterButtonContainer}>
                  <div
                    className={styles.fliterButton}
                    onClick={() => this.props.showFilterModule(this.props)}
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
          </React.Fragment>
          <CenteredContent>
            <div className={styles.container}>
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
                {this.props &&
                  this.props.allEventDetails &&
                  this.props.allEventDetails.map((val, i) => (
                    <div
                      className={styles.card}
                      onClick={() => {
                        this.handleredirect(`/eventDetails/${val.eventId}`);
                      }}
                    >
                      <Card
                        image={val.imageUrl}
                        heading={val.title}
                        time={`${val.eventSlots[0].startTime} - ${val.eventSlots[0].endTime}`}
                        date={val.eventSlots[0].date}
                        location={val.eventAddress}
                        key={i}
                        eventLabels={val.labels}
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
