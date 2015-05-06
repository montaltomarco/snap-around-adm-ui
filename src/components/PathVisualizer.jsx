"use strict";

import React from "react";

import {Map, Polyline} from "react-googlemaps";
let {LatLng} = window.google.maps;

export default React.createClass({
  componentDidMount() {
    this.refs.rootNode.getDOMNode().style = `
      width: ${this.props.width};
      height: ${this.props.height};
    `;
  },
  render() {
    return (
      <Map initialZoom={12}
           initialCenter={new LatLng(45.771632, 4.845313)}
           width={this.props.width}
           height={this.props.height}
           ref="rootNode">
        {this.props.users.map((user) => {
          if(user.get("checked") && user.get("path")) {
            return <Polyline strokeColor="#000000"
                             strokeOpacity={1.0}
                             strokeWeight={3}
                             path={
              user.get("path").map((point) => {
                return new LatLng(point.get("lat"), point.get("lon"));
              }).toJS()
            } />;
          }
        })}
      </Map>
    );
  }
});
