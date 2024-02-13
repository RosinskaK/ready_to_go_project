import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import supabase from "../services/supabase.js";

import ContentLogIn from "./ContentLogIn.jsx";
import Footer from "./Footer.jsx";

//------------------------------ZALOGUJ SIĘ----------------------------

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
      navigation("/");
      return;
    }

    setAuthError("Nieprawidłowy email lub hasło");
    //setAuthError(error.message);
  };

  return (
      <div className="signin-div">
        <div className="signin-main-container">
          <p className="signin-logo animate__animated animate__bounceInLeft">
            ReadyToGo
          </p>
          <ContentLogIn />
          <div className="signin-back">
            <form onSubmit={handleSignIn} className="signin-form">
              <p className="signin-sign">Zaloguj się</p>
              <input
                className="input-sign"
                id="email"
                placeholder="Podaj swój adres email"
              />
              <input
                className="input-sign"
                id="password"
                type="password"
                placeholder="Podaj hasło"
              />
              {authError && (
                <div className="signin-error-communicat">{authError}</div>
              )}
              <button className="sign-btn">Zaloguj się</button>
            </form>
            <p className="link-to-signup">
              jeśli nie masz konta zarejestruj się
            </p>
            <button className="sign-link signin-btn-link">
              <Link to="/signup">Załóż konto</Link>
            </button>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default SignIn;
