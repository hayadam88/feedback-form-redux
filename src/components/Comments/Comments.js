import React, {Component} from 'react';
import {connect} from 'react-redux';



class Comments extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/review')
    } // handle submit

    render() {
        return(
            <div>
                <p>Care to share any comments?</p>
                <button onClick={this.handleSubmit}>Next</button>
            </div>
        )
    }

}




export default connect()(Comments);