import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';


class Userinfo extends Component {
    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        
        this.state = {
            open: false,
            username: '',
            isLoggedIn: false
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClickClose = () => {
        this.setState({ open: false });
        console.log("Closed")
    };

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
                <div>
                    <Button color="inherit" onClick={this.handleClickOpen}>
                        Login
                    </Button>
                    <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Enter username</DialogTitle>
                        <DialogContent>
                            <TextField
                            autoFocus
                            margin="dense"
                            name="username"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                            label="Username"
                            fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClickClose} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" type="submit" onClick={this.handleLoginClick}>
                                Login
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            ) 
        } else {
            return(
                this.state.username
            )
        }
    }
}

export default Userinfo;