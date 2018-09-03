import React, { Component } from 'react';
import './App.css';
import DynamicTabView from './components/DynamicTabView.js';
// import Login from './components/Login.js';
// import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="App">
        <Provider store={store}>
          <DynamicTabView />
        </Provider>
      </div>
    );
  }
}

export default App;