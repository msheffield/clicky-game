import React from 'react';
import Jumbotron from './components/Jumbotron';
import Gameboard from './components/Gameboard';
import './App.css';

function App() {

  return (
    <div>
      <Jumbotron>
        <h1>Clicky Game!</h1>
        <h3>Don't click on the same image twice</h3>
      </Jumbotron>

      <Gameboard />
    </div>
  );
}

export default App;
