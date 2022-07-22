import React from 'react';
import { useParams } from 'react-router-dom';

const Contact = () => {
    return (
        <body className='contact-div'> 
            <div className="contact-div-2">
                <a className="email" href="mailto:hanswatkins@gmail.com"><img src='https://cdn-icons.flaticon.com/png/512/2549/premium/2549872.png?token=exp=1658462420~hmac=58b01986435095a2f9d67b50ff5eb59c' alt="mail" width='50px' ></img></a>
            </div>
        </body>
    );
};

export default Contact;