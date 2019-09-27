import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

const SelectGroup = props => (

    <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props} as="select">
            <option>Selecione..</option>
            {props.children}
        </Form.Control>
    </Form.Group>

)

export default SelectGroup
