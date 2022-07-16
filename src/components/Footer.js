import React from 'react';
import { useParams } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <ul className='footer-links'>
                <li><a href="https://www.linkedin.com/in/hanswatkins">linkedin</a></li>
                <li><a href="https://www.github.com/hanswatkins">github</a></li>
                <li><a href="https://www.linktr.ee/arbour">music</a></li>
                <li><a href="https://www.instagram.com/prod_arbour">instagram</a></li>
                <li><a href="https://www.youtube.com/prod_arbour">youtube</a></li>
            </ul>
        </div>
    );
};

export default Footer;