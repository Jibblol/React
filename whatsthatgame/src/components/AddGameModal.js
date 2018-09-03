import React, { Component } from 'react';

class AddGameModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            year: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        fetch('https://localhost:44377/api/todo', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                year: this.state.year
            })
        })
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Open modal
                </button>

                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">

                            <div class="modal-header">
                                <h4 class="modal-title">Modal Heading</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body">
                                <form onSubmit={this.handleSubmit}>

                                    <div class="form-group">
                                        <label for="Title">Title:</label>
                                        <input class="form-control" name="title" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} placeholder="Enter movie title"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="Description">Description:</label>
                                        <input class="form-control" name="description" value={this.state.description} onChange={e => this.setState({ description: e.target.value })} placeholder="Enter genre"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="Year">Year:</label>
                                        <input class="form-control" name="year" value={this.state.year} onChange={e => this.setState({ year: e.target.value })} placeholder="Enter year of release"></input>
                                    </div>

                                    <button type="submit" className="btn btn-default">Submit</button>


                                </form>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGameModal;