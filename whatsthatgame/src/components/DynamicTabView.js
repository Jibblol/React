import React, { Component } from 'react';
import UserList from './UserList.js';
import CustomerList from './CustomerList.js';

class DynamicTabView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#home">Games</a></li>
                    <li><a data-toggle="tab" href="#menu1">Tab2</a></li>
                    <li><a data-toggle="tab" href="#menu2">Tab3</a></li>
                </ul>
                <div class="tab-content">
                    <UserList />
                    <div id="menu1" class="tab-pane fade">
                        <h3>Menu 1</h3>
                        <p>Some content in menu 1.</p>
                        <CustomerList />
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <h3>Menu2</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default DynamicTabView;