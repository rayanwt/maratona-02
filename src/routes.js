const express = require('express'); // Bliblioteca para criar servidor
const routes = express.Router() // para criação das rotas
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController')

// const basePath = __dirname + "/views" // basePath === caminho base * ejs ja le pasta views 
// req, res
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)


module.exports = routes;