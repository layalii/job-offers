import React from "react";
import Navbar from "components/Navbar";
import Header from "components/Header";
// Pages
import HomePage from "containers/HomePage";
import Profile from "containers/Profile";

import store from "store";
import { Provider } from "react-redux";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container-fluid px-0 bg-light">
          <Navbar />
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
