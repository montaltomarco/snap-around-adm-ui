"use strict";

import React from "react";

import {updatePasswordAndFetch} from "../actions/LoginActions.jsx";

export default React.createClass({
  getInitialState() {
    return {password: ""};
  },
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  },
  handleLoginClick() {
    updatePasswordAndFetch(this.state.password);
  },
  render() {
    return (
      <div>
        <input type="password"
               value={this.state.password}
               onChange={this.handlePasswordChange} />
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }
});
