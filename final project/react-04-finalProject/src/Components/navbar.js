import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <h2>SociaL in</h2>
        <ul>
          <li>
            <a href="./episodes">R&M Episodes</a>
          </li>
          <li>
            <a href="./signUp">Register</a>
          </li>
          <li>
            <a href="./signIn">Log In</a>
          </li>
        </ul>
      </div>
    );
  }
}
