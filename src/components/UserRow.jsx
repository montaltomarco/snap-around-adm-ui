"use strict";

import React from "react";

import {checkUser} from "../actions/UserActions.jsx";

export default React.createClass({
  checkboxChanged(e) {
    checkUser(this.props.user.get("fbUserId"), e.target.checked);
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
