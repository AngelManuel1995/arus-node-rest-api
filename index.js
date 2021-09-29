'use strict'

const express = require('express')
const PORT = process.env.PORT || 7890
const app = express()
const api = require('./routes/metric')

app.use('/metric', api)

app.all('*', (req,res) => {
    res.status(400).send({errors: [{message: 'The resource was not found'}]})
})

app.listen(PORT, () => {
    console.log(`Metric service is up on ${PORT} port`)
})
