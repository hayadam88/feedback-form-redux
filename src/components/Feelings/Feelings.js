import React, {Component} from 'react';
import {connect} from 'react-redux';


class Feelings extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/feedback/feelings')
    } // handle submit

    render() {
        return(
            <>
                <p>How are you feeling?</p>
                <button onClick={this.handleSubmit}>FEELINGS</button>
            </>
        )
    }

}




export default connect()(Feelings);