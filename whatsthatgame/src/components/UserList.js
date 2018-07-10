import React, { Component } from 'react';
import UserListItem from './UserListItem.js';

class UserList extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        return(

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map(user => <UserListItem
                            user={user}
                    />)}
                </tbody>
            </table>

        )

    }

}

export default UserList;