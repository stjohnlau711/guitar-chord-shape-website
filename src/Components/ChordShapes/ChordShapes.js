import React from 'react';
import ReactDOM from 'react-dom';
import './ChordShapes.css';
import {ChordItems} from './ChordItems';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
import Chord from '../Chord/Chord';

function ChordShapes({match}) {
  return (
    <div className="ChordShapes">
      <h1 className="Title">Chord Shapes</h1>
      <h3 className="Note">Click on the general chord shape you're trying to find. There are multiple
      voicings for each shape, so even if you know the chords you might find a new shape to play around with!</h3>
      <ul className="Chords"> 
        {ChordItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to ={`${match.url}/${item.url}`} style={{ textDecoration: 'none' }} >
                <a className={item.cName}>
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>

      {/*<Route path = {`${match.url}/:chordUrl`} component={Chord} /> */}
      {/*keeping above code ^^^ just in case */}
      
    </div>
  );
}

export default ChordShapes;
