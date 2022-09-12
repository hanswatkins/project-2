import React from 'react';
import { useParams } from 'react-router-dom';
import email from './email.png';

const Contact = () => {
  return (
    <body className='contact-div'>
      <div className='contact-div-2'>
        <a className='email' href='mailto:hanswatkins@gmail.com'>
          <img src={email} alt='mail icon' width='50px'></img>
        </a>
      </div>
    </body>
  );
};

export default Contact;
