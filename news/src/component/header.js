import React, { PureComponent } from "react";
import "../css/header.scss";
import { withRouter } from "react-router-dom";

@withRouter
class Header extends PureComponent {
  handleBack() {
    console.log(this.props, "props");
    this.props.history.replace("/");
  }
  render() {
    return (
      <div className="use_header_bg">
        <div className="back" onClick={this.handleBack.bind(this)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 32"
            version="1.1"
          >
            <path
              fill="#fff"
              d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"
            />
          </svg>
        </div>
        <h1 className="use_header_title">dunkirk culb</h1>
      </div>
    );
  }
}

export default Header;
