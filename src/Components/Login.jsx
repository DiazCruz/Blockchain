import React from "react";
import logo from './imagenes/logo_itv.png'; 

const Login = (props) => {
  return (
    <div>
      <div className="login-franja">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="escuela">Instituto Tecnológico de Veracruz</h1>
      </div>
      <div className="login-container">
        <h1 className="welcome-message">Votación Estudiantil</h1>
        <h1 className="le-message">¡Escoge al nuevo CESA!</h1>
        <button className="login-button" onClick={props.connectWallet}>Inicio de Sesión</button>
      </div>
    </div>
  )
}

export default Login;
