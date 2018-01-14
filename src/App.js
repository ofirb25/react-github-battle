import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
          </Switch>
        </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
