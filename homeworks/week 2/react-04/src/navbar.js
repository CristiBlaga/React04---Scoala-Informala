import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <h2>SociaL in</h2>
        <ul>
          <li>
            <a href="./">Posts</a>
          </li>
          <li>
            <a href="./SignIn">SignIn</a>
          </li>
          <li>
            <a href="./SignUp">SignUp</a>
          </li>
        </ul>
      </div>
    );
  }
}
