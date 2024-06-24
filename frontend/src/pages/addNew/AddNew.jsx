import { useTranslation } from "react-i18next";
import MovieForm from "../../components/movieForm/MovieForm"

function AddNew() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <h1>{t('Agrega una nueva película')}</h1>
            <MovieForm></MovieForm>
        </>
    )
}

export default AddNew