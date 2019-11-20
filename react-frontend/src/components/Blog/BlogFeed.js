import React, { Component } from "react";
import styles from "./BlogFeed.css";
import Card from "./Card";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeader from "../HomePage/PrimaryHeader";
import SearchAndUpdate from "../general/SearchAndUpdate";
import signUpImage from "../Images/Signupbanner.svg";
const data = [
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shares: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2
  }
];
export default class BlogFeed extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <PrimaryHeader />
          </div>
          <CenteredContent>
            <div className={styles.container}>
              <div className={styles.bannerBase}>
                <div className={styles.bannerContainer}>
                  <div className={styles.banner}>
                    <div className={styles.bannerContentBase}>
                      <div className={styles.tagButton}>Self Improvement</div>
                      <div className={styles.heading}>
                        Why “Me time” is essential?
                      </div>
                      <div className={styles.task}>
                        Uma Kasoji <span className={styles.dot} /> 2 Mins
                      </div>
                      <div className={styles.description}>
                        When was the last time you took a moment for yourself?
                        Most of us tend to lead super-charged lives that are
                        incredibly hectic. And if we do manage…
                      </div>
                      <div className={styles.button}>Read More</div>
                    </div>
                  </div>
                </div>
                <div className={styles.splitbannerContainer}>
                  <div className={styles.splitbanner1}>
                    <div className={styles.bannerContentBase}>
                      <div className={styles.tagButton}>CAREER</div>
                      <div className={styles.splitbannerHeading}>
                        WEFT Women Entrepreneurs Annual Conference & Awards 2019
                      </div>
                      <div className={styles.task}>
                        Pratiksha Gupta <span className={styles.dot} /> 2 Mins
                      </div>
                    </div>
                  </div>
                  <div className={styles.splitbanner2}>
                    <div className={styles.bannerContentBase}>
                      <div className={styles.tagButton}>CAREER</div>
                      <div className={styles.splitbannerHeading}>
                        WEFT Women Entrepreneurs Annual Conference & Awards 2019
                      </div>
                      <div className={styles.task}>
                        Pratiksha Gupta <span className={styles.dot} /> 2 Mins
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.storiesBase}>
                <div className={styles.storiesHeading}>FEATURED STORIES</div>

                <div className={styles.storiesContainer}>
                  {data.map(val => (
                    <div className={styles.card}>
                      <Card {...val} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.signupHolder}>
                <div className={styles.signUpContainer}>
                  <div className={styles.signup}>
                    <div className={styles.signupText}>
                      Sign up to read more stories
                    </div>

                    <div className={styles.subText}>It won’t take long!</div>
                    <div className={styles.subText}>
                      Sign up to get access to interesting stories on the
                      platform
                    </div>
                    <div className={styles.inputHolder}>
                      <SearchAndUpdate
                        uiType="hollow"
                        width="250px"
                        borderBottom="none"
                        placeholder={"Enter Your Email Address"}
                        iconText={"GET STARTED"}
                      />
                    </div>
                  </div>
                  <div className={styles.imageHolder}>
                    <img
                      className={styles.signUpImage}
                      src={signUpImage}
                      alt="no i"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </CenteredContent>
        </div>
      </React.Fragment>
    );
  }
}
