import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js";
import PrimaryHeader from "./components/HomePage/PrimaryHeader";
import SecondaryHeader from "./components/HomePage/SecondaryHeader";

class App extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/header" component={SecondaryHeader} />
        </Switch>
      </div>
    );
  }
}

export default App;
