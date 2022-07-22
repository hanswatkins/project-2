import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    return (
        <body className='contact-div'> 
            <div className="contact-div-2">
                <a className="email" href="mailto:hanswatkins@gmail.com">click here (opens in a new tab)</a>
            </div>
        </body>
    );
};

export default Contact;