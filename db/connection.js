'use strict'
const mongoose = require('mongoose')

const connect = () => {
    const DB_NAME =  process.env.DB_NAME || 'spd_dev'
    const SERVER = process.env.SERVER || 'localhost'
    const PORT = process.env.PORT || '27017'
    const DB_USER = process.env.DB_USER || 'spd_dev'
    const DB_PASSWORD = process.env.DB_PASSWORD || '1234567890'
    return mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${SERVER}:${PORT}/${DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connect
