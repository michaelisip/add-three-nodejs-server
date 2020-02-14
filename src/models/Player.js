const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Player', playerSchema)