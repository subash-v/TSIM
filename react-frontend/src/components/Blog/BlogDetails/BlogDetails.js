import React from "react";
import CenteredContent from "../../../core/CenteredContent";
import styles from "./BlogDetails.css";
import SeekImage from "../../../images/Resources-min.jpg";
import facebook from "../../../images/Facebook-black.svg";
import linkedin from "../../../images/Linkedin-black.svg";
import twitter from "../../../images/Twitter-black.svg";
import instagram from "../../../images/Instagram.svg";
import Footer from "../../Footer/Footer";
import PrimaryHeaderContainer from "../../HomePage/container/PrimaryHeaderContainer";

export default class BlogDetails extends React.Component {
  componentDidMount() {
    let blogId = this.props.match.params.blogId;
    this.props.getBlogsDetails(blogId);
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer />
        </div>
        <CenteredContent>
          <div className={styles.baseContainer}>
            <div className={styles.title}>
              {this.props.blogDetails && this.props.blogDetails.title}
            </div>

            <div className={styles.jobSection}>
              <div className={styles.leftWrapper}>
                <div className={styles.jobIcon}></div>
                <div>
                  <div className={styles.wrapper}>
                    <div className={styles.jobTitle}>
                      {this.props.blogDetails && this.props.blogDetails.author}
                    </div>
                    <div className={styles.jobDate}>Follow</div>
                  </div>
                  <div className={styles.jobDetails}>
                    <div className={styles.companyLocation}>
                      Nov 27 ·{" "}
                      {this.props.blogDetails &&
                        this.props.blogDetails.duration}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <div className={styles.socialBlock}>
                  <img className={styles.socialImg} src={facebook} alt="" />
                  <img className={styles.socialImg} src={linkedin} alt="" />
                  <img className={styles.socialImg} src={twitter} alt="" />
                  <img className={styles.socialImg} src={instagram} alt="" />
                </div>
              </div>
            </div>
            <div>
              <img
                className={styles.image}
                src={
                  this.props.blogDetails && this.props.blogDetails.imageUrl
                    ? this.props.blogDetails.imageUrl
                    : SeekImage
                }
                alt=""
              />
              {/* <div
                className={styles.banner}
                style={{
                  backgroundImage: `url(${
                    this.props.image ? this.props.image : SeekImage
                  })`
                }}
              ></div> */}
            </div>
            <p className={styles.paragraph}>
              {this.props.blogDetails && this.props.blogDetails.fullDescription}
            </p>
            <div className={styles.tagName}>Film</div>
            <div className={styles.tagName}>Culture</div>
            <div className={styles.tagName}>Politics</div>
            <div className={styles.tagName}>Art</div>
            <div className={styles.tagName}>Jordan peterson</div>
          </div>
        </CenteredContent>
        <Footer />
      </React.Fragment>
    );
  }
}
