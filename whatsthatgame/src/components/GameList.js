import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

import GameListItem from './GameListItem.js';
import AddGameModal from './AddGameModal.js';
import { Button } from '@material-ui/core';

import { getAllGames } from '../redux/actions/getAllGames.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class GameList extends Component {
    
    render() {
        return (
            <div>
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
                                <TableCell>
                                    <AddGameModal />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <GameListItem />
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

export default connect(null, mapDispatchToProps)(GameList);