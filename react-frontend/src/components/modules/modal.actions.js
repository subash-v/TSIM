export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const CENTER_MODULE_DEMO = "centerModalDemo";
//declare the module name
export const MODULE_DEMO = "DemoModalContainer";
export const LOGIN_MODULE = "LoginModule";
export const SIGNUP_MODULE = "SignUpModule";
export const FILTER_MODULE = "FilterModule";
export const FORGOT_PASSWORD_MODULE = "ForgotPassword";
export const SELECT_EVENT_MODULE = "SelectEventModule";
export const PROFILE_MODAL = "ProfileModal";
export const WORKEXP_MODAL = "WorkExpModal";
export const SLIDER_COMPONENT = "Slider";
export const REGISTER_DETAILS_MODAL = "RegisterDetailsModal";
export const ALL_CONNECTION_MODAL = "AllConnectionModal";
export const UPLOAD_PROFILE_IMAGE_MODAL = "ImageUpload";
export const USER_POST_MODAL = "UserPostModal";
export const EVENT_DETAIL_SLIDER_COMPONENT = "EventDetailSlider";
export const UPLOAD_CV_MODAL = "UploadCVModal";
export const GET_IN_TOUCH = "GetInTouchModal";

export function showModal(type, ownProps) {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  return {
    type: SHOW_MODAL,
    modalType: type,
    scrollPosition: scrollPosition,
    ownProps
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    modalType: null
  };
}
