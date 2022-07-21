import React, { useState } from 'react';

const url = "https://freesound.org/apiv2/search/text/?query=piano&token=dnMog3P0vhwYkNgMSeESULPEHkZN3jlouKQlO958	"

const fetchTheStuff = () => {

fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log('success!', res);
    })
    .catch(err => {
        console.log('something went wrong...', err);
    })
    
}

const Projects = () => {
   return (
        <div className='projects-div'>
            <button type='submit' onClick={fetchTheStuff}>Click me check console</button>
            <div className='joke-response'></div>
            <div className='punchline'></div>


            

            {/* <p>JS Pixart</p>
            <p>Pokemon Searcher</p>
            <p>Tic Tac Toe</p> */}




        </div>
    );
};

export default Projects;