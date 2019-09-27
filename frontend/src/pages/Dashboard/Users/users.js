import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import toastr from 'toastr'
import { Card } from 'react-bootstrap'
import { MdEdit, MdDelete } from 'react-icons/md'

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
        this.props.history.push(`/users/${ide}`);
        // axios.get(`${api_url}/users/${ide}`)
        //     .then(resp => {
        //         console.log(resp.data)
                
        //     })
    }

    deleteUser(id) {
        const ide = id
        axios.delete(`${api_url}/users/${ide}`)
            .then(resp => {
                toastr.success('Excluido com sucesso', { progressBar: true })
                this.reload()
            })
    }

    render() {
        return (
            <Card>
                <Card.Body className="flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Usuários Cadastrados</h2>
                        <Link to="/users/create" className="btn btn-primary">Adicionar</Link>
                    </div>
                    <table className="table table-striped">
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
                                    <td>{item.role}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>{item.createdAt}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary mr-2" onClick={() => this.showUser(item._id)}>
                                            <MdEdit />
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={() => this.deleteUser(item._id)}>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>

        )
    }
}
