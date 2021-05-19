import React from 'react';
import './App.css';
import { ActionLogView } from './game/GameLoop';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dreadsplorer
        </p>
      </header>
      <ActionLogView />
    </div>
  );
}

export default App;
