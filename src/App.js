import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <logo/>
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
