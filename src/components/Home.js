import React from 'react';
import hansPic from './hans-pic-bw.jpg';
import { useParams } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Hans Watkins</h1>
            <h2>Software Developer</h2>
            <h2>Music Producer</h2>
            <img src={hansPic} className="portrait" alt="me standing against a blurry background" />
        </div>
    );
};

export default Home;