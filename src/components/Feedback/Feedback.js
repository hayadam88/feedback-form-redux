import React, {Component} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';


class Feedback extends Component {

    state = {
        feelings: this.props.reduxStore.feelingsReducer.feelings,
        understanding: this.props.reduxStore.understandingReducer.understanding,
        support: this.props.reduxStore.supportReducer.support,
        comment: this.props.reduxStore.commentReducer.comment
    }


    handleFinalSubmit = () => {
        console.log('Clicked submit feedback');
         Axios.post('/feedback', this.state)
         .then(response => {
             console.log(response);
             // this.props.history.push('/');
         }).catch(err => {
             console.log(err);
         })
     }

    render() {
        return(
            <>
                <h1>Review your Feedback </h1>
                <h2>Feelings: {this.props.reduxStore.feelingsReducer.feelings} </h2>
                <h2>Understanding: {this.props.reduxStore.understandingReducer.understanding}</h2>
                <h2>Support: {this.props.reduxStore.supportReducer.support} </h2>
                <h2>Comments: {this.props.reduxStore.commentReducer.comment}</h2>
                <button onClick={this.handleFinalSubmit}>SUBMIT FEEDBACK</button>
            </>
        )
    }


}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})


export default connect(mapStateToProps)(Feedback);