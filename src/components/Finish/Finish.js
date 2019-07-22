import React, {Component} from 'react';
import {connect} from 'react-redux';


class Finish extends Component {


    render() {
        return(
            <>
                <h1>Thank you for submitting your feedback!</h1>
            </>
        )
    }

}




export default connect()(Finish);