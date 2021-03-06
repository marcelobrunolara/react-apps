import React from "react";
import "../index.css";

export default class Bar extends React.Component {
  render() {
    const { value, color = "black" } = this.props;

    return (
      <div
        style={{
          marginTop: "40px",
          width: value + "%",
          height: "20px",
          backgroundColor: color
        }}
      />
    );
  }
}