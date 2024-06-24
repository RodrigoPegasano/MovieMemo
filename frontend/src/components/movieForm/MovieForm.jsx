// CSS
import './MovieForm.css'

// Imports
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { SessionContext } from '../../contexts/LoginContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function MovieForm() {

    const { t, i18n } = useTranslation();
    const { user } = useContext(SessionContext)
    const [datos, setDatos] = useState({ cover: "", title: "", category: "", year: "", rating: "", description: "" })

    const alertMovieAdded = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "Película agregada",
            showConfirmButton: false,
            timer: 2000
        })
    }

    const alertMovieError = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "error",
            title: "Error",
            text: "No ha sido posible agregar la palícula"
        })
    }

    function addNewMovie() {
        axios.post(`http://localhost:3000/movies?token=${user.token}`, datos)
            .then(() => {
                alertMovieAdded()
            })
            .catch((error) => {
                alertMovieError()
                console.log(error)
            })
    }

    return (
        <>
            <form className="movie-form">
                <fieldset className='movie-form-left'>
                    <div>
                        <img className='image-form' src={datos.cover}></img>
                    </div>

                    <input value={datos.cover} onChange={(e) => setDatos({ ...datos, cover: e.target.value })} className='image-input' placeholder={t('Enlace de la foto')} type="text" name='cover' />
                </fieldset>

                <fieldset className='movie-form-right'>
                    <div>
                        <input value={datos.title} onChange={(e) => setDatos({ ...datos, title: e.target.value })} className="movie-input" type="text" name="title" placeholder={t('Nombre de la película')} />
                    </div>

                    <div>
                        <input value={datos.category} onChange={(e) => setDatos({ ...datos, category: e.target.value })} className="movie-input" type="text" name="category" placeholder={t('Categoría')} />
                    </div>

                    <div>
                        <input value={datos.year} onChange={(e) => setDatos({ ...datos, year: e.target.value })} className="movie-input-margin-right" type="number" name="year" placeholder={t('Año')} />
                        <input value={datos.rating} onChange={(e) => setDatos({ ...datos, rating: e.target.value })} type="number" name="rating" placeholder={t('Puntaje (0-5)')} />
                    </div>

                    <div>
                        <textarea value={datos.description} onChange={(e) => setDatos({ ...datos, description: e.target.value })} className='movie-input' name="description" cols="10" rows="5" maxLength={200} placeholder={t('Descripción')} />
                    </div>
                </fieldset>
            </form>

            <button onClick={addNewMovie} className="movie-button" type="submit">{t('Agregar')}</button>
        </>
    )
}

export default MovieForm