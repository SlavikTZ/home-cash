'use strict';
const User = require('./user').User;
const log = require('./logger')(module);
const db = require('db');
db.connect();
function run(){
    const vaysa = new User('Вася');
    const petya = new User('Петя');
    vaysa.hello(petya);
}


if(module.parent){
    exports.run = run;
}else{
    run();
}