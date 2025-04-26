import React from 'react';
import Game from './components/game/game';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className='content'>
        <Game />
      </div>
    </div>
  );
};

export default App;
