import React, { Component } from "react";
import styles from "./EventDetailsPage.css";
import Button from "../general/Button.js";
import Card from "../general/EventCard";
import CenteredContent from "../../core/CenteredContent";
import Footer from "../Footer/Footer";
import { carouselData } from "./EventPage";
import bannerImage from "../Images/b.jpg";
import Image from "../../core/Image";
import profileImage from "../Images/b.jpg";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";

export default class EventDetailsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <PrimaryHeaderContainer />
          </div>

          <div className={styles.container}>
            <CenteredContent>
              <div className={styles.bannerDescHolder}>
                <div className={styles.bannerImage}>
                  <Image image={bannerImage} />
                </div>
                <div className={styles.descriptionBase}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.tagContainer}>
                      <div className={styles.tagButton}>MANAGEMENT</div>
                    </div>
                    <div className={styles.eventHeading}>
                      Building a Strong Personal Brand by Uma Kasoji
                    </div>
                    <div className={styles.eventlevel}>Advanced Level</div>
                    <div className={styles.eventHostBy}>
                      Hosted by Roundhouse agency
                    </div>
                    <div className={styles.eventAddressBase}>
                      <div className={styles.eventAdressContainer}>
                        <div className={styles.eventPlaceName}>
                          Bangalore International Centre
                        </div>
                        <div className={styles.address}>
                          No. 7, 4th Main Rd, Stage 2{" "}
                        </div>
                        <div className={styles.address}>Domlur, Bengaluru</div>
                      </div>
                      <div className={styles.mapContainer}>
                        {/* <Map
          google={this.props.google}
          style={mapstyle}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        /> */}
                      </div>
                    </div>
                    <div className={styles.eventDetails}>
                      <div className={styles.eventTime}>10 am – 5 pm</div>
                      <div className={styles.eventDate}>21 Sep, 22 Sep</div>
                      <div className={styles.eventCost}> INR 1,450</div>
                    </div>
                    <div className={styles.seatAlertMessage}>
                      9 Seats are left!
                    </div>
                    <div className={styles.eventButtonConatiner}>
                      <div
                        className={styles.eventButton}
                        onClick={() => this.props.showRegisterDetailsModule()}
                      >
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          height={50}
                          width={210}
                          label="Register"
                          borderRadius={10}
                        />
                      </div>
                      <div className={styles.eventButton}>
                        <Button
                          type="primary"
                          backgroundColor={"#fff"}
                          fontColor={"#4F439A"}
                          height={50}
                          width={210}
                          label="I am interested"
                          borderRadius={10}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.registrationdetails}>
                    <div className={styles.registrationdetailsContainer}>
                      <img
                        src={profileImage}
                        className={styles.dot}
                        alt={"profile"}
                      />
                      <img
                        src={profileImage}
                        className={styles.dot}
                        alt={"profile"}
                      />
                      <img
                        src={profileImage}
                        className={styles.dot}
                        alt={"profile"}
                      />
                      <span className={styles.more}>+26</span>
                      <div className={styles.intrested}>
                        Intrested & 13 Registered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.detailsHolder}>
                <div className={styles.header}>
                  <div className={styles.seletedText}>About the Workshop</div>
                  <div className={styles.text}>Testimonials</div>
                </div>
                <div className={styles.desc}>
                  Create a Personal Brand that expresses your authentic value,
                  helps you stand out from the crowd, and increases your
                  visibility, power, and influence Discover your Unique Brand
                  Essence Build a Brand from the inside out that is deeply
                  aligned with what you most value and stand for. Put your brand
                  into motion, by converting the essence of your brand into
                  concrete and measurable goals, and mindful action. Create a
                  Personal Brand that expresses your authentic value, helps you
                  stand out from the crowd, and increases your visibility,
                  power, and influence Discover your Unique Brand Essence Build
                  a Brand from the inside out that is deeply aligned with what
                  you most value and stand for. Put your brand into motion, by
                  converting the essence of your brand into concrete and
                  measurable goals, and mindful action.
                </div>
                <div className={styles.noteConatiner}>
                  <div className={styles.noteHeading}>Make a note</div>
                  <div className={styles.noteDescription}>
                    Please note that all material required for the workshop will
                    be provided at the venue.
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <Button
                    type="primary"
                    backgroundColor={"#E0DEED"}
                    borderColor="#E0DEED"
                    fontColor={"#4F439A"}
                    height={50}
                    width={210}
                    label="ASK A QUESTION"
                    borderRadius={10}
                  />
                </div>
              </div>
            </CenteredContent>
            <hr />
            <CenteredContent>
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
            </CenteredContent>
          </div>

          <div className={styles.footerSection}>
            <Footer history={this.props.history} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
