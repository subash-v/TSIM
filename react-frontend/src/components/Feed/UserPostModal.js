import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UserPostModal.css";
import Image from "../../core/Image";
import TextArea from "../../core/TextArea.js";
import ControlInput from "../../core/ControlInput";
import profileImage from "../../images/Profile-Fill-grey.svg";
import image_blue from "../../images/Image_add_blue.svg";
import location from "../../images/Location_Line_blue.svg";
import back from "../../images/Back.svg";
import pdf from "../../images/Pdf_add_blue.svg";
import tag from "../../images/tag_blue.svg";
import video from "../../images/Video_line_blue.svg";
import Icon from "../../core/Icon.js";
import TagsInput from "../general/TagsInput";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import ProfileImage from "../../core/ProfileImage";
import BoxCheck from "../../core/BoxCheck";
import PollInputBox from "./PollInputBox";
import UploadIcon from "../../images/Add-Fill-color.svg";
export default class UserPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      desc: null,
      tags: [],
      showModal: this.props.showModal,
      value: "",
      pollText: "",
      showDropDown: false,
      file: null,
      image: null
    };
  }

  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
    }
  };
  handleChange(event) {
    if (event.target.files[0]) {
      let panImage = URL.createObjectURL(event.target.files[0]);
      this.setState({
        image: panImage
      });
    }
  }
  handleTagClick(tag) {
    let newTag = this.state.tags;
    let tagUpperCase = tag.toUpperCase();
    let index = newTag && newTag.length > 0 && newTag.indexOf(tagUpperCase);
    if (index >= 0) {
      if (index == 0) {
        newTag.splice(index, 1);
      } else {
        newTag.splice(index, 1);
      }
      this.setState({ tags: newTag });
    } else {
      newTag.push(tag.toUpperCase());
      this.setState({ tags: newTag });
    }
  }
  render() {
    return (
      <BottomSlideModal>
        {this.state.showInputModal && (
          <div className={styles.inputContianer}>
            <div
              className={styles.topNav}
              onClick={() => this.setState({ showInputModal: false })}
            >
              <HorizantalIconWithHeader
                icon={back}
                size={16}
                text={"Tag people"}
                fontSize={"14px"}
                fontColor={"#333"}
              ></HorizantalIconWithHeader>
              <div className={styles.done}>Done</div>
            </div>
            <TagsInput value={this.state.tags} />
            <div className={styles.tagInputHolder}>
              <ControlInput
                value={this.state.value}
                onChange={val => this.setState({ value: val })}
                placeholder={"Search for connections"}
              ></ControlInput>
            </div>

            {profileData.map(val => {
              return (
                <div className={styles.dataHolder}>
                  <div className={styles.imageWithTextHolder}>
                    <ProfileImage image={profileImage} size={0} />
                    <div className={styles.profilText}>{val.name}</div>
                  </div>
                  <BoxCheck onClick={() => this.handleTagClick(val.name)} />
                </div>
              );
            })}
          </div>
        )}
        {!this.state.showInputModal && (
          <React.Fragment>
            <div className={styles.createPostContainer}>
              <div className={styles.createPostNav}>
                <div className={styles.writePostMessageBox}>
                  <div
                    className={
                      this.state.showModal == "post"
                        ? styles.writePostSelected
                        : styles.writePost
                    }
                    onClick={() => this.setState({ showModal: "post" })}
                  >
                    Create Post
                  </div>
                </div>
                <div
                  className={
                    this.state.showModal == "question"
                      ? styles.askQuestionSelected
                      : styles.askQuestion
                  }
                  onClick={() => this.setState({ showModal: "question" })}
                >
                  Ask Question
                </div>
                <div
                  className={
                    this.state.showModal == "poll"
                      ? styles.createPollSelected
                      : styles.createPoll
                  }
                  onClick={() => this.setState({ showModal: "poll" })}
                >
                  Create Poll
                </div>
              </div>
              <div className={styles.commentHolder}>
                <div className={styles.imageAndInputHolder}>
                  <div className={styles.createPostContainerImage}>
                    <Image
                      image={profileImage}
                      width="100%"
                      height="100%"
                      className={styles.connectProfileImage}
                    />
                  </div>

                  <ControlInput
                    placeholder="Add Title (Optional)"
                    value={this.state.title}
                    onChange={val => this.setState({ title: val })}
                    textStyle={{
                      fontSize: 14,
                      color: "#7F7F7F",
                      fontFamily: "regular",
                      lineHeight: "20px"
                    }}
                    height={50}
                    boxy={true}
                    borderColor={"transparent"}
                    borderBottom={"transparent"}
                    textStyle={{ fontSize: 16 }}
                  />
                </div>
                <div className={styles.textArea}>
                  <TextArea
                    onChange={val => this.setState({ desc: val })}
                    value={this.state.desc}
                    height={85}
                    border="none"
                  />
                </div>
                <div id="hiii" className={styles.boxContainer}>
                  <div className={styles.displayBox}>
                    {this.state.image && (
                      <div className={styles.imageStyle}>
                        <img
                          src={this.state.image}
                          alt="icon"
                          height="84px"
                          width="112px"
                        />
                      </div>
                    )}
                    {this.state.file && (
                      <div className={styles.iconWithName}>
                        {this.state.file.name}
                      </div>
                    )}
                  </div>
                  <div className={styles.uploadBox}>
                    <div className={styles.uploadIcon}>
                      <input
                        id="img-icon"
                        type="file"
                        onChange={e => this.handleChange(e)}
                      />
                    </div>

                    <div className={styles.imageContainer}>
                      <label for="img-icon">
                        <img
                          src={UploadIcon}
                          alt="upload"
                          width="20px"
                          height="20px"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {this.state.showModal == "poll" && (
                  <div className={styles.pollInputHolder}>
                    <div className={styles.pollBox}>
                      <PollInputBox
                        leftText={"A"}
                        rightText={"ADD PHOTO"}
                        placeholder={"Add Option"}
                      />
                    </div>
                    <div className={styles.pollBox}>
                      <PollInputBox
                        leftText={"B"}
                        leftColor={"#B2B2B2"}
                        placeholder={"Add Option"}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.iconHolders}>
                <div className={styles.icon}>
                  <Icon size={25} image={image_blue} />
                </div>
                <div className={styles.icon}>
                  <Icon size={25} image={video} />
                </div>
                <div className={styles.icon}>
                  <Icon size={25} image={pdf} />
                </div>
                <div
                  className={styles.icon}
                  onClick={() => this.setState({ showInputModal: true })}
                >
                  <Icon size={25} image={location} />
                </div>
                <div
                  className={styles.icon}
                  onClick={() => this.setState({ showInputModal: true })}
                >
                  <Icon size={25} image={tag} />
                </div>
              </div>
              <div className={styles.labelHolder}>
                <div
                  className={styles.tagHolder}
                  onClick={() => this.setState({ showInputModal: true })}
                >
                  ADD LABEL
                </div>
                <TagsInput value={this.state.tags} />
              </div>
              <div className={styles.postHolder}>
                {this.state.showModal === "post" && (
                  <div className={styles.selectHolder}>
                    <BoxCheck />
                    <div className={styles.postuser}>Post anonymously</div>
                  </div>
                )}
                <div
                  className={
                    this.state.showModal === "post"
                      ? styles.selectHolder
                      : styles.holder
                  }
                >
                  <div className={styles.cancel}>Cancel</div>
                  <div className={styles.dropdownHolder}>Post</div>
                  <div
                    className={styles.dropdownArrow}
                    onClick={() =>
                      this.setState({ showDropDown: !this.state.showDropDown })
                    }
                  >
                    +
                    {this.state.showDropDown && (
                      <div className={styles.showdropDown}>
                        <div className={styles.dropHeader}>VISIBLE TO</div>
                        <div className={styles.content}>
                          <BoxCheck
                            borderRadius={"50%"}
                            borderColor={"#333"}
                            fillColor={"#333"}
                          />
                          <div className={styles.text}>Anyone</div>
                        </div>
                        <div className={styles.content}>
                          <BoxCheck
                            borderRadius={"50%"}
                            borderColor={"#333"}
                            fillColor={"#333"}
                          />
                          <div className={styles.text}>My Connections</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </BottomSlideModal>
    );
  }
}

const profileData = [
  {
    name: "banu"
  },
  {
    name: "priya"
  },
  {
    name: "bp"
  }
];
