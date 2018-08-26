import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        return(
            <div>
                <h3>Name {this.props.activeUser.first} {this.props.activeUser.last}</h3>
                <h4>Age {this.props.activeUser.age}</h4>
                <h4>Description {this.props.activeUser.description}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      user: state.users.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);