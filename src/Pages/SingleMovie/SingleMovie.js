import React from 'react';
import { useQuery } from '../../hooks';
import { Link } from 'react-router-dom';

const SingleMovie = () => {
    const query = useQuery();
    return(
        <div>
            <h1>{query.get('Title')}</h1>
            <img src={query.get('Poster')}/>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default SingleMovie;