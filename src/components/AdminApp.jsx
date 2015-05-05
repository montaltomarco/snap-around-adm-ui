"use strict";

import React from "react";

import UserList from "./UserList.jsx";
import LoginBox from "./LoginBox.jsx";
import UserStore from "../stores/UserStore.jsx";
import LoginStore from "../stores/LoginStore.jsx";
import {fetchUsers} from "../actions/UserActions.jsx";
import {updatePassword} from "../actions/LoginActions.jsx";

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
    if(document.cookie) {
      const pwd = document.cookie.split("=")[1];
      updatePassword(pwd);
    }
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
    const pwd = changes.login.get("password");
    this.setState(changes);
    if(pwd) {
      document.cookie = `password=${pwd}`;
    }
    if(pwd && changes.users.size < 1) {
      fetchUsers();
    }
  }
});
