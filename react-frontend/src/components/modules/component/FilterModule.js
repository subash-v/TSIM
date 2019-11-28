import React, { Component } from "react";
import RightSlideModal from "./RightSlideModal";
import styles from "./FilterModule.css";
import SelectBox from "../../../core/SelectBox";
const data = [
  {
    category_name: "Category",
    subCategories: [
      {
        category_name: "Ledaership"
      },
      {
        category_name: "Personal Branding"
      },
      {
        category_name: "Career"
      },
      {
        category_name: "negotiation"
      },
      {
        category_name: "Finance"
      },
      {
        category_name: "Product management"
      },
      {
        category_name: "Problem Solving"
      },
      {
        category_name: "Ideation"
      },
      {
        category_name: "Management"
      },
      {
        category_name: "Wellness"
      }
    ]
  },
  {
    category_name: "Event Type",
    subCategories: [
      {
        category_name: "8"
      },
      {
        category_name: "9"
      }
    ]
  },
  {
    category_name: "Location",
    subCategories: [
      {
        category_name: "10"
      },
      {
        category_name: "11"
      },
      {
        category_name: "12"
      }
    ]
  },
  {
    category_name: "Sort By",
    subCategories: [
      {
        category_name: "13"
      },
      {
        category_name: "14"
      },
      {
        category_name: "15"
      },
      {
        category_name: "Sort By"
      }
    ]
  }
];
export default class FilterModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: "Category",
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
        return categories.category_name === val.category_name;
      });
    if (dataExist) {
      var index = this.state.selected.findIndex(function(cat) {
        return cat.category_name == dataExist.category_name;
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
    let currentCategory =
      data &&
      data.find(categories => {
        return categories.category_name === this.state.hovered;
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
            {data.map((categories, val) => {
              return (
                <React.Fragment>
                  <div
                    className={
                      this.state.hovered === categories.category_name
                        ? styles.categoryDetailsValueWithArrow
                        : styles.categoryDetailsValue
                    }
                    onMouseEnter={() => this.hoverIn(categories.category_name)}
                    onClick={() => this.handleClick()}
                  >
                    {categories.category_name}
                    <div
                      className={
                        this.state.hovered === categories.category_name
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
              currentCategory.subCategories &&
              currentCategory.subCategories.map((subCategoriesHeader, val) => {
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
                                categories.category_name ===
                                subCategoriesHeader.category_name
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
                        {subCategoriesHeader.category_name}
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
