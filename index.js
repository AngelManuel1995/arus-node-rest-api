'use strict'

const express = require('express')
const PORT = process.env.PORT || 7890
const app = express()
const connect = require('./db/connection')
const metricsRoutes = require('./routes/metric')

app.use(express.json())

app.use('/metric', metricsRoutes)

app.all('*', (req,res) => {
    res.status(400).send({errors: [{message: 'The resource was not found'}]})
})

app.listen(PORT, async () => {
    try {
        await connect()
        console.log('Database connected')
        console.log(`Metric service is up on ${PORT} port`)
    } catch (error){
        process.exit(1)
    }
})
