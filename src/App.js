import { useParams } from 'react-router-dom';
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import React from 'react';

const Home = (props)=>{
  return(
    <h2 style={{color:"green"}}>Welcome</h2>
  )
}

const WordNumber = (props)=>{
  const {chose} = useParams();
  return(
    isNaN(chose)?
    <h2>It is displaying the input word: {chose}</h2>:
    <h2>This is a number you entered: {chose}</h2>
  )
}

const StyledHello = (props)=>{
  const{word, color, bgColor} = useParams();
  return(
    isNaN(word)?
    <div className="H2">
      <h2 style={ color? {color:color, backgroundColor:bgColor}:null}>Hello, Welcome {word}</h2>
    </div>:
    <h2>This is a number: {word}</h2>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/:chose" element ={<WordNumber/>}/>
      <Route path="/:word/:color/:bgColor" element ={<StyledHello/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
