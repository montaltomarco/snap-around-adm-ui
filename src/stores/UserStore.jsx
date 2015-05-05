"use strict";

import {Atom} from "atomstore";

import {UPDATE_USERS} from "../actions/UserActions.jsx";
import Dispatcher from "../dispatcher.jsx";

let UserStore = new Atom([]);

function replaceWith(list) {
  return list;
}

UserStore.dispatchToken = Dispatcher.register((payload) => {
  switch(payload.get("actionType")) {
    case UPDATE_USERS:
      UserStore.swap(replaceWith, payload.get("users"));
      break;
  }
});

export default UserStore;
