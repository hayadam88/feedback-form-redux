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
                <p>How are you feeling? 1 being terrible; 5 being fantastic.</p>
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
            </div>
        )
    }

}




export default connect()(Feelings);