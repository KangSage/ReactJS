import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";
import {Hero} from "./heroes/Hero";
import {Index} from "./heroes/Index";

export class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Menu></Menu>
          <div className="container" style={{backgroundColor: '#ffffff'}}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/heroes" component={Index}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>

        </Switch>
          </div>
      </BrowserRouter>
    );
  }
}