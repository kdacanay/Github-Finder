import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {

    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });

    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        {/* these are props passing to Navbar.js  */}
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

export default App;
