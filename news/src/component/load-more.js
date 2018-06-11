import React, { Component } from "react";
import "../css/load-more.scss";
export default class LoadMore extends Component {
  constructor(props) {
    super(props);
  }
  loadMore() {
    this.props.loaddingMore();
  }
  render() {
    return (
      <div className="bottom-load-more" onClick={this.loadMore.bind(this)}>
        加载更多
      </div>
    );
  }
}
