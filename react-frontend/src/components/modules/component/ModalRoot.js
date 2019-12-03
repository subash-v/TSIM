import React from "react";
import ReactDOM from "react-dom";
import ModalPanel from "./ModalPanel";
import DemoModalContainer from "../container/DemoModalContainer";
import SignInModuleContainer from "../container/SignInModuleContainer";
import SignUpModuleContainer from "../container/SignUpModuleContainer";
import FilterModule from "./FilterModule";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";
import SelectEventContainer from "../container/SelectEventContainer";
import ProfileModalContainer from "../container/ProfileModalContainer";
import SliderComponent from "./SliderComponent/SliderComponent";
import RegisterDetailsModule from "./RegisterDetailsModule";
import AllConnection from "./AllConnection";
import ImageUplaod from "../../Profile/ImageUpload";
//import WorkExpModalContainer from "../container/WorkExpModalContainer";
import UserPostModal from "../../Feed/UserPostModal";
import EventDetailSliderComponent from "../../Event/EventDetailSlider/EventDetailSliderComponent";
import UploadCV from "./UploadCV";
import WorkExpModal from "./WorkExpModal";
import RegisterDetailsModuleContainer from "../container/RegisterDetailsModuleContainer";
import GetInTouchModal from "./GetInTouchModal";
import AddSkills from "./AddSkills";
import AddLanguages from "./AddLanguage";
import AddInterest from "./AddInterest";
import AddActivity from "./AddActivity";
const modalRoot = document.getElementById("modal-root");

export default class ModalRoot extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
    this.state = {
      loggedIn: false,
      customerDetails: null
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillMount() {
    if (this.props.history) {
      this.unlisten = this.props.history.listen((location, action) => {
        this.handleClose();
      });
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    this.unlisten();
  }

  handleClose() {
    if (this.props.hideModal) {
      this.props.hideModal();
    }
  }

  render() {
    const MODAL_COMPONENTS = {
      DemoModalContainer: (
        <DemoModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      LoginModule: (
        <SignInModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SignUpModule: (
        <SignUpModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      FilterModule: (
        <FilterModule
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ForgotPassword: (
        <ForgotPassword
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SelectEventModule: (
        <SelectEventContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ProfileModal: (
        <ProfileModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SignUpModule: (
        <SignUpModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      Slider: (
        <SliderComponent
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      RegisterDetailsModal: (
        <RegisterDetailsModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      EventDetailSlider: (
        <EventDetailSliderComponent
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AllConnectionModal: (
        <AllConnection
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UserPostModal: (
        <UserPostModal
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UploadCVModal: (
        <UploadCV
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      WorkExpModal: (
        <WorkExpModal
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ImageUpload: (
        <ImageUplaod
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      GetInTouchModal: (
        <GetInTouchModal
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddSkills: (
        <AddSkills
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddLanguages: (
        <AddLanguages
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddInterest: (
        <AddInterest
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddActivity: (
        <AddActivity
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      )
    };

    let SelectedModal = MODAL_COMPONENTS[this.props.modalType];
    // let SelectedModal = MODAL_COMPONENTS["centerModalDemo"];
    const Modal = this.props.modalStatus ? (
      <ModalPanel
        closeModal={() => {
          this.handleClose();
        }}
      >
        {SelectedModal}
      </ModalPanel>
    ) : null;

    return ReactDOM.createPortal(Modal, this.el);
  }
}
