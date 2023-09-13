import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Board } from "./components/Board";

export class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/**status */}</div>
          <ol>{/**ToDO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
랴;
