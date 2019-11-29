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
import EventDetailPageSliderComponent from "./EventDetailPageSlider/EventDetailPageSliderComponent";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";

export default class EventDetailsPage extends Component {
  componentDidMount() {
    let eventId = this.props.match.params.eventId;
    this.props.getEventDetails(eventId);
    this.props.getRegisterEvent(eventId);
  }
  render() {
    console.log(this.props);
    const eventDetails = this.props && this.props.eventDetails;
    const eventSlot =
      this.props &&
      this.props.eventDetails &&
      this.props.eventDetails.eventSlots[0];
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <div className={styles.fixedHeader}>
              <PrimaryHeaderContainer />
            </div>
          </div>

          <div className={styles.container}>
            <CenteredContent>
              <div className={styles.bannerDescHolder}>
                {eventDetails && eventDetails.imageUrl && (
                  <div className={styles.bannerImage}>
                    {eventDetails && eventDetails.imageUrl ? (
                      <Image
                        image={eventDetails.imageUrl}
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <EventDetailPageSliderComponent></EventDetailPageSliderComponent>
                    )}
                  </div>
                )}
                <div className={styles.descriptionBase}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.tagContainer}>
                      {this.props &&
                        this.props.eventDetails &&
                        this.props.eventDetails.labels &&
                        this.props.eventDetails.labels.map(label => {
                          return (
                            <div className={styles.tagButton}>{label}</div>
                          );
                        })}
                    </div>
                    {this.props &&
                      this.props.eventDetails &&
                      this.props.eventDetails.title && (
                        <div className={styles.eventHeading}>
                          {this.props.eventDetails.title}
                        </div>
                      )}
                    {this.props &&
                      this.props.eventDetails &&
                      this.props.eventDetails.eventLevel && (
                        <div className={styles.eventlevel}>
                          {this.props.eventDetails.eventLevel} Level
                        </div>
                      )}
                    {this.props &&
                      this.props.eventDetails &&
                      this.props.eventDetails.organizer && (
                        <div className={styles.eventHostBy}>
                          Hosted by {this.props.eventDetails.organizer}
                        </div>
                      )}
                    <div className={styles.eventAddressBase}>
                      <div className={styles.eventAdressContainer}>
                        {eventDetails && eventDetails.locality && (
                          <div className={styles.eventPlaceName}>
                            {eventDetails.locality}
                          </div>
                        )}
                        <div className={styles.address}>
                          No. 7, 4th Main Rd, Stage 2{" "}
                        </div>
                        {eventDetails && eventDetails.eventAddress && (
                          <div className={styles.address}>
                            {eventDetails.eventAddress}
                          </div>
                        )}
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
                    {eventSlot && (
                      <div className={styles.eventDetails}>
                        <div className={styles.eventTime}>
                          {eventSlot.startTime} – {eventSlot.endTime}
                        </div>
                        <div className={styles.eventDate}>{eventSlot.date}</div>
                        <div className={styles.eventCost}>
                          INR {eventSlot.price}
                        </div>
                      </div>
                    )}
                    {eventSlot && (
                      <div className={styles.seatAlertMessage}>
                        {eventSlot.noOfSeats} Seats are left!
                      </div>
                    )}
                    <div className={styles.eventButtonConatiner}>
                      <div
                        className={styles.eventButton}
                        onClick={() =>
                          this.props.showRegisterDetailsModule(this.props)
                        }
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
                      <DesktopOnly>
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
                      </DesktopOnly>
                      <MobileOnly>
                        <div className={styles.eventButton}>
                          <Button
                            type="primary"
                            backgroundColor={"#fff"}
                            borderColor={"#fff"}
                            fontColor={"#4F439A"}
                            height={50}
                            width={150}
                            label="I am interested"
                            borderRadius={10}
                          />
                        </div>
                      </MobileOnly>
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
                  <DesktopOnly>
                    <div className={styles.text}>Testimonials</div>
                  </DesktopOnly>
                </div>
                {eventDetails && eventDetails.eventDescription && (
                  <div className={styles.desc}>
                    {eventDetails.eventDescription}
                  </div>
                )}
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
            <DesktopOnly>
              <hr />
            </DesktopOnly>
            <CenteredContent>
              <div className={styles.recommendedEvents}>
                <div className={styles.recommendedEventsHeading}>
                  Recommended Events
                </div>
                <DesktopOnly>
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
                </DesktopOnly>
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
              <MobileOnly>
                <div className={styles.viewAllButtonContainer}>
                  <Button
                    type="primary"
                    backgroundColor={"#FFF"}
                    borderColor="#4F439A"
                    fontColor={"#4F439A"}
                    height={30}
                    width={99}
                    fontSize={"12px"}
                    label="VIEW ALL"
                    borderRadius={0}
                  />
                </div>
              </MobileOnly>
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
