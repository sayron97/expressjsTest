const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        date: Date,
        required: false
    },

})

module.exports = model('User', schema)