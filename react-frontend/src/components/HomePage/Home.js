import React from "react";

import { Breakpoint, BreakpointProvider } from "react-socks";

import styles from "./Home.css";
import image0 from "../../images/Events-min.jpg";
import image1 from "../../images/Build-your-profile-min.jpg";
import image2 from "../../images/Resources-min.jpg";
import image3 from "../../images/Events-min.jpg";
import image4 from "../../images/Seek-guidance-min.jpg";
import Button from "../../core/Button.js";
import HomepageEventsCarousel from "../general/HomePageEventsCarousel.";
import Card from "../general/EventCard";
import Carousel from "../general/Carousel";
import Footer from "../Footer/Footer";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
import SecondaryHeaderContainer from "./container/SecondaryHeaderContainer";

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
    this.homeRef = React.createRef();
    this.state = {
      slideIndex: 0,
      lastScrollY: 0,
      maxSlide: 4
    };
  }

  handleCarousel = currentSlide => {
    this.setState({
      slideIndex: currentSlide
    });
  };

  handleScroll = () => {
    this.setState({ lastScrollY: window.scrollY });
  };

  incrementTime = () => {
    if (this.state.slideIndex < this.state.maxSlide) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    } else {
      this.setState({
        slideIndex: 1
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);

    if (this.state.slideIndex <= this.state.maxSlide) {
      var varss = setInterval(() => {
        this.incrementTime();
      }, 5000);
    }
    if (this.state.slideIndex > this.state.maxSlide) {
      this.setState({
        slideIndex: 1
      });
      clearInterval(varss);
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };

  render() {
    return (
      <div className={styles.base} ref={this.homeRef}>
        <BreakpointProvider>
          <div
            className={
              this.state.lastScrollY > 100 ? styles.fixedHeader : styles.header
            }
          >
            {this.state.lastScrollY > 100 ? (
              <PrimaryHeaderContainer />
            ) : (
              <SecondaryHeaderContainer history={this.props.history} />
            )}
          </div>

          <Breakpoint small down>
            {" "}
            <div className={styles.topSection}>
              <div className={styles.slideshowContainer}>
                {this.state.slideIndex === 0 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image0})`,
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        opacity: "0.67"
                      }}
                      src={image0}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Welcome to The star in me
                      </div>{" "}
                      <div className={styles.subText}>
                        Designed to be a professional ecosystem, The star in me
                        provides women with an entire spectrum of resources that
                        equip them for success.
                        <br />
                        <br />
                        For organizations that value diversity, The star in me
                        is a holistic solution that helps in attracting,
                        engaging and retaining women talent.
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 1 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image1})`
                      }}
                      className={styles.homepageCarousal}
                      src={image1}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Create your best profile
                      </div>

                      <div className={styles.subText}>
                        Wouldn't it be amazing to access a unique profile
                        builder to create a visual resume and showcase yourself
                        using videos, pictures and stories?
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/visual-profile")}
                        >
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 2 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image2})`
                      }}
                      src={image2}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Welcome to The star in me
                      </div>{" "}
                      <div className={styles.subText}>
                        Designed to be a professional ecosystem, The star in me
                        provides women with an entire spectrum of resources that
                        equip them for success.
                        <br />
                        <br />
                        For organizations that value diversity, The star in me
                        is a holistic solution that helps in attracting,
                        engaging and retaining women talent.
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 3 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image3})`
                      }}
                      src={image3}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Find Interesting Events
                      </div>
                      <div className={styles.subText}>
                        It is said that your Network is your ‘Net worth’. Do you
                        want to strengthen your professional network?
                        <br />
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/event")}
                        >
                          View all events
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 4 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image4})`
                      }}
                      src={image4}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>Featured Stories</div>
                      <div className={styles.subText}>
                        It is said that your Network is your ‘Net worth’. Do you
                        want to strengthen your professional network?
                        <br />
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/blog")}
                        >
                          View all blogs
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.navButtonSection}>
                <CenteredContent contentWidth={"1400px"}>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(1)}
                  >
                    BUILD
                    <br /> VISUAL PROFILE
                    <div
                      className={
                        this.state.slideIndex === 1
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(2)}
                  >
                    LOOK FOR
                    <br /> APT GUIDANCE
                    <div
                      className={
                        this.state.slideIndex === 2
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(3)}
                  >
                    FIND
                    <br /> INTERESTING EVENTS
                    <div
                      className={
                        this.state.slideIndex === 3
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(4)}
                  >
                    FEATURED
                    <br /> STORIES
                    <div
                      className={
                        this.state.slideIndex === 4
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                </CenteredContent>
              </div>

              <div className={styles.opactityWrapper}></div>
            </div>
          </Breakpoint>

          <Breakpoint large up>
            {" "}
            <div className={styles.topSection}>
              <div className={styles.slideshowContainer}>
                {this.state.slideIndex === 0 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image0})`
                      }}
                      src={image0}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Welcome to The star in me
                      </div>{" "}
                      <div className={styles.subText}>
                        Designed to be a professional ecosystem, The star in me
                        provides women with an entire spectrum of resources that
                        equip them for success.
                        <br />
                        <br />
                        For organizations that value diversity, The star in me
                        is a holistic solution that helps in attracting,
                        engaging and retaining women talent.
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 1 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image1})`
                      }}
                      className={styles.homepageCarousal}
                      src={image1}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Create your best profile
                      </div>

                      <div className={styles.subText}>
                        Wouldn't it be amazing to access a unique profile
                        builder to create a visual resume and showcase yourself
                        using videos, pictures and stories?
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/visual-profile")}
                        >
                          Learn more
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 2 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image2})`
                      }}
                      src={image2}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Welcome to The star in me
                      </div>{" "}
                      <div className={styles.subText}>
                        Designed to be a professional ecosystem, The star in me
                        provides women with an entire spectrum of resources that
                        equip them for success.
                        <br />
                        <br />
                        For organizations that value diversity, The star in me
                        is a holistic solution that helps in attracting,
                        engaging and retaining women talent.
                      </div>
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 3 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image3})`
                      }}
                      src={image3}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>
                        Find Interesting Events
                      </div>
                      <div className={styles.subText}>
                        It is said that your Network is your ‘Net worth’. Do you
                        want to strengthen your professional network?
                        <br />
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/event")}
                        >
                          View all events
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                )}
                {this.state.slideIndex === 4 && (
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        backgroundImage: `url(${image4})`
                      }}
                      src={image4}
                      className={styles.homepageCarousal}
                    />
                    <div className={styles.text}>
                      <div className={styles.title}>Featured Stories</div>
                      <div className={styles.subText}>
                        It is said that your Network is your ‘Net worth’. Do you
                        want to strengthen your professional network?
                        <br />
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
                          onClick={() => this.props.showSignUpModule()}
                        />
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/blog")}
                        >
                          View all blogs
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.navButtonSection}>
                <CenteredContent contentWidth={"1400px"}>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(1)}
                  >
                    BUILD
                    <br /> VISUAL PROFILE
                    <div
                      className={
                        this.state.slideIndex === 1
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(2)}
                  >
                    LOOK FOR
                    <br /> APT GUIDANCE
                    <div
                      className={
                        this.state.slideIndex === 2
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(3)}
                  >
                    FIND
                    <br /> INTERESTING EVENTS
                    <div
                      className={
                        this.state.slideIndex === 3
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(4)}
                  >
                    FEATURED
                    <br /> STORIES
                    <div
                      className={
                        this.state.slideIndex === 4
                          ? styles.innerTriangle
                          : null
                      }
                    ></div>
                  </div>
                </CenteredContent>
              </div>

              <div className={styles.opactityWrapper}></div>
            </div>
          </Breakpoint>

          <div className={styles.eventsSection}>
            <div className={styles.eventsLink}>
              <div className={styles.calendarIcon}></div>
              <div className={styles.eventText}>EVENTS</div>
              <div className={styles.eventTitle}>
                View and attend workshops and networking events
              </div>
              <div
                className={styles.viewAllButton}
                onClick={() => this.handleredirect("/event")}
              >
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
                    Get access to career advice, inspirational stories and
                    curated career resources
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
          <div className={styles.footerSection}>
            <Footer history={this.props.history} />
          </div>
        </BreakpointProvider>
      </div>
    );
  }
}
