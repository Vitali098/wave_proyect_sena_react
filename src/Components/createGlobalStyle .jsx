import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Estilos globales */

  /* Resetear márgenes y padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilo para el cuerpo del documento */
  body {
    font-family: Arial, sans-serif; /* Establecer la fuente predeterminada */
    background-color: #f0f0f0; /* Color de fondo general */
    color: #333; /* Color de texto principal */
    line-height: 1.6; /* Altura de línea para mejorar la legibilidad */
  }

  /* Estilo para los enlaces */
  a {
    color: #800080; /* Color de enlaces */
    text-decoration: none; /* Quitar subrayado predeterminado */
    transition: color 0.3s ease; /* Transición suave para el color */
  }

  a:hover {
    color: #6a006a; /* Cambio de color al pasar el mouse */
  }

  /* Estilos adicionales según necesidad */
`;

export default GlobalStyle;
