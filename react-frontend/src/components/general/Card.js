import React, { Component } from 'react'
import styles from "./Card.css"
import defaultImage from "../Images/b.jpg"
export default class Card extends Component {
    render() {
        return (

            <div className={styles.cardBase}>
                <div ><img className={styles.storiesImage} src={defaultImage} alt="no i"></img></div>
                <div className={styles.contentContainer}>
                  <div className={styles.contentHeading}>
                   
                    {this.props.heading}
                  </div>
                  <div className={styles.username}>
                    {this.props.name} <span className={styles.or}> | </span> {this.props.time}
                    Mins
                  </div>
                </div>
                <div className={styles.actionBarConatiner}>
                    <div className={styles.actionsHolder}>
                        <div className={styles.action}>{this.props.likes}</div>
                        <div className={styles.action}>{this.props.comments}</div>
                        <div className={styles.action}>{this.props.shared}</div>
                    </div>
                    <div className={styles.wishlist}>wish</div>
                </div>
              </div>
        )
    }
}
