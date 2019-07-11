const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Investments = new Schema({
    investments_description: {
        type: String
    },
    investments_responsible: {
        type: String
    },
    investments_priority: {
        type: String
    },
    investments_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Investments', Investments);