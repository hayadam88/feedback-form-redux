import React, {Component} from 'react';
import {connect} from 'react-redux';


class Finish extends Component {


    render() {
        return(
            <>
                <h1>You did it!</h1>
            </>
        )
    }

}




export default connect()(Finish);