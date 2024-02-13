import { useNavigate, Link} from "react-router-dom";

import supabase from "../services/supabase.js";

import Welcome from "./Welcome.jsx";
import Footer from "./Footer.jsx";

//-------ZAREJESTRUJ SIĘ------------------

function SignUp() {

    const navigation = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, password_repeat } = e.target.elements;

        // if (password.value !== password_repeat.value) {
        //     alert('Oba hasła muszą być identyczne');
        //     return;
        // }

        if (password.value === "" || (password.value !== password_repeat.value)) {
            alert('Hasła nie są takie same lub puste');
        } else if (!email.value.includes('@')) {
            alert('Email musi posiadać znak @');
        } else if (password.value.length <6 || password_repeat.value.length <6) {
            alert('Hasło musi mieć co najmniej 6 znaków');
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
        <div className='signup-div'>
            <div className='signup-main-container'>
                <p className='signup-logo'>ReadyToGo</p>
                <Welcome/>
                <div className='signup-back'>
                    <form onSubmit={handleSignUp} className='signup-form'>
                        <p className='signup-sign'>Zarejestruj się</p>
                        <input className='input-sign' id='email' placeholder='Podaj swój adres email'/>
                        <input className='input-sign' id="password" type="password" placeholder="Podaj hasło"/>
                        <input className='input-sign' id='password_repeat' type='password'
                               placeholder='Potwierdź hasło'/>
                               <p></p>
                        <button className='sign-btn'>Zarejestruj się</button>
                    </form>
                    <p className='link-to-signin'>lub przejdź do logowania</p>
                    <button className='sign-link'><Link to='/signin'>Zaloguj się</Link></button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default SignUp;
