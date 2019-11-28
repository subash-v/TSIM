import { combineReducers } from "redux";
import modal from "../components/modules/modal.reducers";
import loginSignup from "../reducers/loginSignup.reducer.js";
import event from "../reducers/event.reducer";
import { demo } from "./demo";

export default combineReducers({ demo, modal, loginSignup, event });
