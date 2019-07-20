import React, {Component} from 'react';
import {connect} from 'react-redux';


class Understanding extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/support')
    } // handle submit

    render() {
        return(
            <>
                <p>How well are you understanding today's material? 1 being totally lost; 5 being you could teach it yourself.</p>
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




export default connect()(Understanding);