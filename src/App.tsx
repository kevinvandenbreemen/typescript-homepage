import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HelloComponent';
import { Message } from './components/HelloComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message message="Hello Wosssrld"/>
      </header>
    </div>
  );
}

export default App;
