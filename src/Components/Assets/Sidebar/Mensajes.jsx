import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Mensajes.css';
import defaultAvatar from './img/img1.jpg'; 

const Mensajes = () => {
  const { userId } = useParams();

  const [chatData, setChatData] = useState(null);

  useEffect(() => {
    if (userId) {
      setChatData({
        userId,
        name: userId.charAt(0).toUpperCase() + userId.slice(1),
        online: true,
        messages: [
          { id: 1, sender: userId, text: 'Hola, ¿cómo estás?' },
          { id: 2, sender: 'Tú', text: `Hola ${userId.charAt(0).toUpperCase() + userId.slice(1)}, bien gracias. ¿Y tú?` },
          { id: 3, sender: userId, text: 'Todo bien por aquí, gracias.' },
        ],
      });
    }
  }, [userId]);

  const [replyText, setReplyText] = useState('');

  const handleReply = (e) => {
    e.preventDefault();
    console.log(`Respondiendo al chat con mensaje: ${replyText}`);
    const newMessage = { id: chatData.messages.length + 1, sender: 'Tú', text: replyText };
    setChatData(prevState => ({
      ...prevState,
      messages: [...prevState.messages, newMessage],
    }));
    setReplyText('');
  };

  const isSentByCurrentUser = (sender) => {
    return sender === 'Tú'; 
  };

  if (!userId) {
    return <div className="container mt-5">Cargando...</div>;
  }

  if (!chatData) {
    return <div className="container mt-5">Usuario no encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <div className="message-resizable-container">
        <div className="card message-card">
          <div className="card-header">
            <div className="d-flex align-items-center">
              <img src={defaultAvatar} alt="Foto de perfil" className="avatar" />
              <div className="ms-3">
                <h5 className="card-title text-primary">{chatData.name}</h5>
                <p className="card-text text-muted">{chatData.online ? 'En línea' : 'Fuera de línea'}</p>
              </div>
            </div>
          </div>
          <div className="card-body mt-4 messages-container">
            {chatData.messages.map((message) => (
              <div
                key={message.id}
                className={`message ${isSentByCurrentUser(message.sender) ? 'sent' : 'received'}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <form className="reply-form" onSubmit={handleReply}>
            <textarea
              className="form-control"
              placeholder="Mensaje..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              style={{ borderColor: '#6c63ff', color: '#333' }}
            />
            <button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: '#6c63ff', borderColor: '#6c63ff' }}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mensajes;
