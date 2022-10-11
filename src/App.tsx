import React from 'react';
import logo from './logo.svg';
import './App.css';

import UseEffectExample, {Counter } from "./UseEffectExample"
import Component1 from './UseContextExample';
import UseRefExample, { Focus, Tracking } from './UseRefExample';

import UseStateExample, { Car } from './UseStateExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
