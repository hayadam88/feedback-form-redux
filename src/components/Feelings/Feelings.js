import React, {Component} from 'react';
import {connect} from 'react-redux';
import './feelings.css'


class Feelings extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/understanding')
    } // handle submit

    render() {
        return(
            <div>
                <p>How are you feeling?</p>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        )
    }

}




export default connect()(Feelings);