import React, {Component} from 'react';
import {connect} from 'react-redux';


class Support extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/comments')
    } // handle submit

    render() {
        return(
            <>
                <p>How well are you being supported?</p>
                <button onClick={this.handleSubmit}>Next</button>
            </>
        )
    }

}




export default connect()(Support);