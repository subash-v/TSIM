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
import EventDetailsPage from "./components/Event/EventDetailsPage";
import EventPageContainer from "./components/Event/container/EventPageContainer";
import HomeContainer from "./components/HomePage/container/HomeContainer";
import Profile from "./components/Profile/Profile";
import Feed from "./components/Feed/Feed";
import MyProfile from "./components/Settings/MyProfile/MyProfile"
import Password from "./components/Settings/Password/Password"
import Security from "./components/Settings/Security/Security"
import PrivacySettings from "./components/Settings/PrivacySettings/PrivacySettings"
import ContactInfo from "./components/Settings/ContactInfo/ContactInfo"
import ManageNotification from "./components/Settings/ManageNotification/ManageNotification"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ManageNotification} />
          <Route path="/blog" component={BlogFeed} />
          <Route path="/events" component={MorePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/visual-profile" component={VisualProfilePage} />
          <Route path="/seek-guide" component={SeekGuide} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/eventDetails" component={EventDetailsPage} />
          <Route path="/event" component={EventPageContainer} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={Feed} />
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    );
  }
}

export default App;
