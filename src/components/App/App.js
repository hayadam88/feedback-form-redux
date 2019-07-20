import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js'
import Feedback from '../Feedback/Feedback'

class App extends Component {
  render() {
    return (
     <> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      </div>
      <Router>
        
          <Route exact path='/' component={Feelings} />
      
      </Router>
      <br />
      <Feedback />

    </>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
