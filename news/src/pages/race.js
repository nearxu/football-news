import React, { Component } from "react";
import http from "../util/http";
import "../css/race.scss";
import {
  formatDate,
  formatTimes,
  getLocalDate,
  getLocalHour
} from "../util/util";
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
  getFilterData(key) {
    if (!this.obj[key]) {
      this.obj[key] = {
        title: getLocalDate(key),
        item: []
      };
    }
  }
  getMatchs() {
    let currentTime = formatDate(new Date(), 1) + " 16:00:00";
    http
      .get("/data/tab/important", {
        start: currentTime
      })
      .then(res => {
        this.obj = {};
        let resData = res.data.list ? res.data.list : [];
        resData = resData.reduce((pre, cur) => {
          const lists = pre.concat();
          const curdate = cur.date_utc;
          const exiteDateIndex = lists.findIndex(l => l.date === curdate);
          if (exiteDateIndex < 0) {
            lists.push({ date: curdate, list: [cur] });
          } else {
            lists[exiteDateIndex].list.push(cur);
          }
          return lists;
        }, []);
        this.setState({ races: this.state.races.concat(resData) });
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
        {races.map((itemAll, index) => {
          return (
            <div className="time-panel" key={index}>
              <h3>{itemAll.date}</h3>
              {itemAll.list.map((item, i) => {
                return (
                  <div className="row" key={i}>
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
                      <p>{item.TVList}</p>
                      <h4>
                        {item.fs_A} - {item.fs_B}{" "}
                        {item.fs_B ? item.fs_B : item.fs_A}
                      </h4>
                      {/* <h4> {"notStart"}</h4> */}
                    </div>
                    <div className="team">
                      <div>
                        <img src={item.team_B_logo} alt="" />
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
