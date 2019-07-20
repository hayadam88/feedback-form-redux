import React, {Component} from 'react';
import {connect} from 'react-redux';


class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({

            [propertyName]: event.target.value

        })
    }

    handleSubmit = (event) => {
        this.props.history.push('/support')
        this.props.dispatch({
            type: `SET_UNDERSTANDING`,
            payload: this.state
        })
    }

    render() {
        return(
            <>
                <p>How well are you understanding today's material? 1 being totally lost; 5 being you could teach it yourself.</p>
                <input type="radio" name="feedback" value="1" 
                onChange={(event) => this.handleChangeFor('understanding', event)}/>1 
                <br/>
                <input type="radio" name="feedback" value="2" 
                onChange={(event) => this.handleChangeFor('understanding', event)}/>2
                <br/>
                <input type="radio" name="feedback" value="3" 
                onChange={(event) => this.handleChangeFor('understanding', event)}/>3
                <br/>
                <input type="radio" name="feedback" value="4" 
                onChange={(event) => this.handleChangeFor('understanding', event)}/>4
                <br/>
                <input type="radio" name="feedback" value="5" 
                onChange={(event) => this.handleChangeFor('understanding', event)}/>5 
                <br/>
                <button onClick={this.handleSubmit}>Next</button>
            </>
        )
    }

}




export default connect()(Understanding);