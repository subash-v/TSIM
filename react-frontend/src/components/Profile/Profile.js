import React, { Component } from "react";
import styles from "./Profile.css";
import PrimaryHeader from "../HomePage/PrimaryHeader";
import CenteredContent from "../../core/CenteredContent";
import Milestone from "../../core/Milestone";
import Skills from "../Skills/Skills";
import ToolTip from "../../core/ToolTip";
import Button from "../../core/Button";

const data = [{}, {}, {}, {}, {}];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour1: false,
      tour2: false,
      tour3: false,
      tour4: false,
      tour5: false,
      tour6: false,
      tour7: false,
      tourcount: 0
    };
  }

  incrementTime = () => {
    if (this.state.tourcount === 1) {
      this.setState({
        tour1: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 2) {
      this.setState({
        tour2: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 3) {
      this.setState({
        tour3: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 4) {
      this.setState({
        tour4: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 5) {
      this.setState({
        tour5: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 6) {
      this.setState({
        tour6: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 7) {
      this.setState({
        tour7: true,
        tourcount: this.state.tourcount + 1
      });
    } else {
      console.log("end the tour");
    }
  };

  gotItHandler = async () => {
    await this.setState({
      tourcount: this.state.tourcount + 1
    });
  };

  startTour = async () => {
    console.log(this.state);
    // if (this.state.tourcount) {
    await this.setState({
      tourcount: this.state.tourcount + 1,
      tour1: true
    });
    console.log(this.state);
    // }
  };

  closeToolTip = () => {
    console.log("Hii");
    this.setState({
      tourcount: 0,
      tour1: false,
      tour2: false,
      tour3: false,
      tour4: false,
      tour5: false,
      tour6: false,
      tour7: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <PrimaryHeader history={this.props.history} />
        <div className={styles.base}>
          <div className={styles.topSection}>
            <CenteredContent contentWidth="1400px">
              <div className={styles.profileSection}>
                <div className={styles.profile}>
                  <div className={styles.nameWithEdit}>
                    <div className={styles.profileName}>
                      {this.props.userName ? "" : "Add Name"}
                      {/* <div className={styles.editIcon}></div> */}
                    </div>
                    <div className={styles.editableOptions}></div>
                  </div>
                  <div className={styles.profileDesignation}>
                    {this.props.designation ? "" : "Add Designation"}
                    {/* <div className={styles.editIcon}></div> */}
                  </div>
                  <div className={styles.profileLocation}>
                    {"Add Location"}
                    {/* <div className={styles.editIcon}></div> */}
                  </div>
                  <div className={styles.profileConnections}>
                    <div className={styles.connections}>
                      {this.props.connections ? "" : 0}+ Connections
                      {this.state.tourcount === 1 && (
                        <ToolTip
                          toolTipLeft={"130px"}
                          toolTipTop={"-20px"}
                          left={"-8px"}
                          top={"50px"}
                          handleModal={this.closeToolTip}
                          children={
                            <React.Fragment>
                              <div className={styles.toolTipHeader}>
                                Tell us about yourself
                              </div>
                              <div className={styles.toolTipBody}>
                                Let other users know more about you
                              </div>
                              <Button
                                type="primary"
                                backgroundColor={"#AD5DA3"}
                                fontColor={"#fff"}
                                height={30}
                                width={80}
                                label="Got It!"
                                borderRadius={2}
                                onClick={this.gotItHandler}
                              />
                            </React.Fragment>
                          }
                        />
                      )}
                    </div>
                    <div className={styles.uploadCvButton}>UPLOAD CV</div>
                  </div>
                  <div className={styles.dividingLine} />
                  <div className={styles.summary}>
                    <div className={styles.summaryHeader}>
                      Professional Summary
                      <div className={styles.infoIcon}></div>
                    </div>
                    <div className={styles.addBio}>
                      {/* Add bio<div className={styles.editIcon}></div> */}
                    </div>
                    <div className={styles.bioList}>
                      {this.props.bio
                        ? ""
                        : "(For ex: A Human resources leader with over 18 years of experience across Talent management, HR Policy and Recruitment)"}

                      <div className={styles.wordLimit}>
                        Word Limit: 100 words
                      </div>
                    </div>
                    <div className={styles.uploadIntroVideo}>
                      <div className={styles.uploadIcon}></div>
                      <div className={styles.uploadText}>
                        Upload intro video
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.uploadImage}>
                  <div className={styles.uploadImageDummy}>
                    <div className={styles.uploadImageGroup}>
                      {" "}
                      <div className={styles.uploadPlusButton}></div>
                      <div className={styles.uploadPlusButton}></div>
                      <div className={styles.uploadPlusButton}></div>
                      <div className={styles.uploadPlusButton}></div>
                      <div className={styles.uploadPlusButton}></div>
                      {this.state.tourcount === 2 && (
                        <ToolTip
                          toolTipLeft={"-325px"}
                          toolTipTop={"-40px"}
                          right={"-8px"}
                          top={"50px"}
                          transform={"rotate(180deg)"}
                          handleModal={this.closeToolTip}
                          children={
                            <React.Fragment>
                              <div className={styles.toolTipHeader}>
                                Add Profile Pictures
                              </div>
                              <div className={styles.toolTipBody}>
                                Its your profile and let’s make it interesting
                              </div>
                              <Button
                                type="primary"
                                backgroundColor={"#AD5DA3"}
                                fontColor={"#fff"}
                                height={30}
                                width={80}
                                label="Got It!"
                                borderRadius={2}
                                onClick={this.gotItHandler}
                              />
                            </React.Fragment>
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CenteredContent>
          </div>{" "}
          <div className={styles.milestones}>
            <CenteredContent contentWidth="1400px">
              {" "}
              <div className={styles.summaryHeader}>Milestones</div>
              <div className={styles.milestoneList}>
                Share your professional milestones and key achievements
              </div>{" "}
              <div className={styles.milestoneSection}>
                {data.map((val, i) => {
                  return <Milestone key={i} />;
                })}
                {this.state.tourcount === 3 && (
                  <ToolTip
                    toolTipLeft={"210px"}
                    toolTipBottom={"-140px"}
                    toolTipRight={"0px"}
                    left={"190px"}
                    top={"-12px"}
                    transform={"rotate(90deg)"}
                    handleModal={this.closeToolTip}
                    children={
                      <React.Fragment>
                        <div className={styles.toolTipHeader}>
                          Highlight your professional milestones
                        </div>
                        <div className={styles.toolTipBody}>
                          You can upto 5 major life events/achievements here!
                        </div>
                        <Button
                          type="primary"
                          backgroundColor={"#AD5DA3"}
                          fontColor={"#fff"}
                          height={30}
                          width={80}
                          label="Got It!"
                          borderRadius={2}
                          onClick={this.gotItHandler}
                        />
                      </React.Fragment>
                    }
                  />
                )}
              </div>{" "}
            </CenteredContent>
          </div>
          <div className={styles.journey}>
            <CenteredContent contentWidth="1400px">
              <div className={styles.usersJourney}>
                <div className={styles.summaryHeader}>
                  {this.props.username ? this.props.userName : "User"}'s
                  professional journey
                </div>
                <div className={styles.editableOptions}></div>
                <div className={styles.milestoneList}>
                  {this.props.accomplishment
                    ? this.props.accomplishment
                    : "ADD ACOMPLISHMENTS"}
                </div>
                <div className={styles.accomplishmentTag}>
                  <div className={styles.boxIcon}></div>
                  <div className={styles.eduIcon}></div>
                  <div className={styles.profileIcon}></div>
                  <div className={styles.labelIcon}></div>
                  {this.state.tourcount === 4 && (
                    <ToolTip
                      toolTipLeft={"210px"}
                      toolTipTop={"-50px"}
                      left={"-8px"}
                      top={"60px"}
                      handleModal={this.closeToolTip}
                      children={
                        <React.Fragment>
                          <div className={styles.toolTipHeader}>
                            Narrate your story
                          </div>
                          <div className={styles.toolTipBody}>
                            You can add your
                            jobs/achievements/awards/education/certifications on
                            the platform. We’ll help you build your professional
                            timeline.
                          </div>
                          <Button
                            type="primary"
                            backgroundColor={"#AD5DA3"}
                            fontColor={"#fff"}
                            height={30}
                            width={80}
                            label="Got It!"
                            borderRadius={2}
                            onClick={this.gotItHandler}
                          />
                        </React.Fragment>
                      }
                    />
                  )}
                </div>
                <div className={styles.addAccomplishment}>
                  <div className={styles.jobSection}>
                    <div className={styles.jobIcon}></div>
                    <div className={styles.jobDescription}>
                      <div style={{ display: " flex", paddingBottom: "15px" }}>
                        <div className={styles.jobTitle}>
                          {!this.props.jobTitle
                            ? "Add Header"
                            : this.props.jobTitle}
                        </div>
                        <div className={styles.horizontalLine} />
                        <div className={styles.jobDate}>
                          {!this.props.jobDate
                            ? "Add Date"
                            : `${this.props.jobMonth}` -
                              `${this.props.jobYear}` -
                              `${this.props.jobTime}`}
                        </div>
                      </div>
                      <div className={styles.jobDetails}>
                        <div className={styles.companyName}>
                          {this.props.companyName
                            ? this.props.companyName
                            : "Add company Name"}
                        </div>
                        <div className={styles.companyLocation}>
                          {this.props.companyLocation
                            ? this.props.companyLocation
                            : "Add company Location"}
                        </div>
                        <div className={styles.companyDescription}>
                          {this.props.companyDescription
                            ? this.props.companyDescription
                            : "Add company Description"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.jobSection}>
                    <div className={styles.educationIcon}></div>
                    <div className={styles.jobDescription}>
                      <div style={{ display: " flex", paddingBottom: "15px" }}>
                        <div className={styles.jobTitle}>
                          {!this.props.jobTitle
                            ? "Add Header"
                            : this.props.jobTitle}
                        </div>
                        <div className={styles.horizontalLine} />
                        <div className={styles.jobDate}>
                          {!this.props.jobDate
                            ? "Add Date"
                            : `${this.props.jobMonth}` -
                              `${this.props.jobYear}` -
                              `${this.props.jobTime}`}
                        </div>
                      </div>
                      <div className={styles.jobDetails}>
                        <div className={styles.companyName}>
                          {this.props.companyName
                            ? this.props.companyName
                            : "Add company Name"}
                        </div>
                        <div className={styles.companyLocation}>
                          {this.props.companyLocation
                            ? this.props.companyLocation
                            : "Add company Location"}
                        </div>
                        <div className={styles.companyDescription}>
                          {this.props.companyDescription
                            ? this.props.companyDescription
                            : "Add company Description"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.jobSection}>
                    <div className={styles.achievementIcon}></div>
                    <div className={styles.jobDescription}>
                      <div style={{ display: " flex", paddingBottom: "15px" }}>
                        <div className={styles.jobTitle}>
                          {!this.props.jobTitle
                            ? "Add Header"
                            : this.props.jobTitle}
                        </div>
                        <div className={styles.horizontalLine} />
                        <div className={styles.jobDate}>
                          {!this.props.jobDate
                            ? "Add Date"
                            : `${this.props.jobMonth}` -
                              `${this.props.jobYear}` -
                              `${this.props.jobTime}`}
                        </div>
                      </div>
                      <div className={styles.jobDetails}>
                        <div className={styles.companyName}>
                          {this.props.companyName
                            ? this.props.companyName
                            : "Add company Name"}
                        </div>
                        <div className={styles.companyLocation}>
                          {this.props.companyLocation
                            ? this.props.companyLocation
                            : "Add company Location"}
                        </div>
                        <div className={styles.companyDescription}>
                          {this.props.companyDescription
                            ? this.props.companyDescription
                            : "Add company Description"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.jobSection}>
                    <div className={styles.awardsIcon}></div>
                    <div className={styles.jobDescription}>
                      <div style={{ display: " flex", paddingBottom: "15px" }}>
                        <div className={styles.jobTitle}>
                          {!this.props.jobTitle
                            ? "Add Header"
                            : this.props.jobTitle}
                        </div>
                        <div className={styles.horizontalLine} />
                        <div className={styles.jobDate}>
                          {!this.props.jobDate
                            ? "Add Date"
                            : `${this.props.jobMonth}` -
                              `${this.props.jobYear}` -
                              `${this.props.jobTime}`}
                        </div>
                      </div>
                      <div className={styles.jobDetails}>
                        <div className={styles.companyName}>
                          {this.props.companyName
                            ? this.props.companyName
                            : "Add company Name"}
                        </div>
                        <div className={styles.companyLocation}>
                          {this.props.companyLocation
                            ? this.props.companyLocation
                            : "Add company Location"}
                        </div>
                        <div className={styles.companyDescription}>
                          {this.props.companyDescription
                            ? this.props.companyDescription
                            : "Add company Description"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.noJobSection}>
                    <div className={styles.jobIcon}></div>
                    <div className={styles.jobDescription}>
                      <div>
                        <div className={styles.jobTitle}>
                          Add recent Job Description/Education/Achievements
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.skillsLanguages}>
                <div style={{ position: "relative" }}>
                  {this.state.tourcount === 5 && (
                    <ToolTip
                      right={"-8px"}
                      top={"90x"}
                      toolTipLeft={"-302px"}
                      toolTipTop={"-50px"}
                      transform={"rotate(180deg)"}
                      handleModal={this.closeToolTip}
                      children={
                        <React.Fragment>
                          <div className={styles.toolTipHeader}>
                            Show us what are you skilled at!
                          </div>
                          <div className={styles.toolTipBody}>
                            You can add your skills here. Let other users know
                            what are your strengths
                          </div>
                          <Button
                            type="primary"
                            backgroundColor={"#AD5DA3"}
                            fontColor={"#fff"}
                            height={30}
                            width={80}
                            label="Got It!"
                            borderRadius={2}
                            onClick={this.gotItHandler}
                          />
                        </React.Fragment>
                      }
                    />
                  )}
                  <Skills title={"Skills"} skills={this.props.skills} />
                </div>
                <div style={{ position: "relative" }}>
                  <Skills title={"Languages"} skills={this.props.skills} />
                  {this.state.tourcount === 6 && (
                    <ToolTip
                      toolTipLeft={"-302px"}
                      toolTipTop={"-40px"}
                      right={"-8px"}
                      top={"80px"}
                      transform={"rotate(180deg)"}
                      handleModal={this.closeToolTip}
                      children={
                        <React.Fragment>
                          <div className={styles.toolTipHeader}>
                            How many languages do you know?
                          </div>
                          <div className={styles.toolTipBody}>
                            Add the laguages that you know. (Bilingual,
                            Elementry, advanced, etc)
                          </div>
                          <Button
                            type="primary"
                            backgroundColor={"#AD5DA3"}
                            fontColor={"#fff"}
                            height={30}
                            width={80}
                            label="Got It!"
                            borderRadius={2}
                            onClick={this.gotItHandler}
                          />
                        </React.Fragment>
                      }
                    />
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  {" "}
                  {this.state.tourcount === 7 && (
                    <ToolTip
                      toolTipLeft={"-302px"}
                      toolTipTop={"-20px"}
                      right={"-8px"}
                      top={"60px"}
                      transform={"rotate(180deg)"}
                      handleModal={this.closeToolTip}
                      children={
                        <React.Fragment>
                          <div className={styles.toolTipHeader}>
                            Tell us your interests
                          </div>
                          <div className={styles.toolTipBody}>
                            Add your interests to make the profile more
                            interesting
                          </div>
                          <Button
                            type="primary"
                            backgroundColor={"#AD5DA3"}
                            fontColor={"#fff"}
                            height={30}
                            width={80}
                            label="Got It!"
                            borderRadius={2}
                            onClick={this.gotItHandler}
                          />
                        </React.Fragment>
                      }
                    />
                  )}
                  <Skills title={"Interests"} skills={this.props.skills} />
                </div>
                <div style={{ position: "relative" }}>
                  {" "}
                  <Skills
                    title={"Recent Activity"}
                    skills={this.props.skills}
                  />
                  {/* enable this tool tip if the client needs tool tip for recnet activity too */}
                  {/* {this.state.tourcount === 8 && (  
                    <ToolTip
                      toolTipLeft={"130px"}
                      toolTipTop={"-20px"}
                      left={"-8px"}
                      top={"50px"}
                      handleModal={this.closeToolTip}
                      children={
                        <React.Fragment>
                          <div className={styles.toolTipHeader}>
                            Show us what are you skilled at!
                          </div>
                          <div className={styles.toolTipBody}>
                            You can add your skills here. Let other users know
                            what are your strengths
                          </div>
                          <Button
                            type="primary"
                            backgroundColor={"#AD5DA3"}
                            fontColor={"#fff"}
                            height={30}
                            width={80}
                            label="Got It!"
                            borderRadius={2}
                            onClick={this.gotItHandler}
                          />
                        </React.Fragment>
                      }
                    />
                  )} */}
                </div>
              </div>
            </CenteredContent>
          </div>{" "}
          <div
            className={
              this.state.tourcount > 0
                ? styles.removebanner
                : styles.notificationToolTip
            }
          >
            <ToolTip
              children={
                <div className={styles.toolTipBanner}>
                  <div className={styles.notifyIcon}></div>Get to know what can
                  be done with your The Star In Me Profile.
                  <div
                    className={styles.toolTipStart}
                    onClick={() => this.startTour()}
                  >
                    Start Tour
                  </div>
                </div>
              }
              toolTipBottom={"0"}
              toolTipWidth={"100vw"}
              textWidth={"100%"}
              displayTriangle={"none"}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
