"use strict";

import {Atom} from "atomstore";

import {
  UPDATE_PASSWORD_AND_FETCH,
  UPDATE_PASSWORD
} from "../actions/LoginActions.jsx";
import {fetchUsers} from "../actions/UserActions.jsx";
import Dispatcher from "../dispatcher.jsx";

let LoginStore = new Atom({password: null});

function assignKey(k, v) {
  return this.set(k, v);
}

LoginStore.dispatchToken = Dispatcher.register((payload) => {
  switch(payload.get("actionType")) {
    case UPDATE_PASSWORD:
      LoginStore.swap(assignKey, "password", payload.get("password"));
      break;
    case UPDATE_PASSWORD_AND_FETCH:
      LoginStore.swap(assignKey, "password", payload.get("password"));
      fetchUsers();
      break;
  }
});

export default LoginStore;
