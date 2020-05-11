import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  state = {
    emojivirus: "🦠",
    country: "🌎",
  };
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h3 className="navbar-brand">C{this.state.emojivirus}rona Virus</h3>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="header">
          <h2> C{this.state.emojivirus}vid-19 Tracking System</h2>
          <br />
          <h3> Choose your {this.state.country}</h3>
        </div>
      </div>
    );
  }
}
