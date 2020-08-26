import React, { Component } from "react";
import Board from "./Board";
import Cell from "./Cell";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board ncols={5} nrows={5} />
      </div>
    );
  }
}

export default App;
