const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    role: {
        type: Array,
        required: true,
        default: ['Administrador', 'Cliente', 'Usuário']
    }
})

mongoose.model('Role', RoleSchema)