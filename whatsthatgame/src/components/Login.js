import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="username-input">Brukernavn</label>
            <input
              className="form-control"
              id="username-input"
              type="text"
              placeholder="brucewayne1234"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <button className="btn btn-primary btn-block">Logg inn!</button>
        </form>
      </div>
    );
  }
}

export default Login;
