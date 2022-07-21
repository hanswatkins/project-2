import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [movie, setMovie] = useState()
    const [error, setError] = useState()

    const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random"
    
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    
    console.log(movie)
    const getWow = () => {
    
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            
            setMovie(response[0])
        })
        .catch(err => {
            setError(err)
        })
            // document.querySelector('.movie').innerHTML = response[0].movie
            // document.querySelector('.character').innerHTML = response[0].character
            // document.querySelector('.poster').src = response[0].poster
            // document.querySelector('.video').src = response[0].video
    } 
    useEffect(()=>{
        getWow() 

    },[])
    if(!movie) {
        return null
    }
    if(error) {
        return <p>oh no, you encountered an error! try again</p>
    }
    return (
        <div className='projects-div'>
            <h1 className='wow-title'>Wow Generator!</h1>
            <p className='wow-facts-p'>In {movie.movie}, Owen Wilson plays {movie.character}. He says "Wow" {movie.total_wows_in_movie} times!</p>
            <div className='video-wrapper'>
            <video className='video' src={movie.video["1080p"]} autoPlay>
            </video>
            <button type='submit' onClick={getWow}>Wow Me</button>
            </div>
    

            


            

            {/* <p>JS Pixart</p>
            <p>Pokemon Searcher</p>
            <p>Tic Tac Toe</p> */}




        </div>
    );
};

export default Projects;