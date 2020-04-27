import React from "react";
import Navigation from "./components/navigation";
import Home from "./components/home";
import AboutComponent from "./components/about";
import ContactComponent from "./components/contact";
import AdvanceForm from './components/advanceForm'
import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";

function App() {
  var key = "/";
  return (
    <Router>
      <div className="sidebar-column">
        <Navigation></Navigation>
      </div>
      <div className="content">
        <Switch>
          <Route key={key} exact path={['/', '/allpost']} component={Home} />
          <Route key={key} path="/about" component={AboutComponent} />
          <Route  key={key} path="/contact" component={ContactComponent} /> 
          <Route  key={key} path="/form" component={AdvanceForm} /> 

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
