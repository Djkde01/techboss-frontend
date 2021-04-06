import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@styles/App.css";
import Dashboard from "../pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
