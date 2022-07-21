import React, { useState } from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import { Link, Route, Routes } from 'react-router-dom';
import logo from './home (1) copy.png'


const Header = () => {

    

    return (
        <div>
            <header>
                <div className='element'>
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li className='list-item-1'><Link to="/">home</Link></li> 
                        <li className='list-item-2'><Link to="/about">about</Link></li>
                        <li className='list-item-3'><Link to="/projects">projects</Link></li>
                        <li className='list-item-4'><Link to="/resume">resume</Link></li>
                        <li className='list-item-5'><Link to="/contact">contact</Link></li>
                    </ul>

          
                    
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