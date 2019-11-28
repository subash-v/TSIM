import React, { Component } from "react";
import styles from "./AddMoreIntrest.css";
import Button from "../general/Button";
const data = [
  { name: "ART" },
  { name: "business" },
  { name: "Product development" },
  { name: "Architecture" },
  { name: "Philosophy" }
];
export default class AddMoreIntrest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
  handleSelect = val => {
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
    return (
      <div className={styles.base}>
        <div className={styles.heading}>Add more interests</div>
        <div className={styles.topicBase}>
          {data.map((val, i) => {
            return (
              <div
                className={styles.topicContainer}
                onClick={() => {
                  this.handleSelect(val);
                }}
              >
                <div
                  className={
                    this.state.selected &&
                    this.state.selected.length > 0 &&
                    this.state.selected.find(categories => {
                      return categories.name === val.name;
                    })
                      ? styles.topicSelected
                      : styles.topic
                  }
                >
                  {val.name}
                </div>
                <div
                  className={
                    this.state.selected &&
                    this.state.selected.length > 0 &&
                    this.state.selected.find(categories => {
                      return categories.name === val.name;
                    })
                      ? styles.checkIconVisible
                      : styles.checkIcon
                  }
                ></div>
              </div>
            );
          })}
        </div>
        <div className={styles.buttonContainer}>
          <Button
            type="primary"
            backgroundColor={"#fff"}
            fontColor={"#1A1A1A"}
            borderColor={"#1A1A1A"}
            height={30}
            width={152}
            label="Discover more"
            borderRadius={5}
          />
        </div>
      </div>
    );
  }
}
