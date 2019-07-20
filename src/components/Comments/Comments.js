import React, {Component} from 'react';
import {connect} from 'react-redux';



class Comments extends Component {

    handleSubmit = (event) => {
        this.props.history.push('/review')
    } // handle submit

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <p>Care to share any comments?</p>
                <input required type="text" size="35" placeholder="Please enter a comment"></input>
                <button>Submit comment</button>
            </form>
        )
    }

}




export default connect()(Comments);