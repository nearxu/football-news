import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iFrameHeight: ""
    };
  }
  //   componentDidMount() {
  //     this.getOffsetHeight();
  //   }

  //   getOffsetHeight() {
  //     window.addEventListener(
  //       "message",
  //       function(event) {
  //         const po =
  //           typeof event.data === "string" ? JSON.parse(event.data) : event.data;
  //         if (po.height) {
  //           document.getElementById("ifr").style.height = po.height + "px";
  //         }
  //       },
  //       false
  //     );
  //   }
  render() {
    console.log(this.props, "props");
    const id = this.props.match.params.id;
    return (
      <iframe
        id="ifr"
        name="ifr"
        title="detail-ifream"
        width="100%"
        height={window.innerHeight}
        ref="iframe"
        src={`http://www.dongqiudi.com/share/article/${id}?id=${id}&type=undefined&refer=m_website`}
        scrolling="no"
      />
    );
  }
}
