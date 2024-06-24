import { useTranslation } from "react-i18next";
import SignUpForm from "../../components/signUpForm/SignUpForm"

function Signup() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <h1>{t('Regístrate')}</h1>
            <SignUpForm></SignUpForm>
        </>
    )
}

export default Signup