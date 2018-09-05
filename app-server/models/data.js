'use strict';
// importing the mongoose module 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// collection.ensureIndex is deprecated. So, Used createIndexes instead. 
mongoose.set('useCreateIndex', true);
// defining the schema
const dataSchema = new Schema({
    text: String,
    createdAt: { type: Date, expires: 5, default: Date.now }
});
//collection name defined bellow
const Data = mongoose.model('Data', dataSchema);
module.exports = Data;