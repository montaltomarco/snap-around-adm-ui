"use strict";

import React from "react";

import UserRow from "./UserRow.jsx";

export default React.createClass({
  render() {
    return (
      <ul>
        {this.props.users.map((user) => {
          return <UserRow key={user.get("fbUserId")} user={user} />;
        })}
      </ul>
    );
  }
});
