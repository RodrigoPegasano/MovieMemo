import { useTranslation } from "react-i18next";
import LoginForm from "../../components/loginForm/LoginForm"

function Login() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <h1>{t('Iniciar sesión')}</h1>
            <LoginForm></LoginForm>
        </>
    )
}

export default Login