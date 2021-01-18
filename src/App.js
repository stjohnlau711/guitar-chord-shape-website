import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import ChordShapes from './Components/ChordShapes/ChordShapes';
import Chord from './Components/Chord/Chord';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/chordshapes" exact component = {ChordShapes}/>
          <Route path="/chordshapes/:chordUrl" component = {Chord}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
