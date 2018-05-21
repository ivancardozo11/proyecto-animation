import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import CSStransitionGroup from'react-addons-css-transition-group';

class App extends Component {
  state = {
    logo: logo,
    nombre: 'Leonidas',
  }
  onClick(){
    this.setState({
      logo: logoPlatzi,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <CSStransitionGroup
         transitionName  = "fade"
         transitionEnterTimeout = {1000}
         transitionEnterTimeout = {1000}
          >
          <img
          key={this.state.logo}
          src={this.state.logo}
          className="App-logo" alt="logo"
          />
        </CSStransitionGroup>
          <h1 className="App-title">Hola mundo</h1>
          <button onClick={this.onClick.bind(this)} >click me¡¡</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
