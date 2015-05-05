"use strict";

import React from "react";

export default React.createClass({
  render() {
    return (
      <li>
        <img src={this.props.user.get("pic")}
             alt={this.props.user.get("name")}/>
        <p>{this.props.user.get("name")}</p>
      </li>
    );
  }
});
