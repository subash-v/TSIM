import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./RegisterDetailsModule.css";
import Back from "../../../images/Back.svg";
import Icon from "../../../core/Icon";
import VerticalStatus from "../../Feed/VerticalStatus";
import time from "../../../images/time-grey.svg";
import calander from "../../../images/Date-grey.svg";
import add_fill from "../../../images/Add_Fill.svg";
import sub from "../../../images/Subtract-Fill-color.svg";
import Button from "../../general/Button";
export default class RegisterDetailsModule extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.modalBase}>
            <div className={styles.registerHeader}>
              <div className={styles.icon}>
                <Icon image={Back} size={22} />
              </div>
              <div className={styles.registerText}>Registration Details</div>
            </div>
            <div className={styles.verticalScroller}>
              <VerticalStatus first="active" />
            </div>
            <div className={styles.contentHolder}>
              <div className={styles.selectHeader}>
                Select number of tickets
              </div>
              <div className={styles.buildingBlocks}>
                Building a Strong Personal Brand by Uma Kasoji
              </div>
              <div className={styles.advanceText}>Advanced Level</div>
              <div className={styles.iconWithText}>
                <div className={styles.icon}>
                  <Icon image={calander} size={15} />
                </div>
                <div className={styles.subText}>6th September 2019</div>
              </div>
              <div className={styles.iconWithText}>
                <div className={styles.icon}>
                  <Icon image={time} size={15} />
                </div>
                <div className={styles.subText}>5:30 pm - 7:30 pm</div>
              </div>
              <div className={styles.personHolder}>
                <div className={styles.textHolder}>
                  <div className={styles.personText}>Per Person</div>
                  <div className={styles.cost}>INR 1450 per person</div>
                </div>
                <div className={styles.counter}>
                  <Icon image={sub} size={50} />
                  <div className={styles.counterText}>1</div>
                  <Icon image={add_fill} size={50} />
                </div>
              </div>
              <div className={styles.amountHolder}>
                <div className={styles.textHolder}>
                  <div className={styles.total}>Total</div>
                  <div className={styles.amount}>INR 1,450</div>
                </div>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#fff"}
                  height={50}
                  width={170}
                  label="Proceed"
                  borderRadius={5}
                />
              </div>
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}
