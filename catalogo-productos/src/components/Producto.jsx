import React from 'react';

function Producto({ nombre, descripcion, precio, categoria, imagen }) {
  return (
    <div className="tarjeta-producto">
      <img src={imagen} alt={nombre} className="producto-imagen" />
      <div className="producto-info">
        <span className="producto-categoria">{categoria}</span>
        <h3>{nombre}</h3>
        <p className="producto-descripcion">{descripcion}</p>
        <p className="producto-precio">${precio.toLocaleString('es-CO')}</p>
      </div>
    </div>
  );
}

export default Producto;