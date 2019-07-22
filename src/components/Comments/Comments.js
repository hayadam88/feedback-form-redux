import React, {Component} from 'react';
import {connect} from 'react-redux';



class Comments extends Component {


    // Declares a local state with an empty value of an empty string; this will eventually get updated and its
    // updated value is what is eventually sent to the redux Store
    state = {
          comments: ''
      }

    // This sets the local state
     handleChangeFor = (propertyName, event) => {
         this.setState({

             [propertyName]: event.target.value

         })
     }
    
    // This dispatches the payload, the local state, to the commentReducer
    // and then it loads the /feedback route
    handleSubmit = (event) => {
        this.props.history.push('/feedback')
        // document.getElementById("submitBtn").disabled = false;
        this.props.dispatch({
            type: `SET_COMMENT`,
            payload: this.state
        })
    }

    render() {
        return(
            <div>
                <p>Care to share any comments?</p>
                <input required type="text" size="35" placeholder="Please enter a comment"
                 onChange={ (event) => this.handleChangeFor('comments', event)}></input>
                <button onClick={this.handleSubmit}>Submit comment</button>
            </div>
        )
    }

}




export default connect()(Comments);