import React from 'react';
import { useParams } from 'react-router-dom';

const Resume = () => {
    return (
        <div>
            {/* You can view and download my resume <a href="https://docs.google.com/document/d/1Gx3JwOODc4qOFvkG9NsVxPdTrbw-mE0HobyCYdBzDIA/edit?usp=sharing" rel="noreferrer">here</a> */}

            <iframe title='test' src="https://docs.google.com/document/d/e/2PACX-1vQX4GGWczXu2QjpcbhIc1gwgFT9YsM9XBbVBtRsJvPzANKEoR_LFiwEZKfqYE_No1_jxiNGHkKYBPah/pub?embedded=true"></iframe>
        </div>
    );
};

export default Resume;