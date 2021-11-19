/* importamos React y ReactDOM */

import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp'

import './index.css';

const divRoot = document.querySelector('#root');

/* para renderizar debemos usar ReactDOM.render 
   es parte del standar dejar un espacio cuando llamamos a un 
   componente */  


//   ReactDOM.render( <PrimeraApp saludo="Hola, soy Goku"  />, divRoot );
   ReactDOM.render( <CounterApp />, divRoot );