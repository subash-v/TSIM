import React, { Component } from "react";
import styles from "./ImageUpload.css";
import BottomSlideModal from "../modules/component/BottomSlideModal";

class ImageUplaod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      slideIndex: 0,
      maxSlide: 5
    };
  }

  onChange = async event => {
    await this.setState({ file: [...this.state.file, ...event.target.files] });
  };

  removeImageFromList = val => {
    let file = this.state.file;
    let newarray = file.splice(0, val);
    this.setState({
      file: newarray
    });
  };

  getCroppedImageUrl = () => {
    let file = this.state.file;
    if (file.length > 0) {
      file.map((val, i) => {
        return this.setState({
          file: URL.createObjectURL(val[i])
        });
      });
    }
  };

  render() {
    return (
      <BottomSlideModal>
        <div className={styles.base}>
          <div className={styles.heading}>Add Profile Photo</div>
          <div style={{ position: "relative" }}>
            <div className={styles.uploadImageSection}>
              {this.state.file.length > 0 ? (
                <div>
                  <div className={styles.mySlides}>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${URL.createObjectURL(
                          this.state.file[0]
                        )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      className={styles.homepageCarousal}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.uploadImageDummy} />
              )}
            </div>
            <div className={styles.uploadImageGroup}>
              {" "}
              {!this.state.file[0] ? (
                <div className={styles.uploadPlusButton}>
                  <input
                    type="file"
                    accept={"image"}
                    onChange={e => this.onChange(e)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      width: "44px",
                      opacity: "0",
                      height: "44px"
                    }}
                    value={this.value}
                  />
                </div>
              ) : (
                <div
                  className={styles.imageWithCross}
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(
                      this.state.file[0]
                    )})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "center"
                  }}
                >
                  <div
                    className={styles.crossButton}
                    onClick={() => this.removeImageFromList(0)}
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.instruction1}>
              You can upload upto 5 photos
            </div>
            <div className={styles.instruction2}>
              Resolution should be more than 500 * 500 px
            </div>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}

export default ImageUplaod;
