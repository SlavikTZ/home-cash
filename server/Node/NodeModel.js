var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NodeSchema = new Schema({
    'parent_id': String,
    'name': String,
    'isChildren': Boolean
}, {versionKey: false});

NodeSchema.statics.findChildren = function (id, cb) {
    return this.find({parent_id: id}, cb);
};
NodeSchema.statics.addNode = function (id, cb) {
}

NodeSchema.pre('remove', (next) => {
    console.log(this);
    if (this.isChildren) {
        NodeSchema.remove({parent_id: this._id}).exec();
    }
    next();
});

module.exports = mongoose.model('Node', NodeSchema);
