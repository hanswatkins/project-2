import React from 'react';
import hansPicBW from './hans-pic-bw.jpg';
import hansPic from './hans-pic.jpg';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <body>
          <div className='image-container'>
            <img
              src={hansPic}
              className='portrait'
              alt='me standing against a blurry background'
            />
            <div className='bio-container'>
              <h1 className='title'>HANS WATKINS</h1>
              <h2 className='software-dev-title'>software developer</h2>
              <h2 className='music-prod-title'>music producer</h2>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Home;
