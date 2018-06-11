import React, { Component } from "react";
import http from "../util/http";
import List from "../component/lists";
import LoadMore from "../component/load-more";
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
      .get("/mobile/tab/1/archives", {
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
          <div>
            {data.map((m, i) => {
              return <List key={i} item={m} />;
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
