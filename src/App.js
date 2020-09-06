import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Comment from './component/Comment/Comment';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Comment/:id">
            <Comment></Comment>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
