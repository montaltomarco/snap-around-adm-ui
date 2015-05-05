"use strict";

import {Atom} from "atomstore";

import {
  FETCH_USERS,
  CHECK_USER,
  UPDATE_USER_PATH
} from "../actions/UserActions.jsx";
import Dispatcher from "../dispatcher.jsx";

let UserStore = new Atom([]);

function replaceWith(list) {
  return list;
}

function matchAttrEquality(key, value) {
  return (user) => {
    return (user[key] === value);
  };
}

function assocMatching(matchingFn, key, value) {
  return this.map((user) => {
    if(matchingFn(user)) {
      return user.set(key, value);
    }
    return user;
  });
}

UserStore.dispatchToken = Dispatcher.register((payload) => {
  switch(payload.get("actionType")) {
    case FETCH_USERS:
      UserStore.swap(replaceWith, payload.get("users"));
      break;
    case CHECK_USER:
      UserStore.swap(
        assocMatching,
        matchAttrEquality("fbUserId", payload.fbUserId),
        "checked",
        payload.checked);
      break;
    case UPDATE_USER_PATH:
      UserStore.swap(
        assocMatching,
        matchAttrEquality("fbUserId", payload.fbUserId),
        "path",
        payload.path);
      break;
  }
});

export default UserStore;
