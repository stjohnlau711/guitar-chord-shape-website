import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1 className="Title">Home Page</h1>
      <p className = "head1">Welcome! Click on the Chord Shapes button in the top right corner to get started and search for the chord shape you're looking for!</p>
      <p className ="head2">Below is a chart of all the notes on the fretboard for reference in case you need it</p>
      <img className="fretboard" src="images/fretboard.png"></img>
    </div>
  );
}

export default Home;
