import React from "react";
import styles from "./Home.css";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import Button from "../../core/Button copy";
import SecondaryHeader from "./SecondaryHeader";
import HomepageEventsCarousel from "../general/HomePageEventsCarousel.";
import Card from "../general/EventCard";
import Carousel from "../general/Carousel";
import CenteredContent from "../../core/CenteredContent";

const carouselData = [
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
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1
    };
  }

  handleCarousel = currentSlide => {
    console.log(currentSlide);
    this.setState({
      slideIndex: currentSlide
    });
  };

  render() {
    return (
      <div className={styles.base}>
        <div className={styles.header}>
          <SecondaryHeader />
        </div>
        <div className={styles.topSection}>
          <div className={styles.slideshowContainer}>
            {this.state.slideIndex === 1 && (
              <div className={styles.mySlides}>
                <img src={image1} alt="" width="100%" height="100%"></img>
                <div className={styles.text}>
                  <div className={styles.title}>Create your best profile</div>

                  <div className={styles.subText}>
                    Wouldn't it be amazing to access a unique profile builder to
                    create a visual resume and showcase yourself using videos,
                    pictures and stories?
                  </div>
                  <div className={styles.buttonSection}>
                    <Button
                      backgroundColor={"#AD5DA3"}
                      label="BUILD VISUAL PROFILE"
                      fontSize={"16px"}
                      lineHeight={"24px"}
                      width={"298px"}
                      height={"70px"}
                      fontFamily={"bold"}
                    />
                    <div className={styles.link}>Learn more</div>
                  </div>
                </div>
              </div>
            )}
            {this.state.slideIndex === 2 && (
              <div className={styles.mySlides}>
                <img src={image2} alt="" style={{ width: "100%" }}></img>
                <div className={styles.text}>Caption Text2</div>
              </div>
            )}
            {this.state.slideIndex === 3 && (
              <div className={styles.mySlides}>
                <img src={image3} alt="" style={{ width: "100%" }}></img>
                <div className={styles.text}>
                  <div className={styles.title}>Find Interesting Events</div>
                  <div className={styles.subText}>
                    It is said that your Network is your ‘Net worth’. Do you
                    want to strengthen your professional network?
                    <br />
                    We make networking easy.
                  </div>
                  <div className={styles.buttonSection}>
                    <Button
                      backgroundColor={"#AD5DA3"}
                      label="REGISTER FOR AN EVENT"
                      fontSize={"16px"}
                      lineHeight={"24px"}
                      width={"298px"}
                      height={"70px"}
                      fontFamily={"bold"}
                    />
                    <div className={styles.link}>View all events</div>
                  </div>{" "}
                </div>
              </div>
            )}
            {this.state.slideIndex === 4 && (
              <div className={styles.mySlides}>
                <img src={image3} alt="" style={{ width: "100%" }}></img>
                <div className={styles.text}>
                  <div className={styles.title}>Featured Stories</div>
                  <div className={styles.subText}>
                    It is said that your Network is your ‘Net worth’. Do you
                    want to strengthen your professional network?
                    <br />
                    We make networking easy.
                  </div>
                  <div className={styles.buttonSection}>
                    {" "}
                    <Button
                      backgroundColor={"#AD5DA3"}
                      label="READ OUR BLOGS"
                      fontSize={"16px"}
                      lineHeight={"24px"}
                      width={"298px"}
                      height={"70px"}
                      fontFamily={"bold"}
                    />
                    <div className={styles.link}>View all blogs</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.navButtonSection}>
            <div
              className={styles.navButton}
              onClick={() => this.handleCarousel(1)}
            >
              BUILD
              <br /> VISUAL PROFILE
              <div className={styles.innerTriangle}></div>
            </div>
            <div
              className={styles.navButton}
              onClick={() => this.handleCarousel(2)}
            >
              LOOK FOR
              <br /> APT GUIDANCE<div className={styles.innerTriangle}></div>
            </div>
            <div
              className={styles.navButton}
              onClick={() => this.handleCarousel(3)}
            >
              FIND
              <br /> INTERESTING EVENTS
              <div className={styles.innerTriangle}></div>
            </div>
            <div
              className={styles.navButton}
              onClick={() => this.handleCarousel(4)}
            >
              FEATURED
              <br /> STORIES<div className={styles.innerTriangle}></div>
            </div>
          </div>

          <div className={styles.opactityWrapper}></div>
        </div>
        <div className={styles.eventsSection}>
          <div className={styles.eventsLink}>
            <div className={styles.calendarIcon}></div>
            <div className={styles.eventText}>EVENTS</div>
            <div className={styles.eventTitle}>
              View and attend workshops and networking events
            </div>
            <div className={styles.viewAllButton}>
              VIEW ALL <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.carousel}>
            <HomepageEventsCarousel>
              {carouselData &&
                carouselData.map((val, i) => {
                  return (
                    <Card
                      image={""}
                      heading={val.title}
                      time={val.time}
                      date={val.date}
                      location={val.location}
                      key={i}
                      visibleChildrenDesktop={2}
                    />
                  );
                })}
            </HomepageEventsCarousel>
          </div>
        </div>
        <div className={styles.featuredSection}>
          <div style={{ background: "#ebeced", padding: "100px 0 200px 0" }}>
            <div className={styles.featuredHeader}>
              <div className={styles.featIcon}></div>
              <div className={styles.featText}>
                <div className={styles.featTitle}>Featured content</div>
                <div className={styles.subTitle}>
                  Get access to career advice, inspirational stories and curated
                  career resources
                </div>
                <div className={styles.gotoFeaturedContent}>
                  {" "}
                  VIEW ALL <div className={styles.arrow}></div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={styles.featuredCarousel}>
              <Carousel>
                {carouselData &&
                  carouselData.map((val, i) => {
                    return (
                      <Card
                        image={""}
                        heading={val.title}
                        time={val.time}
                        date={val.date}
                        location={val.location}
                        key={i}
                        visibleChildrenDesktop={2}
                      />
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>{/* <Footer/> */}</div>
      </div>
    );
  }
}
