import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Form, Image, Button, Card, Alert } from 'react-bootstrap'
import InputGroup from '../../components/inputGroup'

import './login.scss'

const API = 'http://localhost:3002/api/'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
            alert: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        // const { username, password } = this.state
        const response = axios.post(`${API}/users`)
            .then(resp => {
                const user = JSON.stringify(resp.data)
                console.log(user)
            })
            .catch(e => {
                console.error(e)
            })
        
            return response
        
        // if (!this.state.username || !this.state.password) {
        //     this.setState({ message: 'Usuário ou Senha não informado.', alert: true })
        //     return
        // } else {
        //     this.props.history.push('/users');
        //     this.setState({ alert: false })
        // }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { username, password, alert, message } = this.state
        return (
            <div className="wrapper-login">
                <Card>
                    <Card.Body>
                        <div className="logo">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/394px-Sketch_Logo.svg.png" />
                        </div>
                        <Form className="form-login" onSubmit={this.handleSubmit}>
                            <Alert variant="danger" show={alert}>{message}</Alert>

                            <InputGroup label="Usuário" name="username" value={username} onChange={this.handleChange} placeholder="Usuário" />
                            <InputGroup type="password" label="Senha" name="password" value={password} onChange={this.handleChange} placeholder="Senha" />

                            <Button type="submit" className="mb-3" variant="primary" block>Logar</Button>
                            <Link to="#">Esqueci minha senha</Link>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}