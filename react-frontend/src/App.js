import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js";
import PrimaryHeader from "./components/HomePage/PrimaryHeader";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/header" component={PrimaryHeader} />
      </Switch>
    );
  }
}

export default App;
