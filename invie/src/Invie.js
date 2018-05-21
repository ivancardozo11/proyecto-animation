import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './componentes/Portada.jsx';
import Guitarras from './componentes/Guitarras.jsx';
import Footer from './componentes/Footer.jsx';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

// const data = {
//   menu : [
//     {
//       href: 'index.html',
//       title: 'Home',
//     },
//     {
//       href: '#guitarras',
//       title: 'Guitarras',
//     },
//     {
//       href: 'precios.html',
//       title: 'Precios',
//     },
//     {
//       href: 'hola.html',
//       title: "Don't click me",
//     }
//   ],
//   logoPortada : logoPortada,
//    guitarras: [
//     {
//       image: acustica,
//       alt: 'Guitarra acustica',
//       name: ' Invie Acustica',
//       features: [
//         'Estilo vintage',
//         'Manera pura',
//         'Incluye estuche invisible de aluminio',
//       ]
//     },
//     {
//       image: classic,
//       alt: 'Guitarra acustica',
//       name: ' Invie Acustica',
//       features: [
//         'Estilo vintage',
//         'Manera pura',
//         'Incluye estuche invisible de aluminio',
//       ]
//     }
//   ]
// }

class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* // < Portada menu = {data.menu} logo= {data.logoPortada} /> */}
        < Portada/>
        {/*Portada*/}
        {/* // < Guitarras guitarras = {data.guitarras}/> */}
        < Guitarras/>
        {/*Guitarras*/}
        < Footer />
        {/*Footer*/}

      </section>
    );
  }
}

export default App;
