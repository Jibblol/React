import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserListItem from './UserListItem.js';
import AddGameModal from './AddGameModal.js';
import { Button, withStyles } from '@material-ui/core';

import { getAllGames } from '../redux/actions/getAllGames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddGameModal />
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>
                                    <Button onClick={() => this.props.getAllGames()}>
                                        Refresh
                                        <ThreeSixtyIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <UserListItem />
                    </Table>
                </Paper>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllGames }, dispatch);
}
// export default compose(
//     withStyles(styles),
//     connect(null, mapDisptachToProps)
// )(UserList)

export default connect(null, mapDispatchToProps)(UserList);