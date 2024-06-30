import React from 'react';
import './Perfil.css';
import defaultAvatar from './img/img1.jpg';
import publi from './img/img2.jpg'; 
import { BiHeart, BiChat, BiShare } from 'react-icons/bi'; 

const Perfil = ({ usuario }) => {
  const perfilInfo = {
    name: 'John Doe',
    bio: '¡Hola! Soy John, un apasionado por la tecnología y los viajes. Me encanta compartir mis experiencias y aprender nuevas cosas.',
    age: 32,
    location: 'Ciudad de México, México',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    gender: 'Male',
    followersCount: 5200, 
    followingCount: 240,
    postsCount: 12, 
    imageUrl: defaultAvatar, 
  };

  const posts = [
    { id: 1, imageUrl: publi, description: 'Disfrutando de la playa 🌊 #Vacaciones' },
    { id: 2, imageUrl: publi, description: 'Explorando nuevas culturas 🌍 #Viajes' },
    { id: 3, imageUrl: publi, description: 'Aprendiendo nuevas tecnologías 💻 #DesarrolloWeb' },
  ];

  const handleLike = (postId) => {
    console.log(`Like a la publicación ${postId}`);
  };

  const handleComment = (postId) => {
    console.log(`Comentario en la publicación ${postId}`);
  };

  const handleShare = (postId) => {
    console.log(`Compartir publicación ${postId}`);
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-image">
          <img src={perfilInfo.imageUrl} alt="Imagen de Perfil" />
        </div>
        <div className="perfil-info">
          <h2>{perfilInfo.name}</h2>
          <p>{perfilInfo.bio}</p>
          <div className="perfil-datos">
            <ul>
              <li><strong>Edad:</strong> {perfilInfo.age}</li>
              <li><strong>Ubicación:</strong> {perfilInfo.location}</li>
              <li><strong>Email:</strong> {perfilInfo.email}</li>
              <li><strong>Teléfono:</strong> {perfilInfo.phone}</li>
              <li><strong>Género:</strong> {perfilInfo.gender}</li>
            </ul>
            <ul>
              <li><strong>Seguidores:</strong> {perfilInfo.followersCount}</li>
              <li><strong>Siguiendo:</strong> {perfilInfo.followingCount}</li>
              <li><strong>Publicaciones:</strong> {perfilInfo.postsCount}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="perfil-publicaciones">
        <h3>Mis Publicaciones</h3>
        <div className="publicaciones-grid">
          {posts.map(post => (
            <div key={post.id} className="card mb-3">
              <img src={post.imageUrl} className="card-img-top" alt={`Publicación ${post.id}`} />
              <div className="card-body">
                <p className="card-text">{post.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline-purple me-2" onClick={() => handleLike(post.id)}>
                  <BiHeart className="bi me-1" /> Like
                </button>
                <button className="btn btn-outline-purple me-2" onClick={() => handleComment(post.id)}>
                  <BiChat className="bi me-1" /> Comment
                </button>
                <button className="btn btn-outline-purple" onClick={() => handleShare(post.id)}>
                  <BiShare className="bi me-1" /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;




