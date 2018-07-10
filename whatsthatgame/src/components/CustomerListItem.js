import React, { Component } from 'react';

class CustomerListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td>{this.props.customer.company}</td>
            </tr>
        )
    }
}

export default CustomerListItem;