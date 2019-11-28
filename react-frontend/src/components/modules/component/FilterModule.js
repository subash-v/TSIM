import React, { Component } from "react";
import RightSlideModal from "./RightSlideModal";
import styles from "./FilterModule.css";
import SelectBox from "../../../core/SelectBox";
export default class FilterModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered:
        this.props && this.props.filterList && this.props.filterList[0].name,
      hoverInType: null,
      selected: []
    };
  }
  handleClick = () => {};
  hoverIn = value => {
    this.setState({
      hovered: value
    });
  };
  hoverOut() {
    this.setState({
      hovered: null,
      hoverInType: null,
      selected: []
    });
  }
  handlecategoryClick = val => {
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
  handleChange = () => {};
  render() {
    console.log(this.props.filterList);
    let currentCategory =
      this.props &&
      this.props.filterList &&
      this.props.filterList.find(categories => {
        return categories.name === this.state.hovered;
      });
    return (
      <RightSlideModal>
        <div className={styles.headerHolder}>
          <div className={styles.logoWithText}>
            <div
              className={styles.logo}
              onClick={() => {
                this.props.closeModal();
              }}
            >
              {"<"}
            </div>
            <div className={styles.filter}>FILTER</div>
          </div>

          <div className={styles.toggleHolder}>
            <div className={styles.toggleText}>PAST</div>
            <div className={styles.toggle}>
              <label className={styles.switch}>
                <input type="checkbox" onChange={() => this.handleChange()} />
                <div className={styles.slider} />
              </label>
            </div>
            <div className={styles.toggleText}>UPCOMING</div>
          </div>
        </div>
        <div className={styles.categoriesHolder}>
          <div className={styles.categoryDetails}>
            {this.props &&
              this.props.filterList &&
              this.props.filterList.map((categories, val) => {
                return (
                  <React.Fragment>
                    <div
                      className={
                        this.state.hovered === categories.name
                          ? styles.categoryDetailsValueWithArrow
                          : styles.categoryDetailsValue
                      }
                      onMouseEnter={() => this.hoverIn(categories.name)}
                      onClick={() => this.handleClick()}
                    >
                      {categories.name}
                      <div
                        className={
                          this.state.hovered === categories.name
                            ? styles.rightArrow
                            : ""
                        }
                      />
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div className={styles.subCategoryDetailsHolder}>
            {currentCategory &&
              currentCategory.lists &&
              currentCategory.lists.map((subCategoriesHeader, val) => {
                return (
                  <React.Fragment>
                    <div className={styles.blockHolder}>
                      <div
                        className={styles.buttonHolder}
                        onClick={() =>
                          this.handlecategoryClick(subCategoriesHeader)
                        }
                      >
                        <SelectBox
                          size={"20px"}
                          selected={
                            this.state.selected &&
                            this.state.selected.length > 0 &&
                            this.state.selected.find(categories => {
                              return (
                                categories.name === subCategoriesHeader.name
                              );
                            })
                              ? true
                              : false
                          }
                        />
                      </div>
                      <div
                        className={styles.subCategoryDetailsHeader}
                        onClick={() =>
                          this.handlecategoryClick(subCategoriesHeader)
                        }
                      >
                        {subCategoriesHeader.name}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </RightSlideModal>
    );
  }
}
