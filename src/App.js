import React from 'react';
import './App.css';
import {choice, remove} from './helpers.js';
import fruits from "./foods.js";

function App() {
  let result = choice(fruits)
  return (
    <div className="App">
      
    
      <h3>I'd like one `${result}`, please</h3>
      <h3>"Here you go: {remove(fruits, `${result}`)} </h3>
      <h3>"Delicious! May I have another?</h3>
      <h3>"I'm sorry, we're all out. We have {fruits.length-1} left</h3>
    </div>
  );
}

export default App;
