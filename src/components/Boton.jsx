import React from 'react';
import '../styles/Boton.css';

const Boton = props => {
  const esOperador = valor => {
    return ['+', '-', '*', '/'].includes(valor);
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) && 'operador'
      }`}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Boton;
