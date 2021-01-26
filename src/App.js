import React, { Component } from 'react';
import Main from "./Main.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
