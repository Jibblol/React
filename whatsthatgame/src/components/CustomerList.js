import React, { Component } from 'react';
import CustomerListItem from './CustomerListItem';

class CustomerList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.customers.map(customer => <CustomerListItem
                        customer={customer}
                    />)}
                </tbody>
            </table>
        )
    }
}

export default CustomerList;