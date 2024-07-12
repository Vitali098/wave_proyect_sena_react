<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineFileAdd, AiOutlineMessage, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
=======
// Sidebar.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineFileAdd, AiOutlineMessage, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { BsDroplet } from 'react-icons/bs';
>>>>>>> 6c93bd4253c4ebe05c896e75ea17174070664c91
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from './DarkModeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
<<<<<<< HEAD
import waveIcon from './img/wave.png'; 
=======
>>>>>>> 6c93bd4253c4ebe05c896e75ea17174070664c91

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleProfileClick = () => {
    alert("¡Página en mantenimiento!");
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar-header bg-purple d-flex justify-content-center align-items-center">
<<<<<<< HEAD
        <img
          src={waveIcon}
          alt="Wave Icon"
          className="cursor-pointer"
          style={{ width: '2rem', marginBottom: '10px' }}
=======
        <BsDroplet
          className="text-white cursor-pointer"
          style={{ fontSize: '2rem', marginBottom: '10px' }}
>>>>>>> 6c93bd4253c4ebe05c896e75ea17174070664c91
          onClick={toggleSidebar}
        />
      </div>
      <div className="sidebar-nav">
        <Link to="/sidebar/inicio" className="nav-item">
          <AiOutlineHome className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Inicio</span>
        </Link>
        <Link to="/sidebar/buscar" className="nav-item">
          <AiOutlineSearch className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Buscar</span>
        </Link>
        <Link to="/sidebar/agregar" className="nav-item">
          <AiOutlineFileAdd className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Agregar</span>
        </Link>
        <Link to="/sidebar/chats" className="nav-item">
          <AiOutlineMessage className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Chats</span>
        </Link>
        <Link to="/sidebar/perfil" className="nav-item">
          <AiOutlineUser className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Perfil</span>
        </Link>
        <Link to="/sidebar/configuracion" className="nav-item">
          <AiOutlineSetting className="nav-icon" />
          <span className={`nav-text ${isCollapsed ? 'hidden' : ''}`}>Configuración</span>
        </Link>
      </div>
      
      <div className="dark-mode-toggle text-center mt-auto pt-4" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className={`text-white cursor-pointer ${isDarkMode ? 'moon-icon' : 'sun-icon'}`}
          style={{ fontSize: '1.5rem' }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
