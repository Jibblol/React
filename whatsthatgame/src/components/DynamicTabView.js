import React, { Component } from 'react';
import UserList from './UserList.js';
import CustomerList from './CustomerList.js';

class DynamicTabView extends Component {
    constructor(props) {
        super(props);
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
                        <UserList users={this.props.users} />
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

export default DynamicTabView;