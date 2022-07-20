import React, { useState } from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';


const Header = () => {

    

    return (
        <div>
            <header>
                <div className='element'>
                <nav className='nav-bar'>
                    <Link to="/"><img src='https://cdn-icons-png.flaticon.com/512/7470/7470549.png' className='logo' alt='img link to home'></img></Link>
                    <ul className='nav-list'>
                        <li className='list-item'><Link to="/about">about</Link></li>
                        <li className='list-item'><Link to="/projects">projects</Link></li>
                        <li className='list-item'><Link to="/resume">resume</Link></li>
                        <li className='list-item'><Link to="/contact">contact</Link></li>
                    </ul>

                    <div className='flex-padding'></div>
                    
                    <div className='menu'>
                        <div className='menu-line'></div>
                        <div className='menu-line'></div>
                        <div className='menu-line'></div>
                    </div>
                        
                    </nav>
                    </div>
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