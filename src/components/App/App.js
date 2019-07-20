import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Route exact path='/' component={Feelings} />
      </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
