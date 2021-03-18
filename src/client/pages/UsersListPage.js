import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fecthUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount(){
        this.props.fecthUsers();
    }
    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }
    render(){
        return (
            <div>
                Here's a big list of users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store){
    return store.dispatch(fecthUsers());
}

export { loadData }
export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fecthUsers })(UsersListPage)
};