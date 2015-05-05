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
