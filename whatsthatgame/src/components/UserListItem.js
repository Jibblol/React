import React, { Component } from 'react';
import { deleteGame } from '../redux/actions/deleteGame';
import { getAllGames } from '../redux/actions/getAllGames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserListItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllGames();
    }

    render() {
        return (
            <tbody>
                {this.props.data.map(game => (
                    <tr>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
                        <td>{game.description}</td>
                        <td>{game.year}</td>
                        <td>
                            <button onClick={() => this.props.deleteGame(game.id)} type="delete">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
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