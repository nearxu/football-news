import React, { Component } from "react";
import http from "../util/http";
import { Link } from "react-router-dom";
import LoadMore from "../component/load-more";
import "../css/viedo.scss";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.pageIndex = 1;
  }
  componentDidMount() {
    this.getNews();
    this.pageIndex = 1;
  }
  getNews() {
    http
      .get("/mobile/tab/43/archives", {
        page: this.pageIndex
      })
      .then(res => {
        let resData = res.data.list ? res.data.list.articles : [];
        let { data } = this.state;
        this.setState({ data: data.concat(resData) });
      })
      .catch(err => {
        console.log(err);
      });
  }
  loadMore() {
    this.pageIndex++;
    this.getNews();
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data ? (
          <div className="video">
            {data.map((item, i) => {
              return (
                <Link className="video-list" key={i} to={`detail/${item.id}`}>
                  <div className="left">
                    <img src={item.litpic} alt="" />
                  </div>
                  <div className="right">
                    <p>{item.title}</p>
                    <span>{item.comments_total} 评论</span>
                  </div>
                </Link>
              );
            })}
            <LoadMore loaddingMore={this.loadMore.bind(this)} />
          </div>
        ) : (
          <h1>暂无数据</h1>
        )}
      </div>
    );
  }
}
