import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(<p>Select a user...</p>);
        }
        return(
            <div>
                <h3>Name {this.props.user.first} {this.props.user.last}</h3>
                <h4>Age {this.props.user.age}</h4>
                <h4>Description {this.props.user.description}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);