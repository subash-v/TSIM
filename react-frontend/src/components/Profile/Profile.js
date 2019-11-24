import React, { Component } from "react";
import styles from "./Profile.css";
import CenteredContent from "../../core/CenteredContent";
import Milestone from "../../core/Milestone";
import Skills from "../Skills/Skills";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";

const data = [{}, {}, {}, {}, {}];

const work = [{}, {}, {}, {}];
const education = [{}, {}, {}, {}];
const certification = [{}, {}, {}, {}];
const awards = [{}, {}, {}, {}];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <PrimaryHeaderContainer />
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
                <Skills title={"Skills"} skills={this.props.skills} />
                <Skills title={"Languages"} skills={this.props.skills} />
                <Skills title={"Interests"} skills={this.props.skills} />
                <Skills title={"Recent Activity"} skills={this.props.skills} />
              </div>
            </CenteredContent>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
