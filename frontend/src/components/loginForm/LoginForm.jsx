import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import axios from 'axios'

// CSS
import './LoginForm.css'
import { SessionContext } from '../../contexts/LoginContext';

function LoginForm() {

    const { t, i18n } = useTranslation();

    const [datos, setDatos] = useState({email: "", password: ""})
    const {login} = useContext(SessionContext)

    function doLogin() {
        axios.post("http://localhost:3000/users/login", datos)
        .then((response) => {
            console.log(response.data)
            login({ email: datos.email, token: response.data.token, role: datos.role});
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="login-form">
                <div>
                    <input className="login-input" value={datos.email} onChange={(e) => setDatos({...datos, email: e.target.value})} type="email" name="email" placeholder={t('Correo electrónico')} />
                </div>

                <div>
                    <input className="login-input" value={datos.password} onChange={(e) => setDatos({...datos, password: e.target.value})} type="password" name="password" placeholder={t('Contraseña')} />
                </div>

                <button onClick={doLogin} className="login-form-button" type="submit">{t('Entrar')}</button>
            </div>
        </>
    )
}

export default LoginForm