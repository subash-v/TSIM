import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js";
import PrimaryHeader from "./components/HomePage/PrimaryHeader";
import SecondaryHeader from "./components/HomePage/SecondaryHeader";
import BlogFeed from "./components/Blog/BlogFeed";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={BlogFeed} />
      </Switch>
    );
  }
}

export default App;
