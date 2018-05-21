import React from 'react';
import ReactDOM from 'react-dom';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';

import cheet from 'cheet.js';
import logoPortada from './images/invie.png';
import logoPlatzi from './images/platzi.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import easterA from './images/easter-a.png';
import easterB from './images/easter-b.png';



const initialState = {
  isAnimated: false,
  menu : [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    },
    {
      href: 'hola.html',
      title: "Don't click me",
    }
  ],
  logoPortada : logoPortada,
   guitarras: [
    {
      image: acustica,
      alt: 'Guitarra acustica',
      name: ' Invie Acustica',
      features: [
        'Estilo vintage',
        'Manera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: classic,
      alt: 'Guitarra acustica',
      name: ' Invie Acustica',
      features: [
        'Estilo vintage',
        'Manera pura',
        'Incluye estuche invisible de aluminio',
      ]
    }
  ]
}
function reducer(state, action) {
switch(action.type) {
case 'UPDATE_PROPS':{
    const newProps = action.payload.props;
    return {...state, ...newProps}
  }
  default:
  return state
 }
}
const store = createStore(reducer, initialState);

const easter = {
  isAnimated: 'is-animated',
  menu : [
    
  ],
    logoPortada: logoPlatzi,
  guitarras: [
    {
      image: easterA,
      alt: 'Guitarra padre de familia',
      name: ' Invie Acustica',
      features: [
        'Lista para copiar a los simpsons',
        ' Aire puro',
        'Chistes malos',
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra Invie Familiar',
      name: ' Invie Acustica',
      features: [
        'Estilo vintage',
        'Manera pura',
        'Inicia tu camino como rockstar',
      ]
    }
  ]
}

cheet ('i n v i e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
  // console.log('lo lograste, descubriste el easter egg');
});
cheet ('g o b a c k', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
  // console.log('Regresaste al estado inicial');
});
ReactDOM.render(
  <Provider store={store}>
  <Invie />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
