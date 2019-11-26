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
                    <div
                      style={{
                        backgroundImage: `url(${URL.createObjectURL(
                          this.state.file[0]
                        )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      // src={image0}
                      className={styles.homepageCarousal}
                    />
                  </div>

                  {/* <div className={styles.mySlides}>
                    <div
                      style={{
                        // backgroundImage: `url(${URL.createObjectURL(
                        //   this.state.file[1]
                        // )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      // src={image0}
                      className={styles.homepageCarousal}
                    />
                  </div>
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        // backgroundImage: `url(${URL.createObjectURL(
                        //   this.state.file[2]
                        // )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      // src={image0}
                      className={styles.homepageCarousal}
                    />
                  </div>
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        // backgroundImage: `url(${URL.createObjectURL(
                        //   this.state.file[3]
                        // )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      // src={image0}
                      className={styles.homepageCarousal}
                    />
                  </div>
                  <div className={styles.mySlides}>
                    <div
                      style={{
                        // backgroundImage: `url(${URL.createObjectURL(
                        //   this.state.file[4]
                        // )})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10% 20%",
                        backgroundSize: "90%"
                      }}
                      // src={image0}
                      className={styles.homepageCarousal}
                    />
                  </div> */}
                </div>
              ) : (
                <div className={styles.uploadImageDummy} />
              )}
            </div>
            <div className={styles.uploadImageGroup}>
              {" "}
              <div className={styles.uploadPlusButton}>
                {this.state.file[0] < 0 ? (
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
                ) : (
                  <div className={styles.imageWithCross}>
                    <div
                      style={{
                        backgroundImage: `url(${URL.createObjectURL(
                          this.state.file[0]
                        )})`
                      }}
                    ></div>
                    <div className={styles.crossButton}></div>
                  </div>
                )}
              </div>
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
