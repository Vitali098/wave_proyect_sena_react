import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';
import backgroundVideoLight from './img/login.mp4'; // Ruta al video de fondo en modo claro

const Registro = () => {
  return (
    <div className="registro-container">
      <video id="background-video" className="background-video" autoPlay muted loop>
        <source src={backgroundVideoLight} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="registro-box">
        <h2 className="subtitle">Registro</h2>
        <div className="form-columns">
          <div className="form-column">
            <input type="text" placeholder="Nombres" className="input-field" />
            <input type="text" placeholder="Apellidos" className="input-field" />
            <input type="text" placeholder="Nombre de Usuario" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="form-column">
            <input type="text" placeholder="Nombre de Programa" className="input-field" />
            <input type="number" placeholder="Número de Ficha" className="input-field" />
            <input type="password" placeholder="Contraseña" className="input-field" />
            <input type="password" placeholder="Confirmar Contraseña" className="input-field" />
          </div>
        </div>
        <button className="submit-button">Registrarse</button>
        <p>
          ¿Ya tiene una cuenta? <Link to="/inicio" className="link">Iniciar Sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Registro;





