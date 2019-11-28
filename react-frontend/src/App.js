import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styles from "./App.css";
import BlogFeed from "./components/Blog/BlogFeed";
import MorePage from "./components/HomePage/MorePage";
import Terms from "./components/TermsAndConditions/TermsAndConditions";
import Privacy from "./components/TermsAndConditions/TermsAndConditions";
import VisualProfilePage from "./components/VisualProfile/VisualProfilePage";
import SeekGuide from "./components/SeekGuide/SeekGuide";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalContainer from "./components/modules/container/ModalContainer";
import EventPageContainer from "./components/Event/container/EventPageContainer";
import HomeContainer from "./components/HomePage/container/HomeContainer";
import Profile from "./components/Profile/Profile";
import EventDetailsPageContainer from "./components/Event/container/EventDetailsPageContainer";
import ConnectionsContainer from "./components/modules/container/ConnectionContainer";
import FeedContainer from "./components/Feed/container/FeedContainer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/blog" component={BlogFeed} />
          <Route exact path="/events" component={MorePage} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/visual-profile" component={VisualProfilePage} />
          <Route exact path="/seek-guide" component={SeekGuide} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/eventDetails" component={EventDetailsPageContainer} />
          <Route exact path="/event" component={EventPageContainer} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/feed" component={FeedContainer} />
          <Route exact path="/connections" component={ConnectionsContainer} />
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    );
  }
}

export default App;
