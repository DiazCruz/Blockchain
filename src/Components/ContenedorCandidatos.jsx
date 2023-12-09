import React from 'react';

function ContenedorCandidatos({ nombre, carrera, semestre, propuestas, imagen }) {
  return (
    <div className="contenedor-candidatos">
      <div className="informacion-candidato">
        <img src={imagen} alt="Imagen del candidato" className="imagen-candidato" />
        <div className="detalle-candidato">
          <p className="detalle-nombre">Nombre: {nombre}</p>
          <p className="detalle-carrera">Carrera: {carrera}</p>
          <p className="detalle-semestre">Semestre: {semestre}</p>
          <p className="detalle-propuestas">Propuestas: {propuestas}</p>
        </div>
      </div>
    </div>
  );
}

export default ContenedorCandidatos;
