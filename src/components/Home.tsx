import logo from '../logo.jpg';
import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Trivia game!</p>
        </header>
        <Link to="/game">Start</Link>
      </div>
    );
  }
}
