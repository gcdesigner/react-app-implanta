import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { MdPerson, MdList, MdHelp } from 'react-icons/md'

import './menu.scss'

// import { Container } from './styles';

export default class TabsDashboard extends Component {
  render() {
    return (
      // <Tabs defaultActiveKey="users" id="dashboard">
      //   <Tab eventKey="users" title={<span><MdPerson /> {"Usuários"}</span>}>
      //     <Users />
      //   </Tab>
      //   <Tab eventKey="forms" title={<span><MdList /> {"Formulários"}</span>}>
      //     <Forms />
      //   </Tab>
      //   <Tab eventKey="questions" title={<span><MdHelp /> {"Perguntas"}</span>}>
      //     <Questions />
      //   </Tab>
      // </Tabs>

      // <ul>
      //   <li>
      //     <Link to="/users">Usuários</Link>
      //     <Link to="/forms">Formularios</Link>
      //     <Link to="/questions">Perguntas</Link>
      //   </li>
      // </ul>

      <Nav activeKey="/users">
        <Nav.Item>
          <Link to="/users"><MdPerson /> Usuários</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/forms"><MdList /> Formulários</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/questions"><MdHelp /> Perguntas</Link>
        </Nav.Item>
      </Nav>
    )
  }
}
