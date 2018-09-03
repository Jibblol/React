import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import UserListItem from './UserListItem.js';
import AddGameModal from './AddGameModal.js';

class UserList extends Component {
    constructor(props) {
        super(props);
    }
      
    render() {
        return(
            <div id="home" class="tab-pane fade in active">
                <Paper>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Year</TableCell>
                        </TableRow>
                        </TableHead>
                        
                        <UserListItem />
                        
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default UserList;