import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';


class Feedback extends Component {

    state = {
            feeling: this.props.reduxStore.feelingsReducer.feeling,
            understanding: this.props.reduxStore.understandingReducer.understanding,
            support: this.props.reduxStore.supportReducer.support,
            comments: this.props.reduxStore.commentReducer.comments     
            }


    handleFinalSubmit = () => {
        console.log('Clicked submit feedback', this.state);
        document.getElementById("submitBtn").disabled = true;
         Axios.post('/feedback', this.state)
         .then(response => {
             console.log(response);
         }).catch(err => {
             console.log(err);
         })
     }

    render() {
        console.log(this.state)
        return(
            <>
                <h1>Review your Feedback </h1>
                <h2>Feelings: {this.props.reduxStore.feelingsReducer.feeling} </h2>
                <h2>Understanding: {this.props.reduxStore.understandingReducer.understanding}</h2>
                <h2>Support: {this.props.reduxStore.supportReducer.support} </h2>
                <h2>Comments: {this.props.reduxStore.commentReducer.comments}</h2>
                <button onClick={this.handleFinalSubmit} id="submitBtn">SUBMIT FEEDBACK</button>
            </>
        )
    }


}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})


export default connect(mapStateToProps)(Feedback);