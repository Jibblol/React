import React, { Component } from 'react';
import UserList from './UserList.js';
import CustomerList from './CustomerList.js';
import * as Actions from '../redux/actions/getAllGames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DynamicTabView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllGames();
    }

    render() {
        return(

            <div>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#home">Person</a></li>
                    <li><a data-toggle="tab" href="#menu1">Kunde</a></li>
                    <li><a data-toggle="tab" href="#menu2">Flight</a></li>
                </ul>
                <div class="tab-content">
                    <div id="home" class="tab-pane fade in active">
                        <h3>Person</h3>
                        <p>Some content.</p>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.props.data.map(game => (
                                        <tr>
                                            <td>{game.id}</td>
                                            <td>{game.title}</td>
                                        </tr>
                                    ))}
                                {/* <UserListItem data={this.props.data}/> */}
                            </tbody>
                        </table>
                        {/* <UserList games={this.props.games} /> */}
                    </div>
                    <div id="menu1" class="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Some content in menu 1.</p>
                        <CustomerList customers={this.props.customers} />
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <h3>Flight</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                </div>
            </div>

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

export default connect(mapStateToProps, mapDisptachToProps)(DynamicTabView);