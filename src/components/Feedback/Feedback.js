import React, {Component} from 'react';
import {connect} from 'react-redux';


class Feedback extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/understanding')
    } // handle submit

    render() {
        return(
            <>
                <h1>Review your Feedback</h1>
                <h2>Feelings: </h2>
                <h2>Understanding: </h2>
                <h2>Support: </h2>
                <h2>Comments: </h2>
            </>
        )
    }

}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})


export default connect(mapStateToProps)(Feedback);