import React, { Component } from "react";
import styles from "./ConnectionsPage.css";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import CenteredContent from "../../core/CenteredContent";
import image1 from "../../images/Alicia.png";
import image2 from "../../images/Alison-min.png";
import image3 from "../../images/Amanda-min.png";
import image4 from "../../images/Joe-min.png";
import ConnectionRequest from "../modules/component/ConnectionRequests";
import NavButton from "../modules/component/NavButton";

const guideData = [
  {
    type: "mutual",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xelpmoc",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xaviers",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "thakur college",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  }
];

const userData = [
  {
    type: "mutual",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xelpmoc",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xaviers",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "thakur college",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  }
];

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: 1,
      guide: true,
      user: false,
      request: true,
      sent: false
    };
  }

  scrollToWeek = index => {
    this.setState({ selectedWeek: index });
  };

  onRequestLoadMore = () => {
    this.setState({
      limitForRequest: this.state.limitForRequest + 4
    });
  };

  onSentLoadMore = () => {
    this.setState({
      limitForSent: this.state.limitForSent + 4
    });
  };

  render() {
    return (
      <React.Fragment>
        {" "}
        <div className={styles.headerHolder}>
          <PrimaryHeaderContainer />
        </div>
        <div className={styles.base}>
          <div className={styles.userSection}>
            <div className={styles.header}>
              <NavButton
                index={1}
                data={"GUIDE"}
                selected={1 === this.state.selectedWeek}
                onClick={() => {
                  this.scrollToWeek(1);
                }}
              ></NavButton>
              <NavButton
                index={2}
                data={"USER"}
                selected={2 === this.state.selectedWeek}
                onClick={() => {
                  this.scrollToWeek(2);
                }}
              ></NavButton>
            </div>
            {guideData.map((val, i) => {
              return (
                <div key={i} className={styles.userData}>
                  <div className={styles.heading}>
                    <div className={styles.headingLogo} />
                    Users you may know based on your {val.type} connections
                  </div>
                </div>
              );
            })}
            {/* {guideData &&
              guideData.map((val, i) => {
                <div key={i} className={styles.userData}>
                  <div className={styles.heading}>
                    <div className={styles.headingLogo} />
                    Users you may know based on your {val.type} connections
                  </div>
                  {console.log(val)}
                </div>;
              })} */}
          </div>
          <div className={styles.requestSection}>
            <ConnectionRequest />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Connections;
