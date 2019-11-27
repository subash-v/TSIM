import React, { Component } from "react";
import styles from "./BlogFeed.css";
import Card from "../general/Card";
import CenteredContent from "../../core/CenteredContent";
import SignUpBar from "./SignUpBar";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
const data = [
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shares: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  },
  {
    name: "Pratiksha Gupta",
    heading: "WEFT Women Entrpreneeurs Annual Conference & Awards 2019",
    shared: "12k",
    likes: "12k",
    comments: "12k",
    time: 2,
    tags: ["technology", "technology", "technology"]
  }
];
export default class BlogFeed extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <div className={styles.fixedHeader}>
              <PrimaryHeaderContainer />
            </div>{" "}
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
              <div className={styles.signUpBarContainer}>
                <SignUpBar />
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
