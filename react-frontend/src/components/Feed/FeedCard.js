import React, { Component } from "react";
import styles from "./FeedCard.css";
import ProfileImage from "./ProfileImage";
import profile from "../Images/f.jpg";
import Image from "../../core/Image";
import Button from "../general/Button";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import PollingResult from "./PollingResult";
import FeedProfileHolder from "./FeedProfileHolder";

export default class FeedCard extends Component {
  state = {
    showFeedMenu: false
  };
  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder />
          <div
            onClick={this.showFeedMenu}
            className={styles.dottedRightMenu}
          ></div>
          {this.state.showFeedMenu && (
            <div className={styles.feedMenuHolder}>
              <FeedCardDottedMenu></FeedCardDottedMenu>
            </div>
          )}
        </div>

        <div className={styles.feedImage}>
          <Image image={profile} />
        </div>
        <div className={styles.container}>
          <div className={styles.tagContainer}>
            <div className={styles.tag}>Interaction Design</div>
            <div className={styles.tag}>Product strategy</div>
            <div className={styles.more}>+26</div>
          </div>
          <div className={styles.feedHeading}>
            Work Life Balance - Learn what makes a successful one
          </div>
          <div className={styles.feedDescription}>
            Wouldn't it be amazing to access a unique profile builder to create
            a visual resume and showcase yourself using videos, pictures and
            stories?
          </div>
          <div className={styles.hashTagContainer}>
            <div className={styles.hashTag}>#productivity</div>
            <div className={styles.hashTag}>#productivity</div>
            <div className={styles.hashTag}>#productivity</div>
          </div>
          <div className={styles.eventDetailsContainer}>
            <div className={styles.time}>3 pm - 5 pm</div>
            <div className={styles.eventDate}>17th August 2019</div>
            <div className={styles.location}>Reva University, Bengaluru</div>
            <div className={styles.cost}>INR 1450</div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonHolder}>
              <Button
                type="primary"
                backgroundColor={"#4F439A"}
                fontColor={"#ffffff"}
                borderColor={"#4F439A"}
                height={40}
                width={163}
                label="REGISTER"
                borderRadius={5}
              />
            </div>
            <div className={styles.buttonHolder}></div>
            <Button
              type="primary"
              backgroundColor={"#fff"}
              fontColor={"#4F439A"}
              borderColor={"#fff"}
              height={40}
              width={167}
              label="I AM INTERESTED"
              borderRadius={5}
            />
          </div>
          <div className={styles.registrationdetailsContainer}>
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <span className={styles.more}>+26</span>
            <div className={styles.intrested}>Intrested & 13 Registered</div>
          </div>
          <div className={styles.pollingConatiner}>
            <PollingResult />
          </div>
        </div>
        <div className={styles.likesSection}>
          <div className={styles.likes}>12k Likes</div>
          <div className={styles.comment}>21 comment</div>
          <div className={styles.share}>10 Share</div>
        </div>
      </div>
    );
  }
}
