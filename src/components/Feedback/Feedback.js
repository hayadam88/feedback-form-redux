import React, {Component} from 'react';
import {connect} from 'react-redux';


class Feedback extends Component {

    state = {
        feelings: this.props.reduxStore.feelingsReducer.feelings,
        understanding: this.props.reduxStore.understandingReducer.understanding,
        support: this.props.reduxStore.supportReducer.support,
    }

    handleSubmit = (event) => {
        console.log('Adding Feelings Feedback', this.state.feelings);
        
        this.props.history.push('/understanding')
    } // handle submit

    render() {
        return(
            <>
                <h1>Review your Feedback </h1>
                <h2>Feelings: {this.props.reduxStore.feelingsReducer.feelings} </h2>
                <h2>Understanding: {this.props.reduxStore.understandingReducer.understanding}</h2>
                <h2>Support: {this.props.reduxStore.supportReducer.support} </h2>
                <h2>Comments: </h2>
            </>
        )
    }

}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})


export default connect(mapStateToProps)(Feedback);