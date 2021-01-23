
import React, {Component} from 'react';
import './Chord.css';
import {ChordItems} from '../ChordShapes/ChordItems';

function Chord ({match}) {
    const shape = ChordItems.find(({url}) => url === match.params.chordUrl);
    return (
        <div className = "Chord">
            <h1 className = "Title">{shape.title}</h1>
            <h3 className = "Note">NOTE: The <mark class="red">red notes</mark> with R indicate the root of the chord,
            meaning you can move these shapes around the neck as long as you know what note you're playing at the root.
            You can also exclude some notes which create the same chord, just with a different voicing. 
             <mark class="move"> ALL THESE SHAPES ARE MOVEABLE ACROSS THE NECK</mark>
            </h3>
            <ul className="Chords"> 
            {shape.images.map((item, index) => { /* map image path in image array to its own container*/
            return (
                <li key={index}> 
                    <div className="image-container">
                        <h3 className ="voicing">Voicing {index + 1}</h3>
                        <img className="shape" src= {item} alt=''/>
                    </div>
                </li>
            )
            })}
        </ul>
      </div>
    );
}

export default Chord;