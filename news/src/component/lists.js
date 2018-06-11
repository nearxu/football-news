import React, { Component } from "react";
import "../css/lists.scss";
export default class Index extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="news-list">
        <div className="left">
          <img src={item.litpic} alt="" />
        </div>
        <div className="right">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <span>{item.comments_total} 评论</span>
      </div>
    );
  }
}
