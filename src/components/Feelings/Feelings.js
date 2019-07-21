import React, {Component} from 'react';
import {connect} from 'react-redux';
import './feelings.css'


class Feelings extends Component {

    state = { feeling: 0 }

    handleChangeFor = (propertyName, event) => {
          this.setState({
              
                  [propertyName]: event.target.value
              
          })
      }

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