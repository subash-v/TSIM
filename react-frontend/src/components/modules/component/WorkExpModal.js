import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";

import Button from "../../../core/Button";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "./WorkExpModal.css";
export default class WorkExpModal extends Component {
  render() {
    return (
      <BottomSlideModal width="auto">
        <div className={styles.centermodal}>
          <div className={styles.headerCont}>
            <div className={styles.profileheader}>Edit Work Experience</div>
          </div>
          <div className={styles.brdr}></div>

          <div className={styles.inpcont}>
            <Input className={styles.input} type="text"></Input>

            <Input className={styles.Input} type="text"></Input>

            <div className={styles.label}>Professional Summary</div>
            <div>
              <Textarea
                placeholder="(For ex: A Human resources leader with over 18 years of experience across Talent management, HR Policy and Recruitment)"
                rows={"3"}
              />
            </div>
          </div>
          <div className={styles.buttonCont}>
            <Button
              width="160px"
              backgroundColor="transparent"
              color="#4F439A"
              label="Cancel"
            ></Button>
            <Button
              width="160px"
              backgroundColor="#E0DEED"
              color="#4F439A"
              label="Save Changes"
            ></Button>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
