import React from 'react';
import Increment from './components/Increment'
import RockIt from './components/RockIt'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> From JS to React</h1>
      </header>
      <section>
        <Increment />
        <RockIt />
      </section>

    </div>
  );
}

export default App;
