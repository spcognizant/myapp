import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Header</span>
          </nav>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
