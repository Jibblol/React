import React, { Component } from 'react';
import UserListItem from './UserListItem.js';

import AddGameModal from './AddGameModal.js';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="home" class="tab-pane fade in active">
                <h3>Person</h3>
                <p>Some content.</p>
                <AddGameModal />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <UserListItem />
                </table>
                {/* <UserList games={this.props.games} /> */}
            </div>
        )
    }
}

export default UserList;