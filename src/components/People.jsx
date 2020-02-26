import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './People.css';

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    getPeopleComponent() {
        return this.state.people.map(person => {
            return (
                <div className='personcard' key={person.id}>
                    <div className='person'>Name: <Link to={`/People/${person.id}`}>{person.name}</Link> Gender: {person.gender} Age: {person.age}</div>
                </div>
            )
        });
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => { return response.json(); })
            .then(people => {
                this.setState({ people: people })
            });
    }

    render() {
        return (
            <Fragment>
                <h1>People</h1>
                {this.getPeopleComponent()}
            </Fragment >
        )
    }
}

export default People;

