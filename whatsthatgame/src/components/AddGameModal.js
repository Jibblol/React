import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addGame } from '../redux/actions/addGame';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles = theme => ({
    button: {
        margin: 5,
    },
});

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
        this.props.addGame(this.state.title, this.state.description, this.state.year);
        this.handleClickClose();
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen} className={classes.button} variant="contained">Add game</Button>
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
                        margin="dense"
                        name="description"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}
                        label="Description"
                        fullWidth
                        />
                        <TextField
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addGame }, dispatch);
}

export default compose(
    withStyles(styles),
    connect (null, mapDispatchToProps)
)(AddGameModal);
