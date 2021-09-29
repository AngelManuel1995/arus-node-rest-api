'use strict'

const mongoose = require('mongoose')

const MetricsSchema = new mongoose.Schema({
    type: {
        type: String,
        trim: true,
        required: true,
        enum: ['CPU', 'MEMORY']
    },
    value: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps:true, collection:'metrics'})


const Metric = mongoose.model('Metric', MetricsSchema)

module.exports = Metric