import React from "react";
import Navigation from "./components/navigation";
import Home from "./components/home";
import AboutComponent from "./components/about";
import ContactComponent from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="sidebar-column">
        <Navigation></Navigation>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/allpost">
            <Home />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
