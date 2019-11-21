import { combineReducers } from "redux";
import modal from "../components/modules/modal.reducers";
import { demo } from "./demo";

export default combineReducers({ demo, modal });
