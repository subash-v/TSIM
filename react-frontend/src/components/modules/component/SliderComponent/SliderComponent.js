import React, { Component } from "react";
import styles from "./SliderComponent.css";
import img1 from '../../../../images/Onboarding_Desktop_Profile.svg';
import img4 from '../../../../images/Onboarding_Desktop_Resources.svg'
import img3 from '../../../../images/Onboarding_Desktop_User_feed.svg'
import img2 from '../../../../images/Onboarding_Desktop_Events.svg'
import Image from "../../../../core/Image";
import Slider from "./Slider";

class SliderComponent extends Component {
    render() {
        return (
            <div className={styles.baseWrapper}>
                <div className={styles.base}>
                    <div className={styles.sliderWrapper}>
                        <Slider stepsInfo={stepsInfo} {...this.props}>
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
                        </Slider>
                    </div>
                </div>
            </div>
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
