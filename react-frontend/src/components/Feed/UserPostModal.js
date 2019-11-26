import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UserPostModal.css";
import Image from "../../core/Image";
import TextArea from "../../core/TextArea.js";
import ControlInput from "../../core/ControlInput";
import profileImage from "../../images/Profile-Fill-grey.svg";
import image_blue from "../../images/Image_add_blue.svg";
import location from "../../images/Location_Line_blue.svg";
import pdf from "../../images/Pdf_add_blue.svg";
import tag from "../../images/tag_blue.svg";
import video from "../../images/Video_line_blue.svg";
import Icon from "../../core/Icon.js";
import TagsInput from "../general/TagsInput";

export default class UserPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      desc: null,
      tags: ["ADD LABEL"]
    };
  }
  handleTagsChange(tags) {
    this.setState({ tags: tags.toUpperCase() });
  }
  render() {
    console.log(this.props);
    return (
      <BottomSlideModal>
        <div className={styles.createPostContainer}>
          <div className={styles.createPostNav}>
            <div
              className={styles.writePost}
              onClick={() => this.props.showUserPostModal({ post: true })}
            >
              Create Post
            </div>
            <div
              className={styles.askQuestion}
              onClick={() => this.props.showUserPostModal({ question: true })}
            >
              Ask Question
            </div>
            <div
              className={styles.createPoll}
              onClick={() => this.props.showUserPostModal({ poll: true })}
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
            <div className={styles.icon}>
              <Icon size={25} image={location} />
            </div>
            <div className={styles.icon}>
              <Icon size={25} image={tag} />
            </div>
          </div>
          <div className={styles.labelHolder}>
            <div className={styles.tagHolder}>
              <TagsInput
                value={this.state.tags}
                onChange={this.handleTagsChange}
              />
            </div>
          </div>
          <div className={styles.postHolder}>
            <div className={styles.selectHolder}>
              <div className={styles.check}></div>
              <div className={styles.Postuser}>Post anonymously</div>
            </div>
            <div className={styles.cancelHolder}>
              <div className={styles.cancel}>cancel</div>
              <div className={styles.dropdownHolder}>Post</div>
            </div>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
