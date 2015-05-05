"use strict";

import Immutable from "immutable";

import Dispatcher from "../dispatcher.jsx";

export const UPDATE_PASSWORD = "login-update-password";
export function updatePassword(password) {
  Dispatcher.dispatch(Immutable.Map({
    actionType: UPDATE_PASSWORD,
    password: password
  }));
}
