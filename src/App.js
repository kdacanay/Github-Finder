import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        {/* these are props passing to Navbar.js  */}
        <Navbar title='Github Finder' icon='fab fa-github' />
        <UserItem />
      </div>
    );
  }

}

export default App;
