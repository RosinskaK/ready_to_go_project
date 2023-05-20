import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import supabase from "../services/supabase.js";

import Footer from "./Footer.jsx";

function SignIn() {

    const navigation = useNavigate();

    const [authError, setAuthError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        let { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            navigation('/');
            return;
        }

        setAuthError(error.message);

    }

    return (
        <>
            <div>
                <h1>Zaloguj się do ReadyToGO</h1>
                {
                    authError && <div style={{color: 'red'}}>{authError}</div>
                }
                <form onSubmit={handleSignIn}>
                    <input id='email' placeholder='Podaj swój adres email'/>
                    <input id='password' placeholder='Podaj hasło'/>
                    <button>Zaloguj się</button>
                </form>
                <Link to='/signup'>Załóż konto</Link>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;