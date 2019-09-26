import React, { Component } from 'react'
import axios from 'axios'

import toastr from 'toastr'
// import { Container } from './styles';

const api_url = 'http://localhost:3002/api'

export default class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.getUsers = this.getUsers.bind(this)
    }

    componentDidMount() {
        this.getUsers()
    }

    reload() {
        this.getUsers()
    }

    getUsers() {
        axios.get(`${api_url}/users`)
            .then(resp => {
                const data = resp.data
                this.setState({
                    users: data
                })
            })
    }

    showUser(id) {
        const ide = id
        axios.get(`${api_url}/users/${ide}`)
            .then(resp => {
                console.log(resp.data)
            })
    }

    deleteUser(id) {
        const ide = id
        axios.delete(`${api_url}/users/${ide}`)
            .then(resp => {
                toastr.error('Sucesso', 'Excluido com sucesso', { timeOut: 10000, progressBar: true })
                this.reload()
            })
    }

    render() {
        return (
            <div>
                <h2>Usuários Cadastrados</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Perfil</th>
                            <th>Cliente</th>
                            <th>Ativo</th>
                            <th>Dt. Criação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item, index) => (
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.username}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>{item.createdAt}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => this.showUser(item._id)}>edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => this.deleteUser(item._id)}>remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}
