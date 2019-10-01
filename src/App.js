import React, { useEffect } from "react";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'

import NotFound from "./components/NotFound";
import { loadInitialData } from "./redux/actions/shared";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(
    () => {dispatch(loadInitialData())},
    [dispatch]
  );
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
