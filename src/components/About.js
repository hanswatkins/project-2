import React from 'react';
import { useParams } from 'react-router-dom';
import pianoPic from './pianopic.jpg'

const About = () => {
    return (
        <div>
            <body>
                <div className='image-container-about'>
                    
                    <div className='bio-container-about'>
                        <img src={pianoPic} className='piano-pic' alt='my hands on a piano keyboard close-up'></img>
                        <h1 className='about-header'>About</h1>
                        <p class="about-paragraph">I began my career as a freelance music producer. I had the privilege of <a href="https://open.spotify.com/track/66zE85sYeTb6cmVdZbJtK2?si=66b96654352b4f22">recording at Spotify's recording studio in Los Angeles</a>, < a href="https://www.youtube.com/watch?v=CcxzkM5i8Ns">developing partnerships with Universal Music Group, Bluenote Records</a>, and <a href="https://www.ableton.com/en/blog/studies-sound-arbour-lo-fi-beats-and-musical-exploration/">Ableton</a>, and <a href="https://www.youtube.com/watch?v=45zum9ZXiDY">making music for every major "24/7 lofi beats to study to" live stream</a> out there.
                        <br></br>
                        <br></br>
                        Now, my curiosity has led me in the direction of Software Engineering. In June I enrolled in General Assembly's Software Engineering Immersive and I'll be graduating with over 500 hours of engineering experience in August 2022.</p>
                        
                        <p>Technologies:</p>

                    
                        
                    
                    </div>
                

                    <ul className="skills-list">
                        <li>&#10095; HTML5</li>
                        <li>&#10095; CSS3</li>
                        <li>&#10095; JavaScript</li>
                        <li>&#10095; React.js</li>
                        <li>&#10095; Node.js</li>
                        <li>&#10095; Express</li>
                        <li>&#10095; MongoDB</li>
                        <li>&#10095; Mongoose</li>
                        <li>&#10095; Python</li>
                        <li>&#10095; Django</li>
                        <li>&#10095; Postgres</li>
                        <li>&#10095; AWS</li>
                        <li>&#10095; S3</li>
                    </ul>
                </div>
            </body>
        </div>
    );
};

export default About;