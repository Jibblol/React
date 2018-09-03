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
      <div className="App">

        <div classname="Container">
        
            <form className="form-inline" onSubmit={this.handleSubmit}>

              <div className="form-group">
                  <label for="Id">Id:</label>
                  <input className="form-control" name=""></input>
              </div>
            </form>
            <Provider store={store}>
              <DynamicTabView/>
            </Provider>
          
        </div>
      </div>
    );
  }
}

export default App;