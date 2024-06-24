import { useTranslation } from "react-i18next";

// CSS
import './NotFound.css'

function NotFound() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <h1 className="not-found-title">{t('Página no encontrada :(')}</h1>
        </>
    )
}

export default NotFound