import React from 'react';
import { useParams } from 'react-router-dom';

const Resume = () => {
    return (
        <div>
            {/* You can view and download my resume <a href="https://docs.google.com/document/d/1Gx3JwOODc4qOFvkG9NsVxPdTrbw-mE0HobyCYdBzDIA/edit?usp=sharing" rel="noreferrer">here</a> */}

            {/* <iframe title='test' src="https://docs.google.com/document/d/e/2PACX-1vQX4GGWczXu2QjpcbhIc1gwgFT9YsM9XBbVBtRsJvPzANKEoR_LFiwEZKfqYE_No1_jxiNGHkKYBPah/pub?embedded=true"></iframe> */}

            
<p className='resume'>
                
                    <h1>Hans Watkins | Front-End Web Developer</h1>

    <p>hanswatkins.com | 425-802-9812 | hanswatkins@gmail.com  | in/hanswatkins | github.com/hanswatkins</p>



    <h2>RELEVANT EXPERIENCE</h2>

    <h3>Space Battle |  Solo</h3>                                    

    <p>Developer | July 2022 | Live | Github</p>                                                            

    <ul>
        <li>Used only JavaScript to create a turn-based space battle game</li>
        <li>Styled console read-outs using CSS to create an interactive experience for the user</li>
        <li>Third Thing</li>
    </ul>

    <h3>Random Cat Generator |  Solo Project</h3>                                     

    <p>Developer | July 2022 | Live | Github</p>                                                           

    <ul>
        <li>Used The Cat API to create a website that generates random cat images and search cat images by category</li>
        <li>Used HTML, CSS, JavaScript, DOM, Events, APIs and AJAX to create the website</li>
        <li>Deployed using GitHub Pages</li>
    </ul>

    <h3>Pixart |  Solo Project</h3>                                     

    <p>Developer | June 2022 | Live | Github</p>                                                            

    <ul>
        <li>Created a web application for drawing pixel art with user-chosen colors</li>  
        <li>Used HTML and CSS to style the page and change the color of pixels on mouse hover</li>
        <li>Deployed project using Netlify</li>  
    </ul>

    <h2>WORK EXPERIENCE</h2>

    <h3>Music Producer</h3> 

    <p>Los Angeles 2017-2022</p>
    <p>Arbour</p>

    <ul>
        
        <li>Collaborated with producers to deliver professional quality songs to labels under strict deadlines & industry standards of audio fidelity</li>
        <li>Amassed over 200,000,000 streams on my songs across Spotify and Apple Music by creating promotional content on social media and running paid ad campaigns based on listener data</li>
        <li>Hired by Universal Music Group to star in a commercial for professional studio monitor company
        Created music and video content for Ableton and Bluenote Records</li>
    </ul>



    <h2>TECHNICAL SKILLS</h2>

    <p>HTML | JavaScript | CSS | SQL | Git | Github | Ruby | Python | Node | Express.js </p>

    <h2>EDUCATION</h2>

    <h3>General Assembly</h3>                             
    <p>Los Angeles, CA</p>

    <p>Software Engineering Immersive August 2022</p>

    <p>Current student at General Assembly's Software Engineering Immersive Program. I work with HTML, CSS, Javascript, React.js and APIs to build interactive websites and web applications. I create and submit software engineering deliverables with quick turnarounds.</p>

    <p>Western Washington University     |    Bellingham, WA</p>

    <p>Multidisciplinary Studies / Audio Engineering   |     June 2018</p>

    </p>
</div>
    );
};

export default Resume;