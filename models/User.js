const mongoose = require('mongoose');
const { Schema } = mongoose;

//NEW SCHEMA
const userSchema = new Schema({
    googleId: String
})

mongoose.model('users', userSchema);