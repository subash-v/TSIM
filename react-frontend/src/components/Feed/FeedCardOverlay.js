import React, { Component } from "react";
import styles from "./FeedCard.css";
import ProfileImage from "./ProfileImage";
import profile from "../Images/f.jpg";
import Image from "../../core/Image";
import Button from "../general/Button";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import PollingResult from "./PollingResult";
import FeedProfileHolder from "./FeedProfileHolder";
import CommentText from "./CommentText";
import imageattach from "../../images/Image_add_blue.svg";
import CommentSection from "./CommentSection";
import dropdown from "../../images/dropdown-blue.svg";
import droupup from "../../images/Upvote-line.svg";
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
          <div className={styles.feedImage}>
            <Image image={profile} />
            <div className={styles.overlay}>
              <div className={styles.overlayhead}>
                The all-NEW American Express SmartEarn™ Credit Card
              </div>
              <div className={styles.overlayurl}>
                mediacampaigns.americanexpress.com
              </div>
            </div>
          </div>
        </div>
        <CommentSection />
        <div className={styles.ans}>
          55 Answers
          <div className={styles.drop}>
            <img src={dropdown} height="12px" width="12px"></img>
          </div>
        </div>
        <div className={styles.commentholder}>
          <div className={styles.profilepicture}>
            <img
              className={styles.commentprofile}
              src={profile}
              height="35px"
              width="35px"
            />
          </div>
          <div className={styles.profilenameholder}>
            <div className={styles.profilename}>Devanshi Sheth</div>
            <div className={styles.degn}>Visual Designer | 8 Aug</div>
            <div className={styles.comment_text}>
              No plans? We're hosting yet another Design workshop with
              Roundhouse agency
            </div>
            <div className={styles.dropupcont}>
              <div className={styles.dropup}>
                <img src={droupup}></img>
              </div>
            </div>
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
