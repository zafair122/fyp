import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {} from "@material-ui/core";
import login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/login" component={login} />
      <Route path="*" render={() => "Error 404 Page Not Found !"} />
    </Switch>
  );
}

export default App;
