"use strict";

import React from "react";
import Immutable from "immutable";

import AdminApp from "./components/AdminApp.jsx";
import {updateUsers} from "./actions/UserActions.jsx";

React.render(
  <AdminApp />,
  document.getElementById("app")
);

updateUsers(Immutable.fromJS([
  {fbUserId: "1415566850",
    name: "Robin Ricard",
    pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.50.50/p50x50/1982045_10203663640817642_234615110_n.jpg?oh=26287a7cc435a5fcb8202d7764bd37a6&oe=55E025A9&__gda__=1439860162_f74c010b7114d4c18543e8cdd2de2a99"},
  {fbUserId: "1415566850",
    name: "Kevin Antoine",
    pic: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.0.50.50/p50x50/1982045_10203663640817642_234615110_n.jpg?oh=26287a7cc435a5fcb8202d7764bd37a6&oe=55E025A9&__gda__=1439860162_f74c010b7114d4c18543e8cdd2de2a99"}
]));
