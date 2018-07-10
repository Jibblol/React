import React, { Component } from 'react';

class UserListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.year}</td>
            </tr>
        )
    }

}

export default UserListItem;