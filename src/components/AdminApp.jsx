"use strict";

import React from "react";

import UserList from "./UserList.jsx";
import UserStore from "../stores/UserStore.jsx";

function retrieveFromStores() {
  return {
    users: UserStore.deref()
  };
}

export default React.createClass({
  getInitialState() {
    return retrieveFromStores();
  },
  componentDidMount() {
    UserStore.addChangeListener(this._onChange);
  },
  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  },
  _onChange() {
    this.setState(retrieveFromStores());
  }
});
