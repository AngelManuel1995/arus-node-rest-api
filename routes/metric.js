'use strict'

const { Router } = require('express')
const Metric = require('../models/metric')
const api = Router()

api.post('/', async (req, res) => {
    const { body } = req
    const metric = new Metric(body)
    try {
        await metric.save()
        res.status(201).send(metric)
    }catch(error) {
        res.status(400).send({errors: [{message: error.message}]})
    }
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