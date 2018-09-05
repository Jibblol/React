import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Edit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Button variant="contained">
                    <Link to="/">Back</Link>
                </Button>
            </div>
        )
    }
}

export default Edit;