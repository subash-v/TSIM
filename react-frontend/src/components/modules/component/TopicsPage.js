import React from "react";
import PropTypes from "prop-types";
import styles from "./TopicsPage.css";
import BottomSlideModal from "./BottomSlideModal";
import landingImage from "../../Images/b.jpg";
import profile from "../../../images/Profile.jpg";
import Button from "../../general/Button.js";
export const SIZE_3 = 3;
const topics = [
  { name: "Design" },
  { name: "Business" },
  { name: "Self Development" },
  { name: "Literature" },
  { name: "Technology" },
  { name: "Politics" },
  { name: "Management" },
  { name: "Fitness" }
];
export default class TopicsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
  handlecategoryClick = val => {
    console.log(val);
    let data = [];
    let dataExist =
      this.state.selected &&
      this.state.selected.length > 0 &&
      this.state.selected.find((categories, i) => {
        return categories.name === val.name;
      });
    if (dataExist) {
      var index = this.state.selected.findIndex(function(cat) {
        return cat.name == dataExist.name;
      });
      data.push(...this.state.selected);
      if (index == 0) {
        data.splice(index, 1);
        this.setState({ selected: data });
      } else {
        data.splice(index, index);
        this.setState({ selected: data });
      }
    } else {
      data.push(...this.state.selected);
      data.push(val);
      this.setState({ selected: data });
    }
  };
  render() {
    console.log(this.state.selected);
    return (
      <BottomSlideModal>
        <div className={styles.base}>
          <div className={styles.container}>
            <div className={styles.heading}>
              CHOOSE TOPICS THAT INTEREST YOU
            </div>
            <div className={styles.subHeading}>Select at least 5 interest</div>

            <div className={styles.iconBase}>
              {topics.map(value => {
                return (
                  <div
                    className={styles.iconWithNameContainer}
                    onClick={() => this.handlecategoryClick(value)}
                  >
                    <div className={styles.iconWithName}>
                      <img
                        src={
                          this.state.selected &&
                          this.state.selected.length > 0 &&
                          this.state.selected.find(categories => {
                            return categories.name === value.name;
                          })
                            ? profile
                            : landingImage
                        }
                        className={styles.icon}
                        alt="Topics"
                      ></img>
                      <div
                        className={
                          this.state.selected &&
                          this.state.selected.length > 0 &&
                          this.state.selected.find(categories => {
                            return categories.name === value.name;
                          })
                            ? styles.textColored
                            : styles.topic
                        }
                      >
                        {value.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.rectangle}>
              <div className={styles.button}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#fff"}
                  label="TAKE ME TO CURATED FEED"
                  height={50}
                  width={263}
                  borderRadius={5}
                />
              </div>
            </div>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
TopicsPage.propTypes = {
  initials: PropTypes.string.isRequired,
  image: PropTypes.string,
  size: PropTypes.oneOf([SIZE_3]),
  border: PropTypes.shape({
    color: PropTypes.string,
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.number
  })
};
TopicsPage.defaultProps = {
  initials: "NA",
  size: 2,
  border: {
    color: "transparent",
    width: 0,
    radius: "50%"
  }
};
