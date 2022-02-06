//import logo from './logo.svg';
//import './App.css';
/*
import ContentBox from "./components/ContentBox";
import ContentBoxinput from "./components/ContentBoxinput";
import StudentTable from "./components/StudentTable";
import Table from "./components/Table";
import Form from "./pages/form";

//import day4 from "./Day4";

function App() {
  const studentList=[
    {slno:"1",
    name:"sonal",
    gender:"female"},
    {slno: "2",
  name:"neha",
gender:"female"},

];
  return (
    <div>
      
    
     <ContentBox message="From props message 3"/>
      <ContentBoxinput/>
      <Table/>
      <StudentTable  data={studentList}/>
      
       <>
        <h2>Hello World</h2>
        </>
    <Form/>
      
    </div>
    
    
  );
}
export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

import form from "./pages/form";
import PromiseDemo from "./pages/PromiseDemo";
import StudentsTable from "./pages/StudentsTable";
import { StudentContextProvider } from "./store/StudentContext";
import CardMenu from "./pages/CardMenu";

function App() {
  return (
    <StudentContextProvider>
      <BrowserRouter>
        <Routes>
         
          
          <Route exact path="/form" element={<form />} />
          <Route exact path="/promise" element={<PromiseDemo />} />
          <Route exact path="/studentstable" element={<StudentsTable />} />
          <Route exact path="/card" element={<CardMenu />} />
        </Routes>
      </BrowserRouter>
    </StudentContextProvider>
  );
}

export default App;


//import Greet from './components/Greet';
//import TableA from './components/TableA';
//import Tempapp from './components/Tempapp';
//import Formmm from './components/Formmm';
import React from "react";
import Form from "./components/Form";
import { ContextApi } from "./components/store/ContextApi";
import Increment from "./components/Increment"
import IncrementF from "./components/IncrementF";

const App = () => {
  return (
    <>
      <div>
        <Increment/>
        <IncrementF/>
      </div>
    </>
  );
};

export default App;
// <Greet />
// <Message name="sonal"/>
// <Message/>
  // <Tempapp/>
    // <Formmm/>
    // //<ContextApi>
    // <Form />
    // </ContextApi>
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Let\'s see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
    setUserChoice(value)    
    generateComputerChoice()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1
        setUserPoints(updatedUserPoints)
        setTurnResult('User gets the point!')
        if (updatedUserPoints === 5){
          setResult('User Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResult('Computer gets the point!')
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins')
          const gameOff = true
          setGameOver(gameOff)
        }
      }

      if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
        setTurnResult('No one gets a point!')
      }
    }
  }, [computerChoice, userChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock-Paper-Scissors</h1>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`./src/images/${computerChoice}.png`} alt=''></img>
        </div>
      </div>
      
      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default App*/
import React, { useState, useEffect } from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 }
];

// 1. handle wins + losses
// 2. determine the winner based on choices
// 3. reset the game

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); // win, lose, draw

  useEffect(() => {
    restartGame();
  }, []);

  function restartGame() {
    setGameState(null);
    setUserChoice(null);

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUserChoice(choice) {
    const chosenChoice = choices.find(c => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      // lose
      setLosses(losses => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === chosenChoice.id) {
      // win
      setWins(wins => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === chosenChoice.id) {
      // draw
      setGameState('draw');
    }
  }

  function renderComponent(choice) {
    const Component = choice.component; // Paper, Rock, Scissors
    return <Component />;
  }

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ? 'Win' : 'Wins'}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? 'Loss' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/lose/draw */}
      {gameState && (
        <div
          className={`game-state ${gameState}`}
          onClick={() => restartGame()}
        >
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              {/* <p>you {gameState}!</p> */}
              {gameState === 'win' && <p>Congrats! You won!</p>}
              {gameState === 'lose' && <p>Sorry! You lost!</p>}
              {gameState === 'draw' && <p>You drew!</p>}

              <p>{renderComponent(computerChoice)}</p>
            </div>

            <button>Play Again</button>
          </div>
        </div>
      )}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}