import { useNavigate, Link} from "react-router-dom";

import supabase from "../services/supabase.js";

import Footer from "./Footer.jsx";


function SignUp() {

    const navigation = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, password_repeat } = e.target.elements;

        if (password.value !== password_repeat.value) {
            alert('Oba hasła muszą być identyczne');
            return;
        }

        let { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            navigation('/');
            return;
        }

        console.log(error);

    }

    return (
        <>
            <div>
                <p>Zarejestruj się w ReadyToGo</p>
                <form onSubmit={handleSignUp} className='signup-form'>
                    <input id='email' placeholder='Podaj swój adres email'/>
                    <input id='password' type='password' placeholder='Podaj hasło'/>
                    <input id='password_repeat' type='password' placeholder='Potwierdź hasło'/>
                    <button>Zarejestruj się</button>
                </form>
                <Link to='/signin'>Zaloguj się</Link>
            </div>
            <Footer/>
        </>
    );
}

export default SignUp;