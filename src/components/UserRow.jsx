"use strict";

import React from "react";

import {checkUser, updateUserPath} from "../actions/UserActions.jsx";

export default React.createClass({
  checkboxChanged(e) {
    const fbUserId = this.props.user.get("fbUserId");
    const checked = e.target.checked;
    checkUser(fbUserId, checked);
    if(checked) {
      updateUserPath(fbUserId);
    }
  },
  render() {
    return (
      <li>
        <img src={this.props.user.get("pic")}
             alt={this.props.user.get("name")}/>
        <p>{this.props.user.get("name")}</p>
        <input type="checkbox"
               checked={this.props.user.get("checked")}
               onChange={this.checkboxChanged} />
      </li>
    );
  }
});
