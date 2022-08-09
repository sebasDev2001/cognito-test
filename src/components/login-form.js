import React from "react";
import UserPool from "../UserPool";
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import {useNavigate, Link} from "react-router-dom";
import '../styles/login-form-style.css';

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [Error, setErorr] = React.useState("");

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        })

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (result) => {
                console.log("onSuccess: ",result);
                navigate("/home");
            },
            onFailure: (err) => {
                console.error("onFailure: ",err);
                setErorr('Error al iniciar sesión');
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ",data);
                setErorr('Nueva contraseña requerida');
            }
        });
        
    }


  return (
    <div className="container">
      <div className="brand-title">Log in Form</div>
      <form onSubmit={onSubmit} className="inputs">
        <label htmlFor="email">E-mail</label>
        <input value={email}  placeholder="widerman@gmail.com" onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        <button type="submit">Log in</button>
        <p>
        no tienes cuenta? <Link to="/singup">Sing up</Link>
        </p>
      </form>
      <h2>{Error}</h2>
      
    </div>
  );
}

export default LoginForm;