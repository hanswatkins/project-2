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
                        <p class="about-paragraph">I began my career as a freelance music producer. I was invited to record at Spotify's recording studio in Los Angeles, developed partnerships with Universal Music Group and Bluenote Records, and made music for every major "24/7 lofi beats to study to" live stream out there. Now my curiosity is leading me in the direction of Software Engineering. In June I enrolled in General Assembly's Software Engineering Immersive and I'll be graduating with over 500 hours of engineering experience in August 2022.</p>
                        
                        <p>technologies</p>

                    
                        
                    
                    </div>
                </div>

                <ul className="skills-list">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Postgres</li>
                    <li>AWS</li>
                    <li>S3</li>
                </ul>
            </body>
        </div>
    );
};

export default About;