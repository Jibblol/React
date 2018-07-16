import React, { Component } from 'react';
import * as Actions from '../redux/actions/getAllGames';
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
        return(
            <tbody>
                {this.props.data.map(game => (
                    <tr>
                        <td>{game.id}</td>
                        <td>{game.title}</td>
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
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDisptachToProps)(UserListItem);