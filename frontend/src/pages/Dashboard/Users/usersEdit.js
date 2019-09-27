import React, { Component } from 'react';
import UsersForm from './usersForm'

export default class UsersCreate extends Component {

    render() {
        return (
            <UsersForm title="Editar usuário" type="Editar" userId={this.props.match.params.id}/>
        )
    }
}
