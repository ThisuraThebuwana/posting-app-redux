import { combineReducers } from "redux";
import postReducer from './postReducer';
import contactReducer from "./contactReducer";
import picsumPostReducer from "./picsumPostReducer";

export default combineReducers({
    posts: postReducer,
    contacts: contactReducer,
    picsumPosts: picsumPostReducer
});