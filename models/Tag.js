const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
    name: String
});

module.exports = tagSchema;