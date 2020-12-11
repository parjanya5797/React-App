import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      {/* 
      <Greet name="Ram">
        <p> THis is Ram Children</p>
      </Greet>
      <Welcome name="Ram">
        <button>This is a Class Button</button>
        </Welcome>    
      <Hello/> 
      <Greet name="Shyam" heroName="Hero">
        </Greet>   
  */}

    {/* <Message>
    </Message> */}
    <Counter></Counter>
    </div>
  );
}

export default App;
