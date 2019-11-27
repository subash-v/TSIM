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
import Settings from "./components/Settings/SettingsContainer/SettingsContainer";
import Confirm from "./components/Settings/Confirm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/blog" component={BlogFeed} />
          <Route path="/events" component={MorePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/visual-profile" component={VisualProfilePage} />
          <Route path="/seek-guide" component={SeekGuide} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/eventDetails" component={EventDetailsPageContainer} />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={FeedContainer} />
          <Route path="/connections" component={ConnectionsContainer} />
          <Route path="/settings" component={Settings} />
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    );
  }
}

export default App;
