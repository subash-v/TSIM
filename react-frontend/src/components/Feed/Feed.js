import React, { Component } from "react";
import styles from "./Feed.css";
import CenteredContent from "../../core/CenteredContent";
import profileImage from "../Images/b.jpg";
import Image from "../../core/Image";
import VerticalStatus from "./VerticalStatus";
import Button from "../general/Button";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import ProfileDetailsInFeed from "./ProfileDetailsInFeed";
import ProfileConnection from "./ProfileConnection";
import AddMoreIntrest from "./AddMoreIntrest";
import GuidesRecommended from "./GuidesRecommended";
import RecommendedConnection from "./RecommendedConnection";
import Input2 from "../../core/Input2";
import FeedCard from "./FeedCard";
import CompleteProfileAlert from "./CompleteProfileAlert";

const data = [
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  }
];
export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      guidePosition: 0
    };
  }
  goForward = val => {
    if (val !== "guide") {
      if (this.state.position < data.length - 1) {
        this.setState({ position: this.state.position + 1 });
      }
    } else {
      if (this.state.guidePosition < data.length - 1) {
        this.setState({ guidePosition: this.state.guidePosition + 1 });
      }
    }
  };
  goBack = val => {
    if (val !== "guide") {
      if (this.state.position > 0) {
        this.setState({ position: this.state.position - 1 });
      }
    } else {
      if (this.state.guidePosition > 0) {
        this.setState({ guidePosition: this.state.guidePosition - 1 });
      }
    }
  };
  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const translationAmount1 = -(100 * this.state.guidePosition);
    const guideTransform = `translateX(${translationAmount1}%)`;
    const style = {
      transform: transform
    };
    const guideStyle = {
      transform: guideTransform
    };
    return (
      <div className={styles.base}>
        {/* <div className={styles.indicatorHolder}>
          <VerticalStatus first="complete" second="active" third="incompele" />
        </div> */}
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>
        <CenteredContent>
          <div className={styles.heading}>Top Picks</div>
          <div className={styles.imageDisplaySection}>
            <div className={styles.leftImage}>
              <div className={styles.leftImgCont}>
                <img
                  src={profileImage}
                  width="100%"
                  height="100%"
                  className={styles.imageEventBanner}
                />
                <div className={styles.overlay}>
                  <div className={styles.bannerEventDetailsContainer}>
                    <div className={styles.bannerEventDetails}>
                      <div className={styles.tagContainer}>
                        <div className={styles.tagButton}>EVENT</div>
                      </div>
                      <div className={styles.eventHeading}>
                        Work Life Balance - Learn what makes a successful one
                      </div>
                      <div className={styles.dateAndPlaceContainer}>
                        3rd November 2019 <span className={styles.dot} /> Reva
                        University
                      </div>
                      <div className={styles.viewEventButtonContainer}>
                        <Button
                          type="primary"
                          backgroundColor={"rgba(255,255,255,0.5"}
                          fontColor={"#fff"}
                          borderColor="rgba(255,255,255,0.5)"
                          height={50}
                          width={146}
                          label="VIEW EVENT"
                          borderRadius={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightImageHolder}>
              <div className={styles.smallImage}>
                <img
                  src={profileImage}
                  width="100%"
                  height="100%"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.bannerStoryContainer}>
                    <div className={styles.bannerEventDetails}>
                      <div className={styles.tagContainer}>
                        <div className={styles.tagButton}>STORIES</div>
                      </div>
                      <div className={styles.storiesHeading}>
                        Why “Me time” is essential
                      </div>
                      <div className={styles.dateAndPlaceContainer}>
                        Uma Kasoji <span className={styles.dot} /> 3 Mins
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.smallImage}>
                <div className={styles.popularQuestionContainer}>
                  <div className={styles.popularQuestionHeading}>
                    POPULAR QUESTION
                  </div>
                  <div className={styles.question}>
                    What are the most interesting facts about human behavior?
                  </div>
                  <div className={styles.answerButton}>
                    <Button
                      type="primary"
                      backgroundColor={"#fff"}
                      fontColor={"#4F439A"}
                      borderColor={"#fff"}
                      height={30}
                      width={90}
                      label="ANSWER"
                      borderRadius={3}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.smallImage}>
                <img
                  src={profileImage}
                  width="100%"
                  height="100%"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.bannerStoryContainer}>
                    <div className={styles.bannerEventDetails}>
                      <div className={styles.tagContainer}>
                        <div className={styles.tagButton}>STORIES</div>
                      </div>
                      <div className={styles.storiesHeading}>
                        Why “Me time” is essential
                      </div>
                      <div className={styles.dateAndPlaceContainer}>
                        Uma Kasoji <span className={styles.dot} /> 3 Mins
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.smallImage}>
                <div className={styles.connectProfileContainer}>
                  <div className={styles.coverImageForConnectionProfile}>
                    <img
                      src={profileImage}
                      width="100%"
                      height="100%"
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.connectProfileHolder}>
                    <div className={styles.connectProfileImageHolder}>
                      <img
                        src={profileImage}
                        width="100%"
                        height="100%"
                        className={styles.connectProfileImage}
                      />
                    </div>
                    <div className={styles.profileName}>Akarshika Das</div>
                  </div>
                  <div className={styles.connectProfileDetailsContainer}>
                    <div className={styles.connectProfileDetails}>
                      <div className={styles.connectProfileDesignations}>
                        Life Coach | Product Designer
                      </div>
                      <div className={styles.connectProfileTags}>
                        Product Management{" "}
                        <span className={styles.connectProfileTagsMoreThenOne}>
                          +2
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button
                        type="primary"
                        backgroundColor={"#E0DEED"}
                        fontColor={"#4F439A"}
                        borderColor={"#E0DEED"}
                        height={30}
                        width={90}
                        label="CONNECT"
                        borderRadius={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dataHolderWrapper}>
            <div className={styles.leftSidePannel}>
              <div className={styles.myProfileSection}>
                <ProfileDetailsInFeed />
              </div>
              <div className={styles.addMoreIntrestContainer}>
                <AddMoreIntrest />
              </div>
              {/* <div className={styles.dataDiv}>john-priya</div>
              <div className={styles.dataDiv}>john</div> */}
            </div>
            <div className={styles.rightSidePannel}>
              <div className={styles.profileConnectionHeading}>
                Coaches recommended for you
              </div>
              <div className={styles.caurosel}>
                <div className={styles.slider} style={style}>
                  {data.map((val, i) => {
                    return (
                      <div className={styles.cauroselData}>
                        <ProfileConnection />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.forwrdBackContainer}>
                <div className={styles.forwrdBack}>
                  <div
                    className={styles.back}
                    onClick={() => this.goBack()}
                  ></div>
                  <div
                    className={styles.forward}
                    onClick={() => this.goForward()}
                  ></div>
                </div>
                <div className={styles.viewAllButtonContainer}>
                  <Button
                    type="primary"
                    backgroundColor={"transparent"}
                    fontColor={"#1A1A1A"}
                    borderColor={"#7F7F7F"}
                    height={30}
                    width={116}
                    label="VIEW ALL"
                    borderRadius={5}
                  />
                </div>
              </div>
              <div className={styles.guideRecommendedHeading}>
                Guides recommended for you
              </div>
              <div className={styles.caurosel}>
                <div className={styles.slider} style={guideStyle}>
                  {data.map((val, i) => {
                    return (
                      <div className={styles.GuideCauroselData}>
                        <GuidesRecommended />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.forwrdBackContainer}>
                <div className={styles.forwrdBack}>
                  <div
                    className={styles.back}
                    onClick={() => this.goBack("guide")}
                  ></div>
                  <div
                    className={styles.forward}
                    onClick={() => this.goForward("guide")}
                  ></div>
                </div>
                <div className={styles.viewAllButtonContainer}>
                  <Button
                    type="primary"
                    backgroundColor={"transparent"}
                    fontColor={"#1A1A1A"}
                    borderColor={"#7F7F7F"}
                    height={30}
                    width={116}
                    label="VIEW ALL"
                    borderRadius={5}
                  />
                </div>
              </div>
              <div className={styles.recommendedConnectionHeader}>
                Connections recommended for you{" "}
              </div>

              {[1, 2, 3, 4, 5].map((data, i) => {
                return (
                  <div className={styles.recommendedConnectionContainer}>
                    <RecommendedConnection />
                  </div>
                );
              })}
            </div>
            <div className={styles.centerSection}>
              <div className={styles.createPostContainer}>
                <div className={styles.createPostNav}>
                  <div
                    className={styles.writePost}
                    onClick={() =>
                      this.props.showUserPostModal({ showModal: "post" })
                    }
                  >
                    Create Post
                  </div>
                  <div
                    className={styles.askQuestion}
                    onClick={() =>
                      this.props.showUserPostModal({ showModal: "question" })
                    }
                  >
                    Ask Question
                  </div>
                  <div
                    className={styles.createPoll}
                    onClick={() =>
                      this.props.showUserPostModal({ showModal: "poll" })
                    }
                  >
                    Create Poll
                  </div>
                </div>
                <div className={styles.imageAndInputHolder}>
                  <div className={styles.createPostContainerImage}>
                    <img
                      src={profileImage}
                      width="100%"
                      height="100%"
                      className={styles.connectProfileImage}
                    />
                  </div>
                  <Input2
                    placeholder="What’s on your mind?"
                    // value={this.state.email}
                    // onChange={val => this.onChange(val)}
                    textStyle={{
                      fontSize: 14,
                      color: "#7F7F7F",
                      fontFamily: "regular",
                      lineHeight: "20px"
                    }}
                    height={50}
                    boxy={true}
                    borderColor={"transparent"}
                    borderBottom={"transparent"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>
              </div>
              <div className={styles.recentAndTopPickContainer}>
                <div className={styles.recent}>RECENT</div>
                <div className={styles.topPick}>TOP PICK</div>
              </div>
              {[1, 2, 3, 4, 5].map((data, i) => {
                return (
                  <div className={styles.feedsContainer}>
                    <FeedCard />
                  </div>
                );
              })}
              <div className={styles.completeProfileAlertContainer}>
                <CompleteProfileAlert />
              </div>
            </div>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
