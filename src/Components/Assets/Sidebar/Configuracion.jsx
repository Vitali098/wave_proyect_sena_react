  import React, { useState } from 'react';
  import './Configuracion.css';

  const Configuracion = () => {
    const [configuracion, setConfiguracion] = useState({
      notificaciones: true,
      idioma: 'es',
      tema: 'oscuro',
      mostrarEmail: true,
      mostrarTelefono: false,
      guardarAutom: false,
      idiomaPreferido: 'en',
      privacidad: 'publico', 
      activarDobleAutenticacion: false, 
    });

    const handleToggle = (key) => {
      setConfiguracion({
        ...configuracion,
        [key]: !configuracion[key],
      });
    };

    const handleChange = (event, key) => {
      setConfiguracion({
        ...configuracion,
        [key]: event.target.value,
      });
    };

    const handleSaveChanges = () => {
      console.log('Guardando cambios...', configuracion);
    };

    return (
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Configuración</h5>

           
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="notificaciones"
                checked={configuracion.notificaciones}
                onChange={() => handleToggle('notificaciones')}
              />
              <label className="form-check-label" htmlFor="notificaciones">
                Recibir notificaciones
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="idioma">Idioma:</label>
              <select
                className="form-control"
                id="idioma"
                value={configuracion.idioma}
                onChange={(e) => handleChange(e, 'idioma')}
              >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="fr">Francés</option>
              </select>
            </div>

           
            <div className="form-group">
              <label htmlFor="tema">Tema:</label>
              <select
                className="form-control"
                id="tema"
                value={configuracion.tema}
                onChange={(e) => handleChange(e, 'tema')}
              >
                <option value="claro">Claro</option>
                <option value="oscuro">Oscuro</option>
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="mostrarEmail"
                checked={configuracion.mostrarEmail}
                onChange={() => handleToggle('mostrarEmail')}
              />
              <label className="form-check-label" htmlFor="mostrarEmail">
                Mostrar Email
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="mostrarTelefono"
                checked={configuracion.mostrarTelefono}
                onChange={() => handleToggle('mostrarTelefono')}
              />
              <label className="form-check-label" htmlFor="mostrarTelefono">
                Mostrar Teléfono
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="guardarAutom"
                checked={configuracion.guardarAutom}
                onChange={() => handleToggle('guardarAutom')}
              />
              <label className="form-check-label" htmlFor="guardarAutom">
                Guardar automáticamente
              </label>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="privacidad">Privacidad de la cuenta:</label>
              <select
                className="form-control"
                id="privacidad"
                value={configuracion.privacidad}
                onChange={(e) => handleChange(e, 'privacidad')}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="activarDobleAutenticacion"
                checked={configuracion.activarDobleAutenticacion}
                onChange={() => handleToggle('activarDobleAutenticacion')}
              />
              <label className="form-check-label" htmlFor="activarDobleAutenticacion">
                Activar doble autenticación
              </label>
            </div>

            <button className="btn btn-purple mt-3" onClick={handleSaveChanges}>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Configuracion;



