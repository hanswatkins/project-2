import React, { useState } from 'react';

const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random"

const options = {method: 'GET', headers: {Accept: 'application/json'}};

const getWow = () => {

fetch(url, options)
    .then(response => response.json())
    .then(response => {

        document.querySelector('.movie').innerHTML = response[0].movie
        document.querySelector('.character').innerHTML = response[0].character
        document.querySelector('.poster').src = response[0].poster
        // document.querySelector('.video').src = response[0].video[0]
        document.querySelector('.video').src = response[0].video

            })
            .catch(err => console.error(err));
}
const Projects = () => {
    return (
        <div className='projects-div'>
            <button type='submit' onClick={getWow}>Click me then check console</button>
            <div className='movie'></div>
            <div className='character'></div>
            <video className='video' src="" width='320' height='240' controls>
            </video>
            <img className='poster' src='' width='320' height='auto' alt=''></img>

            


            

            {/* <p>JS Pixart</p>
            <p>Pokemon Searcher</p>
            <p>Tic Tac Toe</p> */}




        </div>
    );
};

export default Projects;