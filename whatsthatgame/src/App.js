import React, { Component } from "react";
import "./App.css";
import DynamicTabView from "./components/DynamicTabView.js";
import Login from './components/Login.js';
import Edit from "./components/Edit";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={DynamicTabView} />
              <Route path="/Edit" component={Edit} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
