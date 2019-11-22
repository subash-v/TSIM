import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styles from "./App.css";
import Home from "./components/HomePage/Home.js";
import BlogFeed from "./components/Blog/BlogFeed";
import MorePage from "./components/HomePage/MorePage";
import Terms from "./components/TermsAndConditions/TermsAndConditions";
import Privacy from "./components/TermsAndConditions/TermsAndConditions";
import VisualProfilePage from "./components/VisualProfile/VisualProfilePage";
import SeekGuide from "./components/SeekGuide/SeekGuide";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalContainer from "./components/modules/container/ModalContainer";
import EventPage from "./components/Event/EventPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogFeed} />
          <Route path="/events" component={MorePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/visual-profile" component={VisualProfilePage} />
          <Route path="/seek-guide" component={SeekGuide} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/event" component={EventPage} />
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    );
  }
}

export default App;
