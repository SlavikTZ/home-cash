'use strict';
const db = require('db');
const log = require('../logger')(module);

class User {
    constructor(name) {
        this.name = name;
    }

    hello(who) {
        log(`${db.getPhrases('Hello')}`, `${who.name}`);
    }
}

exports.User = User;