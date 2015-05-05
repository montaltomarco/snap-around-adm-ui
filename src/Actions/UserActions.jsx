"use strict";

import Immutable from "immutable";
import {} from "whatwg-fetch";

import Dispatcher from "../dispatcher.jsx";
import LoginStore from "../stores/LoginStore.jsx";
import {updatePassword} from "./LoginActions.jsx";

const SERVER_BASE_URL = "https://snap-around.herokuapp.com/v1.0";

export const FETCH_USERS = "user-fetch-users";
export function fetchUsers() {
  fetch(`${SERVER_BASE_URL}/allusers`, {
    headers: {
      authentication: `ADMPass ${LoginStore.deref().get("password")}`,
      accept: "application/json"
    }
  }).then((response) => {
    return response.json();
  }).then((body) => {
    Dispatcher.dispatch(Immutable.Map({
      actionType: FETCH_USERS,
      users: Immutable.fromJS(body)
    }));
  }).catch((err) => {
    console.error("Rejected request", err);
    updatePassword(null);
  });
}

export const CHECK_USER = "user-check-user";
export function checkUser(fbUserId, checked = true) {
  Dispatcher.dispatch(Immutable.Map({
    actionType: CHECK_USER,
    fbUserId: fbUserId,
    checked: checked
  }));
}

export const UPDATE_USER_PATH = "user-update-user-path";
export function updateUserPath(fbUserId) {
  fetch(`${SERVER_BASE_URL}/track/${fbUserId}`, {
    headers: {
      authentication: `ADMPass ${LoginStore.deref().get("password")}`,
      accept: "application/json"
    }
  }).then((response) => {
    return response.json();
  }).then((body) => {
    Dispatcher.dispatch(Immutable.Map({
      actionType: UPDATE_USER_PATH,
      fbUserId: fbUserId,
      path: Immutable.fromJS(body)
    }));
  }).catch((err) => {
    console.error("Rejected request", err);
    updatePassword(null);
  });
}
