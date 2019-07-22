import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feelings from '../Feelings/Feelings.js'
import Feedback from '../Feedback/Feedback'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Finish from '../Finish/Finish'


class App extends Component {




  render() {
    return (
     <> 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <p>Feelings: {this.props.reduxStore.feelingsReducer.feeling}  Understanding: {this.props.reduxStore.understandingReducer.understanding} Support: {this.props.reduxStore.supportReducer.support}</p>
          
          <p>Comments: {this.props.reduxStore.commentReducer.comments}</p>
        </header>
      </div>
      <Router>
        
          <Route exact path='/' component={Feelings} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/finish' component={Finish} />
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
