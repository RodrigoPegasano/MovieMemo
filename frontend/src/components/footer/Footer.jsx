// IMPORTS
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

// CSS
import './Footer.css'

function Footer() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className='footer'>
                <Link className='footer-link' to="/">{t('Política de Privacidad')}</Link>
                <Link className='footer-link gap' to="/">{t('Preguntas Frecuentes')}</Link>
                <Link className='footer-link' to="/">{t('Contacto')}</Link>
            </div>
        </>
    )

}

export default Footer