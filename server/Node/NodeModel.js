var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NodeSchema = new Schema({
    'parent_id': String,
    'name': String,
    'isChildren': Boolean
}, {versionKey: false});

module.exports = mongoose.model('Node', NodeSchema);
