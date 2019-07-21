import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js'
import Feedback from '../Feedback/Feedback'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'
import Finish from '../Finish/Finish'

class App extends Component {

  //  componentDidMount() {
  //    this.disableButton();
  //  }

   disableButton = () => {
      document.getElementById("submitBtn").disabled = true;
   }



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
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/feedback' component={Feedback} />
      </Router>
      <br />
      <hr />

    </>
    );
  }
}
const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
