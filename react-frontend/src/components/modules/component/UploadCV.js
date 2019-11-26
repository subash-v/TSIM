import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./UploadCV.css";
import CancelIcon from "../../../images/CancelIcon.svg";
import UploadIcon from "../../../images/Upload.svg";
import Button from "../../general/Button.js";

export default class UploadCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      image: null
    };
  }
  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
    }
  };
  handleChange(event) {
    if (event.target.files[0]) {
      let panImage = URL.createObjectURL(event.target.files[0]);
      this.setState({
        file: event.target.files[0],
        image: panImage
      });
    }
  }
  ImageChange(event) {
    this.setState({
      image: null,
      file: null
    });
  }
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.base}>
            <div className={styles.heading}>Upload CV</div>
            <div className={styles.container}>
              <div className={styles.iconWithNameContainer}>
                <div className={styles.icon}>
                  {this.state.image && (
                    <div className={styles.cancel}>
                      <input
                        type="image"
                        onClick={e => this.ImageChange(e)}
                        src={CancelIcon}
                        alt="cancelIcon"
                        height="17px"
                        width="18px"
                      />
                    </div>
                  )}

                  {this.state.image && (
                    <div className={styles.imageStyle}>
                      <img
                        src={this.state.image}
                        alt="icon"
                        height="120px"
                        width="100px"
                      />
                    </div>
                  )}
                  {this.state.file && (
                    <div className={styles.iconWithName}>
                      {this.state.file.name}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.iconWithImageContainer}>
                <div className={styles.uploadIcon}>
                  <input
                    id="img-icon"
                    type="file"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <label for="img-icon">
                    <img
                      src={UploadIcon}
                      alt="upload"
                      width="40px"
                      height="auto"
                    />
                  </label>

                  <div className={styles.iconSubHeding}>Upload your CV</div>
                  <div className={styles.iconName}>Max.file size:2MB</div>
                  <div className={styles.iconName}>PDF only</div>
                </div>
              </div>
              <div className={styles.button}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A;"}
                  fontColor={"#fff"}
                  label="UPLOAD"
                  height={50}
                  width={263}
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
