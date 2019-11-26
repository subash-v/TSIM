import React, { Component } from "react";
import styles from "./Profile.css";

class ImageUplaod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      maxSlide: 5
    };
  }

  handleScroll = () => {
    this.setState({ lastScrollY: window.scrollY });
  };

  incrementTime = () => {
    if (this.state.slideIndex < this.state.maxSlide) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    } else {
      this.setState({
        slideIndex: 0
      });
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);

    // if (this.state.slideIndex <= this.state.maxSlide) {
    //   var varss = setInterval(() => {
    //     this.incrementTime();
    //   }, 5000);
    // }
    // if (this.state.slideIndex > this.state.maxSlide) {
    //   this.setState({
    //     slideIndex: 0
    //   });
    //   clearInterval(varss);
    // }
  };

  render() {
    return (
      <div className={styles.base}>
        <div className={styles.uploadImageDummy}></div>
        <div className={styles.uploadImageGroup}>
          {" "}
          <div className={styles.uploadPlusButton}>
            <input
              type="file"
              onChange={e => this.onChange(e)}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "44px",
                opacity: "0",
                height: "44px"
              }}
              // onClick={() => (this.fileInput.value = null)}
            />
          </div>
          <div className={styles.uploadPlusButton}>
            <input
              type="file"
              onChange={e => this.onChange(e)}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "44px",
                opacity: "0",
                height: "44px"
              }}
              // onClick={() => (this.fileInput.value = null)}
            />
          </div>
          <div className={styles.uploadPlusButton}>
            <input
              type="file"
              onChange={e => this.onChange(e)}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "44px",
                opacity: "0",
                height: "44px"
              }}
              // onClick={() => (this.fileInput.value = null)}
            />
          </div>
          <div className={styles.uploadPlusButton}>
            <input
              type="file"
              onChange={e => this.onChange(e)}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "44px",
                opacity: "0",
                height: "44px"
              }}
              // onClick={() => (this.fileInput.value = null)}
            />
          </div>
          <div className={styles.uploadPlusButton}>
            <input
              type="file"
              onChange={e => this.onChange(e)}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                width: "44px",
                opacity: "0",
                height: "44px"
              }}
              // onClick={() => (this.fileInput.value = null)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUplaod;
