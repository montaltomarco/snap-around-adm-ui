"use strict";

import Immutable from "immutable";

import Dispatcher from "../dispatcher.jsx";

export const UPDATE_USERS = "users-update-users";
export function updateUsers(users) {
  Dispatcher.dispatch(Immutable.Map({
    actionType: UPDATE_USERS,
    users: users
  }));
}
