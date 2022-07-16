import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const MobileNav = () => {
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

export default MobileNav;