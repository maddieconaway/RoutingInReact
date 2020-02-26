import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Films from './Films';
import Film from './Film';
import People from './People';
import Person from './Person';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to='/'><button>Go Home</button></Link>
                    <Link to='/Films'><button>View Films</button></Link>
                    <Link to='/People'><button>View People</button></Link>
                    <Switch>
                        <Route exact path='/Films' component={Films} />
                        <Route exact path='/Films/:id' component={Film} />
                        <Route exact path='/People' component={People} />
                        <Route exact path='/People/:id' component={Person} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default App;