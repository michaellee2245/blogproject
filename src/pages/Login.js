import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate("/");
        })
    }

    return (
        <div className="login-page">
            <p>Sign In With Google to Continue</p>
            <button className="google-btn" onClick={signInWithGoogle}> Sign in with Google </button>
        </div>
    )
}

export default Login;