import React, { useState } from 'react';
import { BiUpload } from 'react-icons/bi';
import './Agregar.css';

const Agregar = ({ onAddPost }) => {
  const [formData, setFormData] = useState({
    description: '',
    imageFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      imageFile: file,
    });

    // Preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.description.trim() === '') {
      setErrorMessage('Por favor, complete la descripción');
      return;
    }

    setLoading(true);
    try {
      const newPost = await addPost(formData);
      onAddPost(newPost); // Llamar a la función para agregar la publicación
      setFormData({
        description: '',
        imageFile: null,
      });
      setErrorMessage('');
      setSuccessMessage('¡Publicación subida satisfactoriamente!');
      setImagePreview(''); // Limpiar la previsualización después de publicar
    } catch (error) {
      console.error('Error al agregar la publicación:', error);
      setErrorMessage('Error al agregar la publicación. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const addPost = (postData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newPost = {
          id: Date.now(),
          imageUrl: URL.createObjectURL(postData.imageFile),
          description: postData.description,
        };
        resolve(newPost);
      }, 1500);
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="add-form shadow-sm">
            <h2 className="text-center mb-4">Agregar Nueva Publicación</h2>

            <div className="form-group">
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                className="form-control"
                rows="3"
                placeholder="Ingrese una descripción"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="imageUpload">Seleccionar imagen:</label>
              <label className="custom-file-upload">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <BiUpload /> Subir imagen
              </label>
            </div>

            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Vista previa de la imagen" />
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="form-group text-center">
              <button type="submit" className="btn btn-purple" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <>
                    <BiUpload /> Agregar Publicación
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {successMessage && (
        <div className="success-popup">
          <div className="popup-content">
            <p>{successMessage}</p>
            <button onClick={() => setSuccessMessage('')} className="btn btn-purple">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agregar;
