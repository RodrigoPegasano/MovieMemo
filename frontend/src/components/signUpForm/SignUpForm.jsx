import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// CSS
import './SignUpForm.css'

function SignUpForm() {

    const { t } = useTranslation();

    const [datos, setDatos] = useState({ username: "", name: "", lastName: "", email: "", password: "", password2: ""})

    const alertRegistered = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "Usuario creado",
            showConfirmButton: false,
            timer: 2000
        })
    }

    const alertRegisterError = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "error",
            title: "Error",
            text: "No ha sido posible crear el usuario"
        })
    }

    function onSignUp() {
        axios.post("http://localhost:3000/users/signup", datos)
            .then(() => {
                alertRegistered()
            })
            .catch((error) => {
                alertRegisterError()
                console.log(error)
            })
    }

    return (
        <>
            <form className="signup-form">
                <div>
                    <input
                        required={true}
                        value={datos.username}
                        onChange={(e) => setDatos({ ...datos, username: e.target.value })}
                        className="input-1 space"
                        type="text"
                        name="username"
                        placeholder={t('Nombre de usuario')}
                    />
                </div>

                <div className="inputs-display">
                    <input
                        required={true}
                        value={datos.name}
                        onChange={(e) => setDatos({ ...datos, name: e.target.value })}
                        className="input-2 input-2-margin space"
                        type="text"
                        name="name"
                        placeholder={t('Nombre')}
                    />
                    <input
                        required={true}
                        value={datos.lastName}
                        onChange={(e) => setDatos({ ...datos, lastName: e.target.value })}
                        className="input-2 space"
                        type="text"
                        name="lastName"
                        placeholder={t('Apellido')}
                    />
                </div>

                <div>
                    <input
                        required={true}
                        value={datos.email}
                        onChange={(e) => setDatos({ ...datos, email: e.target.value })}
                        pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/"
                        className="input-1 space"
                        type="email"
                        name="email"
                        placeholder={t('Correo electrónico')}
                    />
                </div>

                <div>
                    <input
                        required={true}
                        value={datos.password}
                        onChange={(e) => setDatos({ ...datos, password: e.target.value })}
                        className="input-1 space"
                        type="password"
                        name="password"
                        placeholder={t('Contraseña')}
                    />
                </div>

                <div>
                    <input
                        required={true}
                        value={datos.password2}
                        onChange={(e) => setDatos({ ...datos, password2: e.target.value })}
                        className="input-1 space"
                        type="password"
                        name="password"
                        placeholder={t('Repetir contraseña')}
                    />
                </div>

                <div className="password-require">
                    <div className="password-li">
                        <li className={datos.password.length < 8 ? "require-color-red" : "require-color-green"}>{t('Mínimo 8 caracteres')}</li>
                        <li className={datos.password.match(/[A-Z]/) ? "require-color-green" : "require-color-red"}>{t('Al menos una letra mayúscula')}</li>
                        <li className={datos.password.match(/[a-z]/) ? "require-color-green" : "require-color-red"}>{t('Al menos una letra minúscula')}</li>
                    </div>
                    <div className="password-li">
                        <li className={datos.password.match(/\d/) ? "require-color-green" : "require-color-red"}>{t('Al menos un dígito')}</li>
                        <li className={datos.password.match(/\s/) ? "require-color-red" : "require-color-green"}>{t('Sin espacios en blanco')}</li>
                        <li className={datos.password.match(/[^\w\s]/) ? "require-color-green" : "require-color-red"}>{t('Al menos 1 caracter especial')}</li>
                    </div>
                </div>

                <button
                    onClick={onSignUp}
                    disabled={datos.username === "" || datos.name === "" || datos.lastName === "" || datos.email === "" || datos.password === "" || datos.password !== datos.password2 || datos.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) == null || datos.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) == null}
                    className={datos.username === "" || datos.name === "" || datos.lastName === "" || datos.email === "" || datos.password === "" || datos.password !== datos.password2 || datos.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) == null || datos.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) == null ? "signup-form-button-disable" : "signup-form-button"}
                    type="submit">
                    {t('Registrarse')}
                </button>

                {datos.password.length >= 1 && datos.password !== datos.password2 ? <p className="password-error">{t('Las contraseñas no coinciden')}</p> : ""}
            </form>
        </>
    )
}

export default SignUpForm