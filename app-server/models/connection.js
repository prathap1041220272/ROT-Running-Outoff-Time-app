'use strict';
// initiating the mongodb client module
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost/task';
async function connectToDB() {
    try {
        await mongoose.connect(dbURL, { useNewUrlParser: true });
        console.log('Succefully Connected To DB');
    } catch (error) {
        console.error('Database Connection Failed');
        process.exit(1);
    }
    
}
connectToDB();
const db = mongoose.connection;
module.exports = db;