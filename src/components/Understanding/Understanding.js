import React, {Component} from 'react';
import {connect} from 'react-redux';


class Understanding extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/support')
    } // handle submit

    render() {
        return(
            <>
                <p>How well are you understanding today's material?</p>
                <button onClick={this.handleSubmit}>Next</button>
            </>
        )
    }

}




export default connect()(Understanding);