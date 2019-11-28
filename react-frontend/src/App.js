import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styles from "./App.css";
import MorePage from "./components/HomePage/MorePage";
import Terms from "./components/TermsAndConditions/TermsAndConditions";
import Privacy from "./components/TermsAndConditions/TermsAndConditions";
import VisualProfilePage from "./components/VisualProfile/VisualProfilePage";
import SeekGuide from "./components/SeekGuide/SeekGuide";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalContainer from "./components/modules/container/ModalContainer";
import EventPageContainer from "./components/Event/container/EventPageContainer";
import HomeContainer from "./components/HomePage/container/HomeContainer";
import EventDetailsPageContainer from "./components/Event/container/EventDetailsPageContainer";
import ConnectionsContainer from "./components/modules/container/ConnectionContainer";
import ProfileContainer from "./components/Profile/container/ProfileContainer";
import FeedContainer from "./components/Feed/container/FeedContainer";
import Settings from "./components/Settings/SettingsContainer/SettingsContainer";
import BlogContainer from "./components/Blog/container/BlogContainer";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/blog" component={BlogContainer} />
          <Route path="/events" component={MorePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/visual-profile" component={VisualProfilePage} />
          <Route path="/seek-guide" component={SeekGuide} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route
            path="/eventDetails/:eventId"
            component={EventDetailsPageContainer}
          />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/profile" component={ProfileContainer} />
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
