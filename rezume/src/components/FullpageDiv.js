import React, { Component } from "react";
import "./FullpageDiv.css";

class FullpageDiv extends Component {
 
  
  render() {
    const { children } = this.props;
    return (
      <div
        className={`Content${this.props.className || ""}`}
        id={`${this.props.id}`}
      >
      {children}
      </div>
    );
  }
}

export default FullpageDiv;
