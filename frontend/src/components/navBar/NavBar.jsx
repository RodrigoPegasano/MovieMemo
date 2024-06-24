// IMPORTS
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { SessionContext } from '../../contexts/LoginContext';

// CSS
import './NavBar.css'

function NavBar() {

    const { t, i18n } = useTranslation();
    const { user, login, logout } = useContext(SessionContext)

    useEffect(() => {
        console.log(i18n.language)
    }, [])

    function changeLang(e) {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <nav className='navBar'>
                <div className='nav-left'>
                    <Link className='nav-logo link' to={'/'}>
                        MovieMemo
                    </Link>
                </div>

                {user ?
                    <div className='nav-middle'>
                        <Link className='nav-middle-margin link box-black' to={'/movies'}>
                            {t('Películas')}
                        </Link>
                        {user.email === "rodrigo@gmail.com" ?
                            <Link className='nav-middle-margin link box-black' to={'/users'}>
                                {t('Usuarios')}
                            </Link>
                            :
                            ""
                        }

                    </div>
                    :
                    ""
                }

                {user ?
                    <div className='nav-right'>
                        <select onChange={changeLang} className='nav-right-margin langs box-black-fixed remove-arrow'>
                            <option selected={"es" === i18n.language} value="es">
                                ES
                            </option>
                            <option selected={"en" === i18n.language} value="en">
                                EN
                            </option>
                            <option selected={"pt" === i18n.language} value="pt">
                                PT
                            </option>
                        </select>

                        <Link className='nav-right-margin link box-blue' to={'/add-new'}>
                            + {t('Agregar')}
                        </Link>

                        <button onClick={logout} className='nav-right-margin box-red button-logout'>
                            {t('Cerrar sesión')}
                        </button>
                    </div>
                    :
                    <div className='nav-right'>
                        <select onChange={changeLang} className='nav-right-margin langs box-black-fixed remove-arrow'>
                            <option selected={"es" === i18n.language} value="es">
                                ES
                            </option>
                            <option selected={"en" === i18n.language} value="en">
                                EN
                            </option>
                            <option selected={"pt" === i18n.language} value="pt">
                                PT
                            </option>
                        </select>

                        <Link className='nav-right-margin link box-black-fixed' to={'/login'}>
                            {t('Iniciar sesión')}
                        </Link>

                        <Link className='nav-right-margin link box-blue' to={'/signup'}>
                            {t('Regístrate')}
                        </Link>
                    </div>
                }

            </nav>
        </>
    )
}

export default NavBar