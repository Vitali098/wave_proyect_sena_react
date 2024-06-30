import React, { useState } from 'react';
import './Buscar.css';
import { BiSearch } from 'react-icons/bi';
import defaultAvatar from './img/img1.jpg';

const Buscar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allPosts] = useState([
    { id: 1, user: 'Daniel' },
    { id: 2, user: 'Juan' },
    { id: 3, user: 'Valeria' },
    { id: 4, user: 'Gabriela' },
    { id: 5, user: 'Laura' },
    { id: 6, user: 'Andy' },
    { id: 7, user: 'Diego' },
    { id: 8, user: 'Leonardo' },
    { id: 9, user: 'Yeison' },
    { id: 10, user: 'Andru' },
  ]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = allPosts.filter(post =>
      post.user.toLowerCase().includes(searchTerm)
    );
    setSearchTerm(searchTerm);
    setSearchResults(results);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = allPosts.filter(post =>
      post.user.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="search-form shadow-sm">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="submit" className="btn">
                <BiSearch />
              </button>
            </div>
          </form>
          {searchTerm && (
            <div className="search-results mt-2">
              {searchResults.length > 0 ? (
                <ul className="list-group">
                  {searchResults.map(result => (
                    <li key={result.id} className="list-group-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={result.imageUrl ? process.env.PUBLIC_URL + result.imageUrl : defaultAvatar}
                          alt={result.user}
                          className="user-avatar mr-3"
                        />
                        <strong>{result.user}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center mt-3">No se encontraron resultados</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buscar;
