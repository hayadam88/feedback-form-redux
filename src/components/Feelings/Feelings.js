import React, {Component} from 'react';
import {connect} from 'react-redux';
import './feelings.css'


class Feelings extends Component {

    // Declares a local state with an empty value of 0; this will eventually get updated and its
    // updated value is what is eventually sent to the redux Store
    state = { feeling: 0 }

    // Sets the local state
    handleChangeFor = (propertyName, event) => {
          this.setState({
              
                  [propertyName]: event.target.value
              
          })
      }

    // This dispatches the payload, the local state, to the feelingsReducer
    // and then it loads the /understanding route
    handleSubmit = (event) => {
        this.props.history.push('/understanding')
         this.props.dispatch({
             type: `SET_FEELINGS`,
             payload: this.state
         })
    } 

    render() {
        return(
            <div>
                <p>How are you feeling? 1 being terrible; 5 being fantastic.</p>
                <input type="radio" name="feedback" value="1" 
                onChange={(event) => this.handleChangeFor('feeling', event)}/>1 
                <br/>
                <input type="radio" name="feedback" value="2" 
                onChange={(event) => this.handleChangeFor('feeling', event)}/>2
                <br/>
                <input type="radio" name="feedback" value="3" 
                onChange={(event) => this.handleChangeFor('feeling', event)}/>3
                <br/>
                <input type="radio" name="feedback" value="4" 
                onChange={(event) => this.handleChangeFor('feeling', event)}/>4
                <br/>
                <input type="radio" name="feedback" value="5" 
                onChange={(event) => this.handleChangeFor('feeling', event)}/>5 
                <br/>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        )
    }

}




export default connect()(Feelings);