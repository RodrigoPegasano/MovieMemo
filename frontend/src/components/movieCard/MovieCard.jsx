// CSS
import './MovieCard.css'

import axios from 'axios';
import { SessionContext } from '../../contexts/LoginContext';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MovieCard({ movie }) {

    const { t, i18n } = useTranslation();
    const { user } = useContext(SessionContext)
    const navigate = useNavigate()

    const alertDeleted = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "Película eliminada",
            showConfirmButton: false,
            timer: 2000
        })
    }

    const alertDeleteError = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "error",
            title: "Error",
            text: "No hemos podido eliminar la película"
        })
    }

    function deleteMovie() {
        axios.delete(`http://localhost:3000/movies/${movie._id}?token=${user.token}`)
            .then(() => {
                alertDeleted()
                setTimeout(() => {
                    navigate("/movies")
                }, 2000)
            })
            .catch((error) => {
                alertDeleteError()
                console.log(error)
            })
    }

    return (
        <>
            <div className="movie-card">
                <div className='movie-foto'>
                    <button onClick={deleteMovie} className='delete-movie'>🗑️</button>
                    <img className='resize-img' src={movie.cover} />
                </div>
                <div className='movie-info'>
                    <div className='movie-info-1'>
                        <span className='info-category'>{movie.category}</span><span className='info-rating'>{movie.rating} / 5 ⭐</span>
                    </div>
                    <div className='movie-info-2'>
                        <span className='info-title'>{movie.title}</span><span className='info-year'>{movie.year}</span>
                    </div>
                    <div className='movie-info-3'>
                        <span>{movie.description}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard