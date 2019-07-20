import React, {Component} from 'react';
import {connect} from 'react-redux';


class Support extends Component {

     state = {
         support: 0
     }

     handleChangeFor = (propertyName, event) => {
         this.setState({

             [propertyName]: event.target.value

         })
     }

     handleSubmit = (event) => {
         this.props.history.push('/comments')
         this.props.dispatch({
             type: `SET_SUPPORT`,
             payload: this.state
         })
     }

    render() {
        return(
            <>
                <p>How well are you being supported? 1 being not at all; 5 being you feel extremely supported</p>
                <input type="radio" name="feedback" value="1" />1 
                <br/>
                <input type="radio" name="feedback" value="2" />2
                <br/>
                <input type="radio" name="feedback" value="3" />3
                <br/>
                <input type="radio" name="feedback" value="4" />4
                <br/>
                <input type="radio" name="feedback" value="5" />5 
                <br/>
                <button onClick={this.handleSubmit}>Next</button>
            </>
        )
    }

}




export default connect()(Support);