import React, {Component} from 'react';
import {connect} from 'react-redux';


class StartSurvey extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/feedback/feelings')
    } // handle submit

    render() {
        return(
            <>
                <button onClick={this.handleSubmit}>START SURVEY</button>
            </>
        )
    }

}




export default connect()(StartSurvey);