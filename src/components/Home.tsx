import logo from '../icons/logo.jpg';
import '../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
export class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Trivia game!</p>

        <Link to="/game">Start</Link>
      </div>
    );
  }
}
