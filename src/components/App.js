import React, { Component } from 'react';

import UserList from '../containers/user-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>All Users</h2>
        <UserList />
        <hr />
        <h2>Details</h2>
      </div>
    );
  }
}

export default App;
