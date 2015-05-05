"use strict";

import React from "react";
import Immutable from "immutable";

import UserList from "./UserList.jsx";

const USER_LIST = Immutable.fromJS([
  {fbUserId: "1415566850",
   name: "Robin Ricard",
   pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.50.50/p50x50/1982045_10203663640817642_234615110_n.jpg?oh=26287a7cc435a5fcb8202d7764bd37a6&oe=55E025A9&__gda__=1439860162_f74c010b7114d4c18543e8cdd2de2a99"},
  {fbUserId: "1415566850",
    name: "Kevin Antoine",
    pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.50.50/p50x50/1982045_10203663640817642_234615110_n.jpg?oh=26287a7cc435a5fcb8202d7764bd37a6&oe=55E025A9&__gda__=1439860162_f74c010b7114d4c18543e8cdd2de2a99"}

]);

export default React.createClass({
  render() {
    return (
      <div>
        <UserList users={USER_LIST} />
      </div>
    );
  }
});
