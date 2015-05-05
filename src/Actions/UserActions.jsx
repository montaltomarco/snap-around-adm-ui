"use strict";

import Immutable from "immutable";

import Dispatcher from "../dispatcher.jsx";

export const UPDATE_USERS = "action-users-update";
export function updateUsers(users) {
  Dispatcher.dispatch(Immutable.Map({
    actionType: UPDATE_USERS,
    users: users
  }));
}
