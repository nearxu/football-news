import React, { Component } from "react";
import "../css/lists.scss";
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    const { item } = this.props;
    return (
      <Link to={`/detail/${item.id}`} className="news-list">
        <div className="left">
          <img src={item.litpic} alt="" />
        </div>
        <div className="right">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <span>{item.comments_total} 评论</span>
      </Link>
    );
  }
}
