import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Assets/Sidebar/Sidebar';
import InicioSesion from './Components/Assets/Login/Inicio';
import Registro from './Components/Assets/Login/Registro';
import Inicio from './Components/Assets/Sidebar/Inicio';
import Buscar from './Components/Assets/Sidebar/Buscar';
import Agregar from './Components/Assets/Sidebar/Agregar';
import Chats from './Components/Assets/Sidebar/Chats';
import Mensajes from './Components/Assets/Sidebar/Mensajes';
import Perfil from './Components/Assets/Sidebar/Perfil';
import Configuracion from './Components/Assets/Sidebar/Configuracion';
import { DarkModeContext } from './Components/Assets/Sidebar/DarkModeContext';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        {isLoggedIn && <Sidebar />}
        <div className={`main-content ${isLoggedIn ? '' : 'full-width'}`}>
          <Routes>
            <Route path="/" element={<Navigate to={isLoggedIn ? "/sidebar/inicio" : "/inicio"} />} />

            <Route path="/inicio" element={!isLoggedIn ? <InicioSesion onLogin={handleLogin} /> : <Navigate to="/sidebar/inicio" />} />
            <Route path="/registro" element={!isLoggedIn ? <Registro /> : <Navigate to="/sidebar/inicio" />} />

            <Route path="/sidebar/inicio" element={isLoggedIn ? <Inicio /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/buscar" element={isLoggedIn ? <Buscar /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/agregar" element={isLoggedIn ? <Agregar /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/chats" element={isLoggedIn ? <Chats /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/chats/:userId" element={isLoggedIn ? <Mensajes /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/perfil" element={isLoggedIn ? <Perfil /> : <Navigate to="/inicio" />} />
            <Route path="/sidebar/configuracion" element={isLoggedIn ? <Configuracion /> : <Navigate to="/inicio" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


