import React from "react";
import UserPool from "../UserPool";
import {useNavigate} from "react-router-dom";
import '../styles/login-form-style.css';

const SingupForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [Error, setErorr] = React.useState("");

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        UserPool.signUp(email, password, [], null, (err, result) => {
            if (err) {
                console.log(err);
                setErorr('Error al crear el usuario, mala contraseña o correo ya registrado');
            } else {
                console.log(result);
                navigate("/home");
            }
        });
    }


  return (
    <div className="container">
      <div className="brand-title">Sing Up Form</div>
      <form className="inputs" onSubmit={onSubmit}>
        <label htmlFor="email">E-mail</label>
        <input value={email} placeholder="widerman@gmail.com" onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
        <button type="submit">Sing Up</button>
      </form>
      <h2>{Error}</h2>
    </div>
  );
}

export default SingupForm;