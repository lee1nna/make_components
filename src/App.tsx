import React from 'react';
import Tooltip from './components/Tooltip'
import './App.css';

function App() {
  return (
      <div className="title">
        <h1>
          〰️ Make Component 〰️
        </h1>
        <div className="component_title">
          1. Tooltip
        </div>
        <Tooltip></Tooltip>
      </div>
  );
}

export default App;