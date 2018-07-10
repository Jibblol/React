import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList.js';
import DynamicTabView from './components/DynamicTabView.js';
import Login from './components/Login.js';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      customers: [],
      isAuthenticated: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Updating list..')
    fetch(`/users/${this.state.barcode}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((users) => { 
      this.setState({ users: users });
      console.log('Updated users..')
    })
    fetch('/customers', {
      method: 'GET'
    })
    .then(response => response.json())
    .then((customers) => {
      this.setState({customers: customers});
      console.log('Updated customers..')
    })
    .then((barcode) => {
      this.setState({barcode: ""})
    })
  }

  render() {
    return (
      <div className="App">

        <div classname="Container">
        
            <form className="form-inline" onSubmit={this.handleSubmit}>

              <div className="form-group">
                  <label for="Id">Id:</label>
                  <input className="form-control" name="barcode" value={this.state.barcode} onChange={e => this.setState({ barcode: e.target.value})}></input>
              </div>
            </form>

          <Switch>
            <Route path='/'  render={() => ( // https://github.com/ReactTraining/react-router/issues/4627                
              this.state.isAuthenticated ? (
                <DynamicTabView
                  users={this.state.users}
                  customers={this.state.customers}
                  />
              ) : (
                <Login />
              )
            )} />          
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;