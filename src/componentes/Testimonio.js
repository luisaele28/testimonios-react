import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

//export function Testimonio() { // se puede export asi cuando no es por defecto
export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
         className='imagen-testimonio'
         src={require(`../imagenes/testimonio-${props.imagen}.jpeg`)}
         alt='Foto de Argenis'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong></p>
        <p className='cargo-testimonio'>
          <strong>{props.cargo}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>

  ); 
}

export default Testimonio;