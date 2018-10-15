import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Userinfo extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        
        this.state = {
            username: 'Vegard',
            isLoggedIn: false
        }
    }

    handleLoginClick(event) {
        this.setState({
            isLoggedIn: true
        });
        event.preventDefault();
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;

        if (isLoggedIn == false) {
            return(
                <Button color="inherit" onClick={this.handleLoginClick}>
                    {/* <Link to="/">Login</Link> */}
                    Login
                </Button>
            ) 
        } else {
            return(
                this.state.username
            )
        }
    }
}

export default Userinfo;