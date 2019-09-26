import React from 'react'
import { Form } from 'react-bootstrap'

const InputGroup = props => (
    <Form.Group controlId={props.name}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props}
            type={props.type} 
            name={props.name} 
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder} />
    </Form.Group>
)

export default InputGroup