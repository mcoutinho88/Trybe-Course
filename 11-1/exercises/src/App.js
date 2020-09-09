import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['Estudar React', 'Estudar Javascript', 'Estudar CSS'];
  return (
    <div className="App">
      {tasks.map(eachTask => task(eachTask))}
    </div>
  );
}

export default App;
