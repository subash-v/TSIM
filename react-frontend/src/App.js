import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js"

class App extends Component {
  render(){
  return (
     <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
}

export default App;
