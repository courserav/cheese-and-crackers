import logo from './logo.svg';
import './App.css';
import React from 'react'
import GameBoard from './components/GameBoard'
import {useSelector, useDispatch} from 'react-redux'
import {createBoard} from './actions'

function App() {
  const gameBoard = useSelector(state => state.board)
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
}

export default App;
