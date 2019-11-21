import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js";
import BlogFeed from "./components/Blog/BlogFeed";
import MorePage from "./components/HomePage/MorePage";
import Terms from "./components/TermsAndConditions/TermsAndConditions";
import Privacy from "./components/TermsAndConditions/TermsAndConditions";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogFeed} />
          <Route path="/events" component={MorePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
