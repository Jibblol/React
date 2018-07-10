import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }
    }

    // onSubmit(e) {
    //     e.preventDefault();

    //     fetch('http://' + config.serverUrl + '/users/authenticate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username: this.state.username,
    //             password: this.state.password
    //         })
    //     }).then(res => res.json())
    //     .then((res) => {
    //         // check if server gives error or user information
    //         if (!res.error && res.token) {                                
    //             localStorage.setItem('auth', res.token);
    //             console.log(localStorage.getItem('auth'));
    //             this.props.callback(res.user);
    //         } else {
    //             this.setState({
    //                 error: res.error
    //             });
    //         }
    //     });
    // }

    render() {
        let errorDiv = '';

        if (this.state.error) {
            errorDiv = <div className="alert alert-danger">{this.state.error}</div>
        }

        return (
            <div>
                <form>
                    <h1>Login</h1>                    
                    { errorDiv }
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
                    <div className="form-group">
                        <label htmlFor="password-input">Passord</label>
                        <input
                            className="form-control"
                            id="password-input"
                            type="password"
                            placeholder="*********"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        Logg inn!
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;