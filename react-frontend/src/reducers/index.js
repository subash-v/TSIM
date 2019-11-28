import { combineReducers } from "redux";
import modal from "../components/modules/modal.reducers";
import { demo } from "./demo";
import { feedReducer } from './feed.reducer'

export default combineReducers({ demo, modal, feedReducer });
