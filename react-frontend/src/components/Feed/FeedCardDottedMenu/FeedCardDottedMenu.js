import React, { Component } from 'react'
import styles from './FeedCardDottedMenu.css'
export const dottedMenuArr = [
    { name: "Bookmark", id: 1 },
    { name: "Copy link", id: 2 },
    { name: "Unfollow Aishverya", id: 3 },
    { name: "Report this post", id: 4 },
    { name: "Downvote post", id: 5 },
    { name: "Turn off notification", id: 6 }
]
export default class FeedCardDottedMenu extends Component {
    render() {
        return (
            <div className={styles.baseWrappper}>
                <ul>{dottedMenuArr.map((m) => {
                    return (
                        <li key={m.id}><div className={styles.icon}></div>{m.name}</li>
                    )
                })}</ul>
            </div>
        )
    }
}
