import React, { Component, Fragment } from "react";
import styles from "./FilterSliderComponent.css";
export const filterData = [
  { name: "LeaderShip", activeFlag: false },
  { name: "Personal Branding", activeFlag: false, id: 1 },
  { name: "Career", activeFlag: false, id: 2 },
  { name: "Personal Branding", activeFlag: false, id: 3 },
  { name: "Finance", activeFlag: false, id: 4 },
  { name: "LeaderShip", activeFlag: false, id: 5 },
  { name: "Personal Branding", activeFlag: false, id: 6 },
  { name: "Career", activeFlag: false, id: 7 },
  { name: "Personal Branding", activeFlag: false, id: 8 },
  { name: "Finance", activeFlag: false, id: 9 }
];

export default class FilterSliderComponent extends Component {
  state = {
    filterData: filterData,
    position: 0,
    newArr: []
  };
  goForward = () => {
    if (this.state.position < filterData.length - 1) {
      this.setState({ position: this.state.position + 1 });
    }
  };
  goBack = () => {
    if (this.state.position > 0) {
      this.setState({ position: this.state.position - 1 });
    }
  };
  activeClickHandler = id => {
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (i === id) {
        copyArr[i].activeFlag = !copyArr[i].activeFlag;
      }
    });
    this.setState(
      {
        filterData: copyArr
      },
      () => {
        this.onFilterHandler();
      }
    );
  };

  onFilterHandler = () => {
    let newArr = this.state.filterData.filter(m => m.activeFlag === true);
    this.setState({
      newArr: newArr
    });
  };
  onClearAllHandler = () => {
    let newArr = [...this.state.newArr];
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (m.activeFlag === true) {
        copyArr[i].activeFlag = false;
      }
    });
    newArr.length = 0;
    this.setState({
      newArr: newArr,
      filterData: copyArr
    });
  };

  crossClickHandler = id => {
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (m.id === id) {
        copyArr[i].activeFlag = false;
      }
    });
    let newArr = this.state.newArr.filter(m => m.id !== id);

    this.setState({
      newArr: newArr,
      filterData: copyArr
    });
  };
  render() {
    const translationAmount = -(12 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const style = {
      transform: transform
    };
    return (
      <Fragment>
        <div className={styles.leftArrow} onClick={() => this.goBack()} />
        <div className={styles.tagContainerWrappper}>
          <div className={styles.tagContainer} style={style}>
            {this.state.filterData.map((m, i) => {
              return (
                <div
                  onClick={() => this.activeClickHandler(i)}
                  className={
                    m.activeFlag ? styles.tagButtonActive : styles.tagButton
                  }
                >
                  {m.name}
                </div>
              );
            })}
          </div>

          {this.state.newArr.length > 0 && (
            <div className={styles.filterOptionWrapper}>
              <div
                className={styles.clearAllButton}
                onClick={this.onClearAllHandler}
              >
                CLEAR ALL
              </div>
              <div className={styles.filterOptionBase}>
                {this.state.newArr.map(m => {
                  return (
                    <div className={styles.filterOption}>
                      {m.name}
                      <div
                        onClick={() => this.crossClickHandler(m.id)}
                        className={styles.filterOptionCross}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightArrow} onClick={() => this.goForward()} />
      </Fragment>
    );
  }
}
