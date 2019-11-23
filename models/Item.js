const mongoose = require('mongoose');
const { Schema } = mongoose;
const TagSchema = require('./Tag')

const itemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    tag: [TagSchema], //ARRAY OF STRINGS/TAGS
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('items', itemSchema);