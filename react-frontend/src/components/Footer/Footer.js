import React from "react";
import styles from "../Footer/Footer.css";
import facebook from "../../images/Facebook.svg";
import linkedin from "../../images/Linkedin.svg";
import twitter from "../../images/Twitter.svg";
import instagram from "../../images/Instagram.svg";
import youtube from "../../images/Youtube.svg";
import tsim_logo from "../../images/tsim_logo.png";
import mail from "../../images/Mail.svg";

export default class Footer extends React.Component {
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.rowContainer}>
          <div className={styles.column}>
            <div className={styles.buttons}>
              ABOUT <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>
              COACHES <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div
              className={styles.buttons}
              onClick={() => this.handleredirect("/events")}
            >
              EVENTS <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div
              className={styles.buttons}
              onClick={() => this.handleredirect("/blog")}
            >
              BLOGS <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>
              PARTNERS <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>
              PRIVACY POLICY <div className={styles.arrow}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>
              TERMS AND CONDITIONS <div className={styles.arrow}></div>
            </div>
          </div>
        </div>

        <div className={styles.feedbackBlock}>
          <img className={styles.feedbackImg} src={mail} alt="" />
          <div className={styles.feedbackTxt}>feedback@thestarinme.com</div>
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.socialBlock}>
            <img className={styles.socialImg} src={facebook} alt="" />
            <img className={styles.socialImg} src={linkedin} alt="" />
            <img className={styles.socialImg} src={twitter} alt="" />
            <img className={styles.socialImg} src={instagram} alt="" />
            <img className={styles.socialImg} src={youtube} alt="" />
          </div>

          <div className={styles.touch}>
            <p>GET IN TOUCH</p>
          </div>

          <div className={styles.copyrightBlock}>
            <img className={styles.appLogo} src={tsim_logo} alt="" />

            <p className={styles.copyrightTxt}>
              © Copyright 2019 thestarinme.com
              <br /> All Rights Reserved
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
