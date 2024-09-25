import { Component } from "react";
import Clocks from "./clockFunction";



class Clock extends Component {
  render() {
    return (
      <>
        <h2>Time: {this.time} </h2>
      </>
    );
  }
}

export default Clock;
