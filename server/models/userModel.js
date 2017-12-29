var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    'email': {
        type: String,
        required: true,
        unique: true
    },
    'password': {
        type: String,
        required: true,
        minLength: 6
    },
    'name': {
        type:String,
        required:false,
        minLength:4
    }
});

module.exports = mongoose.model('user', userSchema);
