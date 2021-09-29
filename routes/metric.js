'use strict'

const { Router } = require('express')

const api = Router()

api.post('/', (req, res) => {
    res.send({ok: true})
})

api.get('/', (req, res) => {
    res.send({ok: true})
})

api.get('/:id', (req, res) => {
    res.send({ok: true})
})

api.put('/:id', (req, res) => {
    res.send({ok: true})
})

api.delete('/:id', (req, res) => {
    res.send({ok: true})
})

module.exports = api
// module.exports = { api }