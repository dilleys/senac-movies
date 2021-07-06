import React from 'react'
import {movies} from '../../Data/movies';

const Movies = () => {
    return(
        <div>
            <h1>Movies</h1>
            <hr/>

            {movies.map((movie)=>
                <h3>{movie.Title}</h3>
            )}
        </div>
    )
}

export default Movies;