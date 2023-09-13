import React, { Component } from "react";
import "../components/Square.css";

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
