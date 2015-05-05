"use strict";

import React from "react";

import UserList from "./UserList.jsx";
import LoginBox from "./LoginBox.jsx";
import UserStore from "../stores/UserStore.jsx";
import LoginStore from "../stores/LoginStore.jsx";
import {fetchUsers} from "../actions/UserActions.jsx";


function retrieveFromStores() {
  return {
    users: UserStore.deref(),
    login: LoginStore.deref()
  };
}

export default React.createClass({
  getInitialState() {
    return retrieveFromStores();
  },
  componentDidMount() {
    UserStore.addChangeListener(this.onChange);
    LoginStore.addChangeListener(this.onChange);
  },
  render() {
    if(this.state.login.get("password")) {
      return (
        <div>
          <UserList users={this.state.users} />
        </div>
      );
    } else {
      return <LoginBox/>;
    }
  },
  onChange() {
    const changes = retrieveFromStores();
    this.setState(changes);
    if(changes.login.get("password")
    && changes.users.size < 1) {
      fetchUsers();
    }
  }
});
