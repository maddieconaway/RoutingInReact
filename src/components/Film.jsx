import React, { Component, Fragment } from 'react';

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(response => { return response.json(); })
            .then(film => { this.setState({ film: film }) });

    }

    render() {
        return (
            <Fragment>
                <h4>Filmography</h4>
                <p>id: {this.state.film.id}</p>
                <p>title: {this.state.film.title}</p>
                <p>description: {this.state.film.description}</p>
                <p>director: {this.state.film.director}</p>
                <p>producer: {this.state.film.producer}</p>
                <p>release date: {this.state.film.release_date}</p>
                <p>rt score: {this.state.film.rt_score}</p>
                <p>url: {this.state.film.url}</p>
            </Fragment>
        )
    }
}

export default Film;