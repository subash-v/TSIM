import React from "react";
import styles from "../Footer/Footer.css";
import img from "../Footer/img.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.rowContainer}>
          <div className={styles.column}>
            <div className={styles.buttons}>ABOUT ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>COACHES ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>EVENTS ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>BLOGS ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>PARTNERS ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>PRIVACY POLICY ></div>
          </div>
          <div className={styles.column}>
            <div className={styles.buttons}>TERMS AND CONDITIONS ></div>
          </div>
        </div>

        <div className={styles.feedbackBlock}>
          <img className={styles.feedbackImg} src={img} />
          <div className={styles.feedbackTxt}>feedback@thestarinme.com</div>
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.socialBlock}>
            <img className={styles.socialImg} src={img} />
            <img className={styles.socialImg} src={img} />
            <img className={styles.socialImg} src={img} />
            <img className={styles.socialImg} src={img} />
            <img className={styles.socialImg} src={img} />
          </div>

          <div className={styles.touch}>
            <p>GET IN TOUCH</p>
          </div>

          <div className={styles.copyrightBlock}>
            <img className={styles.appLogo} src={img} />

            <p className={styles.copyrightTxt}>
              © Copyright 2019 thestarinme.com All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}
