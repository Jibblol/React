import React, { Component } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { deleteGame } from '../redux/actions/deleteGame';
import { getAllGames } from '../redux/actions/getAllGames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class UserListItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllGames();
    }

    render() {
        return (
            <TableBody>
                {this.props.data.map(game => (
                    <TableRow>
                        <TableCell>{game.id}</TableCell>
                        <TableCell>{game.title}</TableCell>
                        <TableCell>{game.description}</TableCell>
                        <TableCell>{game.year}</TableCell>
                        <TableCell>
                            <Tooltip title="Delete" placement="right">
                                <IconButton
                                    aria-label="Delete"
                                    onClick={() => this.props.deleteGame(game.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                        <TableCell>
                            <Button variant="contained">
                                <Link to="/Edit">edit</Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        )
    }

}

function mapStateToProps(state, props) {
    return {
        loading: state.gamesReducer.isLoading,
        data: state.gamesReducer.data
    }
}

function mapDisptachToProps(dispatch) {
    return bindActionCreators({ deleteGame, getAllGames }, dispatch);
}

export default connect(mapStateToProps, mapDisptachToProps)(UserListItem);