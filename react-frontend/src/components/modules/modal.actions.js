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
