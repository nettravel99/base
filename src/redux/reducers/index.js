import { combineReducers } from "redux";

import { reducer } from "redux-form";
import user from "./user";

export default combineReducers({
  user, // Here we have a function that returns an empty object.
  form: reducer
});
