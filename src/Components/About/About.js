import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';

function About() {
  return (
    <div className="About">
      <h1 className="Title">About Page</h1>
      <p className="p1">Hi! My name's St John (pronounced like
         <a href = "https://victorious.fandom.com/wiki/Sinjin_Van_Cleef" target="_blank"> Sinjin from Victorious</a>),
          and I'm a computer science student at NYU. I've been playing guitar since the beginning of high school,
          and I decided to make this website as a small project on the side because I found that when I first
          started learning guitar, all I wanted was a resource that would allow me to find all the chord shapes
          I wanted to learn that was sorted in a clean and efficient way. So, hopefully this website
          serves as that tool for you guys! 
        </p>
        <p className="p2">This website is always work in progress, and I'll be adding more shapes and 
        adding other functionalities as time passes. For any inquiries, email sjl792@nyu.edu</p>
      
        <p className="p3">I've also released an EP titled <mark className="ep"> Empathizer</mark> that's available on a bunch of different streaming services such as Spotify
          and Apple Music, so if you guys enjoy the website it'd be amazing if you could check it out!
        </p>

        <div className="EP-Container">
          <img className='cover' src="images/EPCover.jpg"></img>
          <ul className="Links">
            <li><a className="link" href="https://open.spotify.com/album/6sOhXDp7v1Zgj0OS6fPS65" target="_blank">Spotify</a></li>
            <li><a className="link" href="https://music.apple.com/us/album/empathizer/1548055492?uo=4&app=music&at=1001lry3&ct=dashboard" target="_blank">Apple Music</a></li>
            <li><a className="link" href="https://www.amazon.com/gp/product/B08SJ9Z3Z3/?tag=distrokid06-20" target="_blank">Amazon</a></li>
          </ul>
        </div>
    </div>
  );
}

export default About;
