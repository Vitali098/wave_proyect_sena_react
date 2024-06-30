import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chats.css';
import defaultAvatar from './img/img1.jpg'; 

const Chats = () => {
  const initialChats = [
    { id: 1, userId: 'gabriela', name: 'Gabriela', lastMessage: '¡Hola! :)', unreadMessages: 2 },
    { id: 2, userId: 'valeria', name: 'Valeria', lastMessage: 'Amor, vamos a tener un bebé <3', unreadMessages: 0 },
    { id: 3, userId: 'dano', name: 'Dano', lastMessage: 'Man, ven a ver Netflix :3 ', unreadMessages: 5 },
    { id: 4, userId: 'camila', name: 'Camila', lastMessage: '¿Qué tal el día? :D', unreadMessages: 1 },
    { id: 5, userId: 'juan', name: 'Juan', lastMessage: 'Estoy en camino', unreadMessages: 0 },
    { id: 6, userId: 'sofia', name: 'Sofía', lastMessage: '¿Cómo te fue hoy?', unreadMessages: 3 },
  ];

  const [chats, setChats] = useState(initialChats);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredChats = initialChats.filter(chat =>
      chat.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setChats(filteredChats);
  };

  return (
    <div className="container mt-4">
      
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar chats..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {chats.map(chat => (
        <div key={chat.id} className="card chat-card">
          <Link to={`/sidebar/chats/${chat.userId}`} className="chat-link">
            <div className="card-body d-flex align-items-center">
              <img src={defaultAvatar} alt="Foto de perfil" className="avatar" />
              <div className="ms-3">
                <h5 className="card-title">{chat.name}</h5>
                <p className="card-text">{chat.lastMessage}</p>
              </div>
              {chat.unreadMessages > 0 && (
                <div className="unread-badge">{chat.unreadMessages}</div>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Chats;
