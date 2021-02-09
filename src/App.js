import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar.component.jsx";
import HomePage from "./pages/homepage/homepage.page.jsx";
import FaqPage from "./pages/faq/faq.page.jsx";
import "bootstrap/dist/js/bootstrap.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/faq" component={FaqPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
