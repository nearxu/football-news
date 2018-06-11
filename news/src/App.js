import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./component/header";
import Tab from "./component/tab";
import Race from "./pages/race";
import Video from "./pages/video";
import Data from "./pages/data";
import Index from "./pages/index";
import "./static/flexble";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Tab />
            <Route path="/new" component={Index} />
            <Route path="/race" component={Race} />
            <Route path="/video" component={Video} />
            <Route path="/data" component={Data} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
