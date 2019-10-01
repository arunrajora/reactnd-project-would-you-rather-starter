import React from "react";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <LoadingBar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/login" />
          <Route exact path="/add" />
          <Route exact path="/leaderboard" />
          <Route exact path="/questions/:question_id" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
