const mongoose = require('mongoose')
// const RoleSchema = require('./Role')
// const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
})

// UserSchema.plugin(mongoosePaginate)

mongoose.model('User', UserSchema)