'use strict';
const mongoose = require('mongoose');
const configDB = require('./database');
mongoose.Promise = require('bluebird');
mongoose.connect(configDB.uri, {useMongoClient: true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('error connection', err);
});
db.once('open', () => {
    console.log(`Connected to database: ${configDB.db}`);
});