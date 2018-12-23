import React from "react";
import MemeList from "./common/MemeList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <MemeList />
      </div>
    );
  }
}
