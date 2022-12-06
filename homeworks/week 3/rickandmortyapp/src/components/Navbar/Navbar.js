import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <h1>Rick and Morty App</h1>
        <ul>
          <li>
            <a href="/">Characters</a>
          </li>
          <li>
            <a href="/Episodes">Episodes</a>
          </li>
        </ul>
      </div>
    );
  }
}
