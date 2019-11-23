import React, { Component } from "react";
import styles from "./Feed.css";
import CenteredContent from "../../core/CenteredContent";
import profileImage from "../Images/b.jpg";
import Image from "../../core/Image";
import VerticalStatus from "./VerticalStatus";
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
      position: 0
    };
  }
  goForward = () => {
    if (this.state.position < data.length - 1) {
      this.setState({ position: this.state.position + 1 });
    }
  };
  goBack = () => {
    if (this.state.position > 0) {
      this.setState({ position: this.state.position - 1 });
    }
  };
  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const style = {
      transform: transform
    };
    return (
      <div>
        <div className={styles.indicatorHolder}>
          <VerticalStatus first="complete" second="active" third="incompele" />
        </div>
        <CenteredContent>
          <div className={styles.dataHolderWrapper}>
            <div className={styles.leftSidePannel}>
              <div className={styles.dataDiv}>john</div>
              <div className={styles.dataDiv}>priya</div>
              <div className={styles.dataDiv}>john-priya</div>
              <div className={styles.dataDiv}>john</div>
            </div>
            <div className={styles.rightSidePannel}>
              <div className={styles.caurosel}>
                <div className={styles.slider} style={style}>
                  {data.map((val, i) => {
                    return (
                      <div className={styles.cauroselData}>
                        <Image image={val.data} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.forwrdBack}>
                <div className={styles.back} onClick={() => this.goBack()}>
                  {" "}
                  {"<"}{" "}
                </div>
                <div
                  className={styles.forward}
                  onClick={() => this.goForward()}
                >
                  >
                </div>
              </div>
              <div className={styles.dataDiv}>john</div>
              <div className={styles.dataDiv}>priya</div>
              <div className={styles.dataDiv}>john-priya</div>
            </div>
            <div className={styles.centerSection}>
              {[1, 2, 3, 4, 5].map((data, i) => {
                return <div className={styles.dataDiv}>{data}</div>;
              })}
            </div>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
