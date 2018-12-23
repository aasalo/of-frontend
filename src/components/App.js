import React from "react";
import "../stylesheets/main.scss";
import Header from "./common/Header";
// app component
export default class App extends React.Component {
  // render

  render() {

    return (
      <div className="container">
        <div>
          <Header />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
