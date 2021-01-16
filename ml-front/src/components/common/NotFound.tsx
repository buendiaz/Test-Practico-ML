import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Página no encontrada - Mercado Libre Challenge </title>
        <meta name="description" content="Mercado Libre Challenge - 404" />
      </Helmet>
      <div className="container">
        <div className="resultBox">
          <div className="noResults">
            Error 404! - Página no encontrada
            <br />Utiliza el buscador para encontrar tus productos
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NotFound;