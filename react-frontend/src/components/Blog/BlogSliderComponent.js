import React, { Component } from "react";
import styles from "./BlogSliderComponent.css";
import img1 from "../Images/b.jpg";
import img2 from "../Images/f.jpg";
import img3 from "../Images/p.jpg";
import img4 from "../Images/p.jpg";
import Image from "../../core/Image";
import BlogSlider from "./BlogSlider";

class BlogSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopSlider: false
    };
  }
  showBlogSelector = () => {
    if (this.props.showBlogSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
      this.props.showBlogSelector();
    }
  };
//   showBlogDetailsModule = () => {
//     if (this.props.showBlogDetailsModule) {
//       this.props.showBlogDetailsModule();
//     }
//   };
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.baseWrapper}
        >
          <div className={styles.base}>
            <div className={styles.sliderWrapper}>
              <BlogSlider
                stepsInfo={stepsInfo}
                stopSlider={this.state.stopSlider}
                {...this.props}
                reachedEnd={() => this.showBlogSelector()}
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
              </BlogSlider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogSliderComponent;

export const stepsInfo = [
  {
    id: 1,
    stepNumber: 1,
    img: img1,
    
  },
  {
    id: 2,
    stepNumber: 2,
    img: img2,
   
  },

  {
    id: 3,
    stepNumber: 3,
    img: img3,
    
  },
  {
    id: 4,
    stepNumber: 4,
    img: img4,
   
    
  },
  {
    id: 5,
    stepNumber: 5,
    img: img1,
    
  },
  {
    id: 6,
    stepNumber: 6,
    img: img2,
    
  },

  {
    id: 7,
    stepNumber: 7,
    img: img3,
    
  },
  {
    id: 8,
    stepNumber: 8,
    img: img4,
   
  }
];
