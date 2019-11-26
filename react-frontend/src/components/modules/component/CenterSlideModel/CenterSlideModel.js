import React from "react";
import styles from "./CenterSlideModel.css";
import PropTypes from "prop-types";
export default class CenterSlideModel extends React.Component {
    render() {
        return (
            <div
                className={
                    this.props.showCrossIcon === false
                        ? styles.crossIconHide
                        : styles.base
                }
            >
                <div className={styles.content}>{this.props.children}</div>
            </div>
        );
    }
}


CenterSlideModel.defaultProps = {
    showCrossIcon: false
};
