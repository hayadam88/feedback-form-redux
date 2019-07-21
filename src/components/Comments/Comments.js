import React, {Component} from 'react';
import {connect} from 'react-redux';



class Comments extends Component {

    state = {
          comment: ''
      }

     handleChangeFor = (propertyName, event) => {
         this.setState({

             [propertyName]: event.target.value

         })
     }
    
    handleSubmit = (event) => {
        this.props.history.push('/review')
        document.getElementById("submitBtn").disabled = false;
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
                 onChange={ (event) => this.handleChangeFor('comment', event)}></input>
                <button onClick={this.handleSubmit}>Submit comment</button>
            </div>
        )
    }

}




export default connect()(Comments);