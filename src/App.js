import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Games from './components/Games';
import Streams from './components/Streams';
import Header from './components/Header';
import GameStreams from './components/GameStreams';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <h1>Start Editing</h1>
        <h2>This is a setup application</h2>
      </div> */}
      <div className="App container-fluid">
        <Header />
        <Route exact path="/" component={Games} />
        <Route exact path="/top-streams" component={Streams} />
        <Route exact path="/game/:id" component={GameStreams} />
      </div>
    </Router>
  );
}

export default App;
