import { useNavigate, Link} from "react-router-dom";

import supabase from "../services/supabase.js";

import Welcome from "./Welcome.jsx";
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

            <div className='signup-div'>
                <div className='signup-main-container'>
                <p className='signup-logo'>ReadyToGo</p>
                <Welcome />
                <div className='signup-back'>
                <form onSubmit={handleSignUp} className='signup-form'>
                    <p className='signup-sign'>Zarejestruj się</p>
                    <input className='signup-input' id='email' placeholder='Podaj swój adres email'/>
                    <input className='signup-input' id='password' type='password' placeholder='Podaj hasło'/>
                    <input className='signup-input' id='password_repeat' type='password' placeholder='Potwierdź hasło'/>
                    <button className='signup-btn'>Zarejestruj się</button>
                </form>
                <Link className='signin-link' to='/signin'>Zaloguj się</Link>
                </div>
                </div>
                <Footer/>
            </div>

    );
}

export default SignUp;