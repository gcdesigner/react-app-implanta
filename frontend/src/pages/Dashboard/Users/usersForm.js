import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import axios from 'axios'
import toastr from 'toastr'

import { Form, Card, Col, Row, Button } from 'react-bootstrap';
import InputGroup from '../../../components/inputGroup';
import SelectGroup from '../../../components/selectGroup';
import { MdCheck, MdClose } from 'react-icons/md'

const api_url = 'http://localhost:3002/api'

class UsersForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: null,
            firstName: '',
            email: '',
            username: '',
            password: '',
            role: ''
        }
        this.initialState = this.state

        this.getUser = this.getUser.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }

    resetForm() {
        this.setState(this.initialState)
    }

    getUser() {
        const id = this.props.userId
        axios.get(`${api_url}/users/${id}`)
            .then(resp => {
                this.setState({
                    userId: id,
                    firstName: resp.data.firstName,
                    email: resp.data.email,
                    username: resp.data.username,
                    password: resp.data.password,
                    role: resp.data.role
                });
            })
    }

    onCancel() {
        this.resetForm()
        this.props.history.push('/users')
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const obj = this.state
        console.log(obj)
        const method = this.state.userId ? 'put' : 'post'
        const id = this.state.userId ? this.state.userId : ''

        if (!this.state.firstName) return toastr.error('Informe o nome')
        if (!this.state.email) return toastr.error('Informe o email')
        if (!this.state.username) return toastr.error('Informe o login')
        if (!this.state.password) return toastr.error('Informe a senha')

        axios[method](`${api_url}/users/${id}`, obj)
            .then(resp => {
                try {
                    toastr.success('Ação realizada com sucesso')
                } catch (error) {
                    toastr.error(error, this.state.message)
                }
                this.props.history.push('/users')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <Form className="w-100" onSubmit={this.onSubmit}>
                <Card>
                    <Card.Body className="flex-column">
                        <h2 className="mb-3">{this.props.title}</h2>
                        <Row>
                            <Col sm="6">
                                <InputGroup label="Nome" name="firstName" value={this.state.firstName} onChange={e => this.onChange(e)} />
                            </Col>
                            <Col sm="6">
                                <InputGroup type="email" label="Email" name="email" value={this.state.email} onChange={e => this.onChange(e)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <InputGroup label="Login" name="username" value={this.state.username} onChange={e => this.onChange(e)} />
                            </Col>
                            <Col sm="6">
                                <InputGroup type="password" label="Password" name="password" value={this.state.password} onChange={e => this.onChange(e)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <SelectGroup label="Perfil" name="role" value={this.state.role} onChange={e => this.onChange(e)} multiple={false}>
                                    <option value="Administrador">Administrador</option>
                                    <option value="Cliente">Cliente</option>
                                    <option value="Usuário">Usuário</option>
                                </SelectGroup>
                            </Col>
                            {/* <Col sm="6">
                                <InputGroup type="password" label="Password" name="password" value={this.state.password} onChange={e => this.onChange(e)} />
                            </Col> */}
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Button type="submit" variant="primary" className="mr-3"><MdCheck /> {this.props.type}</Button>
                        <Button type="button" variant="outline-secondary" onClick={this.onCancel}><MdClose /> Cancelar</Button>
                    </Card.Footer>
                </Card>
            </Form>
        )
    }
}

export default withRouter(UsersForm)