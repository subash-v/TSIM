import React, { Component } from "react";
import styles from "./EventDetailSliderComponent.css";

import Image from "../../../core/Image";
import EventDetailSlider from "./EventDetailSlider";
import CenterSlideModal from '../../modules/component/CenterSlideModel/CenterSlideModel'
import { stepsInfo } from '../EventSliderComponent/EventSliderComponent'

class EventDetailSliderComponent extends Component {
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

                <div className={styles.showCrossWrapper}> <div className={styles.showCross} onClick={() => this.props.closeModal()} /> </div>
                <CenterSlideModal>
                    <div className={styles.baseWrapper}>
                        <div className={styles.base}>
                            <div className={styles.sliderWrapper}>
                                <EventDetailSlider
                                    stepsInfo={stepsInfo}
                                    stopSlider={this.state.stopSlider}
                                    {...this.props}
                                    reachedEnd={() => this.showEventSelector()}
                                >
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

                                </EventDetailSlider>
                            </div>


                        </div>
                    </div>
                </CenterSlideModal>
            </React.Fragment>
        );
    }
}

export default EventDetailSliderComponent;
