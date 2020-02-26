import React, { Component, Fragment } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(response => { return response.json(); })
            .then(person => {
                this.setState({ person: person })
            });
    }

    render() {
        return (
            <Fragment>
                <h4>Personography</h4>
                <p>id: {this.state.person.id}</p>
                <p>name: {this.state.person.name}</p>
                <p>gender: {this.state.person.gender}</p>
                <p>age: {this.state.person.age}</p>
                <p>eye color: {this.state.person.eye_color}</p>
                <p>hair color: {this.state.person.hair_color}</p>
                <p>url: {this.state.person.url}</p>
            </Fragment>
        )
    }
}

export default Person;