import React, { useEffect } from "react";
import LoadingBar from "react-redux-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { Login, PrivateRoute, Home, AddQuestion, Leaderboard, QuestionDetails, NavigationBar } from "./containers";
import { NotFound } from "./components";

import { loadInitialData } from "./redux/actions/shared";

import 'semantic-ui-css/semantic.min.css'

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
        <NavigationBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/add" component={AddQuestion} />
          <PrivateRoute exact path="/leaderboard"  component={Leaderboard} />
          <PrivateRoute exact path="/questions/:question_id" component={QuestionDetails} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
