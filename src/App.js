import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Combined from "./components/combined";
import Navbar from "./components/navbar";
import Worldstats from "./components/worldstats";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" component={Combined} exact />
          <Route path="/world_stats" component={Worldstats} exact />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
