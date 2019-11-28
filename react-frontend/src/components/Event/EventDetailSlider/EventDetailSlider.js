import React from "react";
import PropTypes from "prop-types";
import styles from "./EventDetailSlider.css";
export default class EventDetailSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            juke:
                this.props.children && this.props.children.length
                    ? this.props.children.length
                    : 0,
            position: 0,
            showAboutTheWorkshop: true
        };
    }


    componentDidMount() {
        if (this.props.interval && !this.props.stopSlider) {

        }
    }

    goForward = () => {
        const childCount = React.Children.count(this.props.children);
        if (this.state.position + 1 == childCount) {
            this.props.reachedEnd();
        }
        if (this.state.position < 7) {
            if ((Math.abs(this.state.position) + 1) % childCount === 0) {
                this.setState(
                    {
                        juke: this.state.juke - this.props.children.length
                    },
                    () => {
                        this.setState({ position: this.state.position + 1 });
                    }
                );
            } else {
                this.setState({ position: this.state.position + 1 });
            }
            clearInterval(this.timer);
        }
    };
    goBack = () => {
        if (this.state.position > 0) {
            const childCount = React.Children.count(this.props.children);
            if (Math.abs(this.state.position) === Math.abs(this.state.juke)) {
                this.setState(
                    {
                        juke: this.state.juke + childCount
                    },
                    () => {
                        this.setState({ position: this.state.position - 1 });
                    }
                );
            } else {
                this.setState({ position: this.state.position - 1 });
            }
        }
        clearInterval(this.timer);
    };

    sliderClickHandler = (stepNumber) => {
        this.setState({ position: stepNumber });
        clearInterval(this.timer);
    }
    render() {
        const translationAmount = -(100 * this.state.position);
        const transform = `translateX(${translationAmount}%)`;
        const style = {
            transform: transform
        };
        const jukeTranslationAmount = -(100 * this.state.juke);
        const jukeTransform = `translateX(${jukeTranslationAmount}%)`;
        const jukeStyle = {
            transform: jukeTransform
        };
        return (
            <div className={styles.base}>
                <div className={styles.rightArrow} onClick={() => this.goForward()} />
                <div className={styles.leftArrow} onClick={() => this.goBack()} />
                <div className={styles.sliderWrapper}>
                    <div className={styles.slider} style={jukeStyle}>
                        <div style={style} className={styles.imageHolder}>
                            {this.props.children.map((child, i) => {
                                return (
                                    <div className={styles.item} key={i}>
                                        {child}
                                    </div>
                                );
                            })}
                            {this.props.children.map((child, i) => {
                                return (
                                    <div className={styles.item} key={i}>
                                        {child}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.eventBottomWrapper}>
                    <div className={styles.eventHeader}>{this.props &&
                        this.props.stepsInfo &&
                        this.props.stepsInfo[this.state.position].title}</div>
                    <div className={styles.eventTimeLocationWrapper}>


                        <div className={styles.eventTime}>{this.props &&
                            this.props.stepsInfo &&
                            this.props.stepsInfo[this.state.position].time}
                        </div>
                        <div className={styles.eventDate}> {this.props &&
                            this.props.stepsInfo &&
                            this.props.stepsInfo[this.state.position].date}
                        </div>
                        <div className={styles.eventLocation}> {this.props &&
                            this.props.stepsInfo &&
                            this.props.stepsInfo[this.state.position].location}
                        </div>


                    </div>

                    <div className={styles.eventSlideBar} >
                        <ul><li onMouseOver={() => { this.setState({ showAboutTheWorkshop: true }) }}>About the Workshop
                        </li><li onMouseOver={() => { this.setState({ showAboutTheWorkshop: false }) }}>Testimonials
                            </li></ul>
                        <div className={styles.eventDetailsBottomWrapper}>
                            {this.state.showAboutTheWorkshop ? <div className={styles.aboutTheEvent} >
                                Create a Personal Brand that expresses your authentic value,
                                 helps you stand out from the crowd, and increases your visibility,
                                 power, and influence Discover your Unique Brand Essence
                                  Build a Brand from the inside out that is deeply aligned with
                                  what you most value and stand for. Put your brand into motion,
                                   by converting the essence of your brand into concrete and measurable goals,
                                   and mindful action.
                        </div> :
                                <div className={styles.testimonials} >
                                    testimonials  power, and influence Discover your Unique Brand Essence
                                  Build a Brand from the inside out that is deeply aligned with
                                  what you most value and stand for. Put your brand into motion,
                                   by converting the essence of your brand into concrete and measurable goals,
                                   and mindful action.
                        </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EventDetailSlider.propTypes = {
    interval: PropTypes.number
};
EventDetailSlider.defaultProps = {
    interval: 2
};
