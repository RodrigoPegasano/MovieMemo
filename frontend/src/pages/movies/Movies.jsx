// CSS
import './Movies.css'

import MovieCard from '../../components/movieCard/MovieCard'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SessionContext } from '../../contexts/LoginContext';

function Movies() {

    const [movies, setMovies] = useState([]);
    const { user } = useContext(SessionContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/movies?token=${user.token}`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <>
            <div className='container-movies'>
                <div className="all-movies">
                    {movies.map(movie => <MovieCard movie={movie}></MovieCard>)}
                </div>
            </div>
        </>
    )
}

export default Movies