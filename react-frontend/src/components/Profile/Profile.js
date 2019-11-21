import React, { Component } from "react";
import styles from "./Profile.css";
import PrimaryHeader from "../HomePage/PrimaryHeader";
import CenteredContent from "../../core/CenteredContent";

export default class Profile extends Component {
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
                      <div className={styles.editIcon}></div>
                    </div>
                    <div className={styles.editableOptions}></div>
                  </div>
                  <div className={styles.profileDesignation}>
                    {this.props.designation ? "" : "Add Designation"}
                    <div className={styles.editIcon}></div>
                  </div>
                  <div className={styles.profileLocation}>
                    {"Add Location"}
                    <div className={styles.editIcon}></div>
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
                      Add bio<div className={styles.editIcon}></div>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
