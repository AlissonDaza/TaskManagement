import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 style={{color: 'white'}}className="text-center mb-4">404 - Not Found</h1>
      <h1 style={{color: 'white'}}className="text-center mb-4">In Maintenance</h1>
      <Link to="/" className="btn btn-primary btn-lg">Volver</Link>
    </div>
  )
}

export default NotFound;
