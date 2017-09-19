import React, { Component } from 'react';
import Table from '../components/Table';
import NavigationDashboard from '../components/NavigationDashboard';
import logo from '../assets/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Table />
        <NavigationDashboard />
      </div>
    );
  }
}

export default App;
