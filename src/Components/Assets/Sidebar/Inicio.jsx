import React, { useState } from 'react';
import './Inicio.css';
import publi from './img/img1.jpg'; 
import publicacion from './img/img2.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'JohnDoe123',
      imageUrl: publicacion,
      description: '¡Hola a todos! Bienvenidos a mi nueva publicación.',
      likes: 15,
      comments: [
        { id: 1, user: 'JaneDoe456', text: '¡Qué buena publicación!' },
        { id: 2, user: 'MikeJohnson789', text: 'Me encanta tu foto!' }
      ],
      showComments: false
    },
  ]);

  const profiles = [
    { id: 1, user: 'Vitali', imageUrl: publi },
    { id: 2, user: 'Andru', imageUrl: publi },
    { id: 3, user: 'Israel', imageUrl: publi },
    { id: 4, user: 'Josue', imageUrl: publi },
    { id: 5, user: 'Daniel', imageUrl: publi },
    { id: 5, user: 'Juan', imageUrl: publi },
    { id: 5, user: 'Luis', imageUrl: publi },
    { id: 5, user: 'Daniel', imageUrl: publi },
    { id: 5, user: 'Juan', imageUrl: publi },
  ];

  const [newCommentText, setNewCommentText] = useState('');

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const toggleComments = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, showComments: !post.showComments };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleComment = (postId, commentText) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const newComment = { id: post.comments.length + 1, user: 'Usuario', text: commentText };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    });
    setPosts(updatedPosts);
    setNewCommentText('');
  };

  const handleShare = (postId) => {
    console.log(`Compartir publicación ${postId}`);
  };

  return (
    <div className="inicio-container">
      <div className="background-image"></div>
      <div className="sidebar">
      </div>
      <div className="container mt-4">
        <div className="profile-list">
          {profiles.map(profile => (
            <div key={profile.id} className="profile-item">
              <img src={profile.imageUrl} alt={profile.user} />
              <p>{profile.user}</p>
            </div>
          ))}
        </div>

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="card shadow-sm">
              <img src={post.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title">
                  <h5>{post.user}</h5>
                </div>
                <p className="card-text">{post.description}</p>
                <div className="card-actions">
                  <div>
                    <button className="btn btn-outline-purple" onClick={() => handleLike(post.id)}>
                      <FontAwesomeIcon icon={faHeart} className="me-1" /> {post.likes}
                    </button>
                    <button className="btn btn-outline-purple" onClick={() => toggleComments(post.id)}>
                      <FontAwesomeIcon icon={faComment} className="me-1" /> Comentarios ({post.comments.length})
                    </button>
                  </div>
                  <button className="btn btn-outline-purple" onClick={() => handleShare(post.id)}>
                    <FontAwesomeIcon icon={faShare} className="me-1" /> Compartir
                  </button>
                </div>
                {post.showComments && (
                  <div className="comments-section">
                    <h6>Comentarios:</h6>
                    <div className="comments-list">
                      {post.comments.map(comment => (
                        <div key={comment.id} className="comment">
                          <div className="comment-user">{comment.user}: </div>
                          <div className="comment-text">{comment.text}</div>
                        </div>
                      ))}
                    </div>
                    <form className="comment-form" onSubmit={(e) => { e.preventDefault(); handleComment(post.id, newCommentText); }}>
                      <textarea className="form-control" name="comment" rows="3" placeholder="Escribe un comentario..." value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} required></textarea>
                      <button type="submit" className="btn btn-purple">Comentar</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;