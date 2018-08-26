import React, { Component } from 'react';

import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>All Users</h2>
        <UserList />
        <hr />
        <h2>Details</h2>
        <UserDetail />
      </div>
    );
  }
}

export default App;
