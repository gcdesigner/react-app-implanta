import React, { Component } from 'react';
import 'bootstrap/scss/bootstrap.scss'
import './App.scss';

import Routes from './routes'
import { Container } from 'react-bootstrap';
import Header from './pages/UI/header';
import Menu from './pages/Dashboard/Menu/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        { window.location.pathname === '/' ? '' : <Header /> }
          <Container>
            { window.location.pathname === '/' ? '' : <Menu /> }
            <Routes />
          </Container>
      </div>
    );
  }
}

export default App;
