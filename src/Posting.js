import React from 'react';
import { postings } from './postings.js';

function Posting() {
    const postList = postings.map((posting, i) => (
        <div key={i}>
            <h2>{posting.title}</h2>
            <img src={posting.imageURL} alt={posting.title} />
            <p>{posting.description}</p>
            <p>{posting.price}</p>
        </div>
    ));

    return (
        <div>
            
            {postList}
        </div>
    );
}

export default Posting;
