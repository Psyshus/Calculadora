import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import Logo from './images/descarga.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [pantalla, setPantalla] = useState('');

  const agregarNumero = numero => {
    setPantalla(pantalla + numero);
  };

  const resetearPantalla = () => {
    setPantalla('');
  };

  const calcularResultado = () => {
    if (pantalla) {
      setPantalla(evaluate(pantalla));
      setTimeout(() => {
        setPantalla('');
      }, 3000);
    } else {
      alert('Por favor ingrese valores para calcular el resultado');
    }
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla pantalla={pantalla} />
        <div className="fila">
          <Boton manejarClic={agregarNumero}>1</Boton>
          <Boton manejarClic={agregarNumero}>2</Boton>
          <Boton manejarClic={agregarNumero}>3</Boton>
          <Boton manejarClic={agregarNumero}>+</Boton>
        </div>
        <div className="fila">
          {' '}
          <Boton manejarClic={agregarNumero}>4</Boton>
          <Boton manejarClic={agregarNumero}>5</Boton>
          <Boton manejarClic={agregarNumero}>6</Boton>
          <Boton manejarClic={agregarNumero}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarNumero}>7</Boton>
          <Boton manejarClic={agregarNumero}>8</Boton>
          <Boton manejarClic={agregarNumero}>9</Boton>
          <Boton manejarClic={agregarNumero}>*</Boton>
        </div>
        <div className="fila">
          {' '}
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarNumero}>0</Boton>
          <Boton manejarClic={agregarNumero}>.</Boton>
          <Boton manejarClic={agregarNumero}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear resetearPantalla={resetearPantalla}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
