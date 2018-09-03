import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            title: '',
            description: '',
            year: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClickClose = () => {
        this.setState({ open: false });
    };

    handleSubmit(event) {
        fetch('https://localhost:44363/api/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                year: this.state.year
            })
        })

        this.handleClickClose();
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen} variant="contained" color="primary">Add game</Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add a game</DialogTitle>
                    <DialogContent onSubmit={this.handleSubmit}>
                        <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                        label="Name"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="description"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
                        label="Description"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="year"
                        value={this.state.year}
                        onChange={e => this.setState({year: e.target.value})}
                        label="Year"
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default AddGameModal;