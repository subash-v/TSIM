import React, { Component } from "react";
import styles from "./SliderComponent.css";
import img1 from "../../../../images/Onboarding_Desktop_Profile.svg";
import img4 from "../../../../images/Onboarding_Desktop_Resources.svg";
import img3 from "../../../../images/Onboarding_Desktop_User_feed.svg";
import img2 from "../../../../images/Onboarding_Desktop_Events.svg";
import vertical_img1 from "../../../../images/Onboarding_Mobile.svg";
import vertical_img2 from "../../../../images/Onboarding_Mobile2.svg";
import vertical_img3 from "../../../../images/Onboarding_Mobile3.svg";
import vertical_img4 from "../../../../images/Onboarding_Mobile4.svg";
import vertical_img5 from "../../../../core/Image";
import Slider from "./Slider";
import BottomSlideModal from "../BottomSlideModal";
import DesktopOnly from "../../../general/DesktopOnly";
import MobileOnly from "../../../general/MobileOnly";
import Image from "../../../../core/Image";

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopSlider: false
    };
  }
  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
      this.props.showEventSelector();
    }
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.baseWrapper}>
            <div className={styles.base}>
              <div className={styles.sliderWrapper}>
                <Slider
                  stepsInfo={stepsInfo}
                  stopSlider={this.state.stopSlider}
                  {...this.props}
                  reachedEnd={() => this.showEventSelector()}
                >
                  <DesktopOnly>
                    {stepsInfo &&
                      stepsInfo.map(value => {
                        return (
                          <div className={styles.topContainer}>
                            <div className={styles.innerImage}>
                              <Image image={value.img} />
                            </div>
                          </div>
                        );
                      })}
                  </DesktopOnly>
                  <MobileOnly>
                    {stepsInfoMobile &&
                      stepsInfoMobile.map(value => {
                        return (
                          <div className={styles.topContainer}>
                            <div className={styles.innerImage}>
                              <Image image={value.img} />
                            </div>
                          </div>
                        );
                      })}
                  </MobileOnly>
                </Slider>
              </div>
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}

export default SliderComponent;

const stepsInfo = [
  {
    id: 1,
    stepNumber: 1,
    img: img1
  },
  {
    id: 2,
    stepNumber: 2,
    img: img2
  },

  {
    id: 3,
    stepNumber: 3,
    img: img3
  },
  {
    id: 4,
    stepNumber: 4,
    img: img4
  }
];
const stepsInfoMobile = [
  {
    id: 1,
    stepNumber: 1,
    img: vertical_img1
  },
  {
    id: 2,
    stepNumber: 2,
    img: vertical_img2
  },

  {
    id: 3,
    stepNumber: 3,
    img: vertical_img3
  },
  {
    id: 4,
    stepNumber: 4,
    img: vertical_img4
  }
];
