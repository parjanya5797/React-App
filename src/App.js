import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Pars from './components/test';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/functionClick';
import ClassClicked from './components/ClassClicked';
function App() {
  return (
    <div className="App">
      
      {/* <Greet name="Ram" heroName="Hero">
        <p> THis is Ram Children</p>
      </Greet> */}
      <FunctionClick></FunctionClick>
      <ClassClicked></ClassClicked>
      {/* <Welcome name="Ram">
        <button>This is a Class Button</button>
        </Welcome>    
      <Hello/> 
      <Greet name="Shyam" heroName="Hero">
        </Greet>    */}
 

    {/* <Message>
    </Message> */}
    {/* <Counter></Counter> */}
    {/* <Greets></Greets>
    <Pars></Pars> */}
    </div>
  );
}

export default App;
