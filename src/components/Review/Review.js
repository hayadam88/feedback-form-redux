import React, {Component} from 'react';
import {connect} from 'react-redux';


class Review extends Component {


    render() {
        return(
            <>
                <h3>Please review your feedback below, and then click submit.</h3>
            </>
        )
    }

}




export default connect()(Review);