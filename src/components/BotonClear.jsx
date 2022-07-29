import React from 'react';
import '../styles/BotonClear.css';

const BotonClear = props => {
  return (
    <div onClick={() => props.resetearPantalla()} className="boton-clear">
      {props.children}
    </div>
  );
};

export default BotonClear;
