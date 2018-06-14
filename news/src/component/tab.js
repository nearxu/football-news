import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "../css/tab.scss";
export default class Tab extends PureComponent {
  render() {
    return (
      <div className="top-tabs">
        <ul>
          <li>
            <NavLink to="/new" activeClassName="selected">
              资讯
            </NavLink>
          </li>
          <li>
            <NavLink to="/race" activeClassName="selected">
              赛程
            </NavLink>
          </li>
          <li>
            <NavLink to="/video" activeClassName="selected">
              视频
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/data" activeClassName="selected">
              数据
            </NavLink>
          </li> */}
        </ul>
      </div>
    );
  }
}
