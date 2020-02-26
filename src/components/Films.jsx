import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Films.css';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }

    }

    getFilmComponent() {
        return this.state.films.map(film => {
            return (
                <div className='card' key={film.id}>
                    <div className='title'><Link to={`/Films/${film.id}`}>{film.title}</Link> ({film.release_date})</div>
                    <div className='description'>{film.description}</div>
                    <div className='director'>Director: {film.director}</div>
                    <div className='producer'>Producer: {film.producer}</div>
                </div>

            )
        });
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => { return response.json(); })
            .then(films => {
                this.setState({ films: films })
            });

    }

    render() {
        return (
            <Fragment>
                <h1>Films</h1>
                {this.getFilmComponent()}
            </Fragment>
        )
    }
}

export default Films;