import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <h2>SociaL in</h2>

        <ul>
          <li>
            <Link to={"./episodes"}>R&M Episodes</Link>
          </li>
          <li>
            <Link to={"./signUp"}>Register</Link>
          </li>
          <li>
            <Link to={"./signIn"}>Log in</Link>
          </li>
        </ul>
      </div>
    );
  }
}
