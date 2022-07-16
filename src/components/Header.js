import React from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <header>
                <nav className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/resume" element={<Resume />}/>
                <Route path="/contact" element={<Contact />}/>

            </Routes>
        </div>
    );
};

export default Header;