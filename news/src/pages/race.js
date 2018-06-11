import React, { Component } from "react";
import http from "../util/http";
import { formatDate } from "../util/util";
export default class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    };
  }
  componentDidMount() {
    this.getMatchs();
  }
  getMatchs() {
    let currentTime = formatDate(new Date(), 1) + " 16:00:00";
    http
      .get("/data/tab/important", {
        start: currentTime
      })
      .then(res => {
        let resData = res.data.list ? res.data.list : [];
        let { races } = this.state;
        this.setState({ races: races.concat(resData) });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { races } = this.state;
    if (!races.length) return <div />;
    return (
      <div className="race">
        <h2>最火比赛</h2>
        {races.map((itemAll, index) => {
          return (
            <div className="time-panel">
              <h3>{itemAll.title}</h3>
              {itemAll.item.map((item, i) => {
                return (
                  <div className="row">
                    <div className="team">
                      <div>
                        <img src={item.team_A_logo} alt="球队logo" />
                      </div>
                      <p>{item.team_A_name}</p>
                    </div>
                    <div className="content">
                      <p>
                        <span>{item.time_utc}</span>{" "}
                        <span>{item.competition_name}</span>{" "}
                        {item.gameweek ? <span>第{item.gameweek}轮</span> : ""}
                      </p>
                      <p v-text="item.TVList" />
                      <h4>
                        {item.fs_A} - {item.fs_B}{" "}
                        {item.fs_B ? item.fs_B : item.fs_A}
                      </h4>
                      <h4> {"notStart"}</h4>
                    </div>
                    <div className="team">
                      <div>
                        <img src="item.team_B_logo" alt="" />
                      </div>
                      <p>{item.team_B_name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
