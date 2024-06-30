import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inicio.css'; 
import backgroundVideoDark from './img/login.mp4'; 

const InicioSesion = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate('/inicio');
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay muted loop>
        <source src={backgroundVideoDark} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      <div className="login-box">
      
        <h2 className="subtitle">Iniciar Sesión</h2>
        <input type="email" placeholder="Nombre de Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />
        <button className="submit-button" onClick={handleLogin}>Iniciar Sesión</button>
        <p>
          ¿No tienes una cuenta? <Link to="/registro" className="link">Registrarse</Link>
        </p>
      </div>
    </div>
  );
};

export default InicioSesion;
