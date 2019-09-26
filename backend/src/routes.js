const express = require('express')
const routes = express.Router()

const ProductController = require('./controlers/ProductController')
const UserController = require('./controlers/UserController')

routes.get('/', (req, res) => {
   return res.send('teste gabriel')
})

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.create)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes