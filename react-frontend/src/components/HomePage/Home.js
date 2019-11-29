import React from "react";
import styles from "./Home.css";
import image0 from "../../images/Events-min.jpg";
import image1 from "../../images/Build-your-profile-min.jpg";
import image2 from "../../images/Resources-min.jpg";
import image3 from "../../images/Events-min.jpg";
import image4 from "../../images/Seek-guidance-min.jpg";
import Button from "../../core/Button.js";
import HomepageEventsCarousel from "../general/HomePageEventsCarousel.";
import Card from "../general/EventCard";
import BlogCardForHomePage from "../general/BlogCardForHomePage";
import HomePageBlogCarousel from "../general/HomePageBlogCarousel";
import HomePageBannerCarousel from "../general/HomePageBannerCarousel";
import Footer from "../Footer/Footer";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
import SecondaryHeaderContainer from "./container/SecondaryHeaderContainer";
import Media from "react-media";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import ProgressBar from "../../core/ProgressBar";
import FooterContainer from "../Footer/FooterContainer";

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
    this.props.getAllEvents();
    this.props.getAllBlogs();
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
                  <div className={styles.title}>Welcome to The star in me</div>{" "}
                  <div className={styles.subText}>
                    Designed to be a professional ecosystem, The star in me
                    provides women with an entire spectrum of resources that
                    equip them for success.
                    <br />
                    <br />
                    For organizations that value diversity, The star in me is a
                    holistic solution that helps in attracting, engaging and
                    retaining women talent.
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
                  <div className={styles.title}>Create your best profile</div>

                  <div className={styles.subText}>
                    Wouldn't it be amazing to access a unique profile builder to
                    create a visual resume and showcase yourself using videos,
                    pictures and stories?
                  </div>
                  <React.Fragment>
                    <Media query="(min-width:1024px)">
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
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
                    </Media>
                    <Media query="(max-width:768px)">
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
                          backgroundColor={"#AD5DA3"}
                          label="BUILD VISUAL PROFILE"
                          fontSize={"14px"}
                          lineHeight={"22px"}
                          width={"auto"}
                          height={"40px"}
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
                    </Media>
                  </React.Fragment>
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
                  <div className={styles.title}>Look for Apt Guidance</div>{" "}
                  <div className={styles.subText}>
                    If you need career guidance, then look no further. You can
                    find a career guide who has walked your path and can guide
                    you on your journey.
                  </div>
                  <React.Fragment>
                    <DesktopOnly>
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
                          backgroundColor={"#AD5DA3"}
                          label="Find your guide"
                          fontSize={"16px"}
                          lineHeight={"24px"}
                          width={"298px"}
                          height={"70px"}
                          fontFamily={"bold"}
                          onClick={() => this.props.showSignUpModule()}
                        />{" "}
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/seek-guide")}
                        >
                          Learn More
                        </div>
                      </div>{" "}
                    </DesktopOnly>
                    <MobileOnly>
                      {" "}
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
                          backgroundColor={"#AD5DA3"}
                          label="Find your guide"
                          fontSize={"14px"}
                          lineHeight={"22px"}
                          width={"auto"}
                          height={"40px"}
                          fontFamily={"bold"}
                          onClick={() => this.props.showSignUpModule()}
                        />{" "}
                        <div
                          className={styles.link}
                          onClick={() => this.handleredirect("/seek-guide")}
                        >
                          Learn More
                        </div>
                      </div>{" "}
                    </MobileOnly>
                  </React.Fragment>
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
                  <div className={styles.title}>Find Interesting Events</div>
                  <div className={styles.subText}>
                    It is said that your Network is your ‘Net worth’. Do you
                    want to strengthen your professional network?
                    <br />
                    <br />
                    We make networking easy.
                  </div>
                  <React.Fragment>
                    <DesktopOnly>
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
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
                    </DesktopOnly>
                    <MobileOnly>
                      <div className={styles.buttonSection}>
                        <Button
                        borderRadius={5}
                          backgroundColor={"#AD5DA3"}
                          label="REGISTER FOR AN EVENT"
                          fontSize={"14px"}
                          lineHeight={"22px"}
                          width={"auto"}
                          height={"40px"}
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
                    </MobileOnly>
                  </React.Fragment>
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
                  <React.Fragment>
                    <DesktopOnly>
                      {" "}
                      <div className={styles.buttonSection}>
                        {" "}
                        <Button
                        borderRadius={5}
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
                    </DesktopOnly>
                    <MobileOnly>
                      {" "}
                      <div className={styles.buttonSection}>
                        {" "}
                        <Button
                        borderRadius={5}
                          backgroundColor={"#AD5DA3"}
                          label="READ OUR BLOGS"
                          fontSize={"14px"}
                          lineHeight={"22px"}
                          width={"auto"}
                          height={"40px"}
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
                    </MobileOnly>
                  </React.Fragment>
                </div>
              </div>
            )}
          </div>
          <React.Fragment>
            <Media query="(max-width:767px)">
              <div className={styles.navButtonSection}>
                <React.Fragment>
                  {" "}
                  <HomePageBannerCarousel>
                    <div
                      className={
                        this.state.slideIndex === 1
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(1)}
                    >
                      BUILD
                      <br /> VISUAL PROFILE
                    </div>
                    <div
                      className={
                        this.state.slideIndex === 2
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(2)}
                    >
                      SEEK
                      <br /> GUIDANCE
                    </div>
                    <div
                      className={
                        this.state.slideIndex === 3
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(3)}
                    >
                      FIND
                      <br /> INTERESTING EVENTS
                    </div>
                    <div
                      className={
                        this.state.slideIndex === 4
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(4)}
                    >
                      FEATURED
                      <br /> STORIES
                    </div>
                  </HomePageBannerCarousel>
                </React.Fragment>
                {/* <MobileOnly>
                  <ProgressBar
                    progress={(this.state.slideIndex * 100) / 2.66}
                  ></ProgressBar>
                  <div style={{ border: "1px solid red" }}></div>
                </MobileOnly> */}
              </div>
            </Media>
            <Media query="(min-width:1024px)">
              <div className={styles.navButtonSection}>
                <CenteredContent contentWidth={"1200px"}>
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
            </Media>
          </React.Fragment>
          <div className={styles.opactityWrapper}></div>
        </div>
        <div className={styles.eventsSection}>
          <Media query="(min-width:1024px)">
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
                VIEW ALL <div className={styles.arrowp}></div>
              </div>
            </div>
          </Media>
          <Media query="(max-width:767px)">
            <div className={styles.eventsLink}>
              <div className={styles.eventsMobileSection}>
                <div className={styles.eventButton}>
                  <div className={styles.calendarIcon}></div>
                  <div className={styles.eventText}>EVENTS</div>
                  <div className={styles.eventTitle}>
                    View and attend workshops and networking events
                  </div>
                </div>
                <div
                  className={styles.viewAllButton}
                  onClick={() => this.handleredirect("/event")}
                >
                  VIEW ALL <div className={styles.arrow}></div>
                </div>
              </div>
            </div>
          </Media>
          <div className={styles.carousel}>
            <HomepageEventsCarousel>
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
            </HomepageEventsCarousel>
          </div>
        </div>
        <div className={styles.featuredSection}>
          <div style={{ background: "#ebeced", padding: "100px 0 200px 0" }}>
            <div className={styles.featuredHeader}>
              <div className={styles.featIcon} />
              <div className={styles.featText}>
                <div className={styles.featTitle}>Featured content</div>
                <div className={styles.subTitle}>
                  Get access to career advice, inspirational stories and curated
                  career resources
                </div>
                <div
                  className={styles.gotoFeaturedContent}
                  onClick={() => this.handleredirect("/blog")}
                >
                  {" "}
                  VIEW ALL <div className={styles.arrow}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventCardContainer}>
            <div className={styles.featuredCarousel}>
              <HomePageBlogCarousel>
                {this.props &&
                  this.props.allBlogsDetails &&
                  this.props.allBlogsDetails.map(val => (
                    <div
                      className={styles.card}
                      onClick={() => {
                        this.handleredirect(`/blogDetails/${val.blogId}`);
                      }}
                    >
                      <BlogCardForHomePage
                        name={val.author}
                        tags={val.labels}
                        time={val.duration}
                        heading={val.title}
                        shared="12k"
                        likes="12k"
                        comments="12k"
                      />
                    </div>
                  ))}
              </HomePageBlogCarousel>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <FooterContainer />
        </div>
      </div>
    );
  }
}