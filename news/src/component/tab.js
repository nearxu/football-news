import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../css/tab.scss";
export default class Tab extends PureComponent {
  render() {
    return (
      <div className="top-tabs">
        <ul>
          <li>
            <Link to="/new">资讯</Link>
          </li>
          <li>
            <Link to="/race">赛程</Link>
          </li>
          <li>
            <Link to="/video">视频</Link>
          </li>
          <li>
            <Link to="/data">数据</Link>
          </li>
        </ul>
      </div>
    );
  }
}
