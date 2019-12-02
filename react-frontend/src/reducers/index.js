import { combineReducers } from "redux";
import modal from "../components/modules/modal.reducers";
import loginSignup from "./loginSignup.reducer.js";
import event from "./event.reducer";
import blog from "./blog.reducer";
import { demo } from "./demo";
import { feedReducer } from './feed.reducer'

export default combineReducers({ demo, modal, loginSignup, event, blog, feedReducer });
