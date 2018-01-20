var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NodeSchema = new Schema({
    'parent_id': String,
    'name': String,
    'isChildren': Boolean
}, {versionKey: false});

NodeSchema.methods.del = async function () {
    if (this.isChildren) {
        var nodes = await this.model('Node').find({parent_id: this._id});
        for (let i = 0; i < nodes.length; i++) {
            await nodes[i].del();
        }
    }
    await this.model('Node').remove({_id: this._id});
    return;

};

NodeSchema.methods.parent = function () {
    return this.model('Node').findOne({_id: this.parent_id});
};

NodeSchema.methods.countChildren = function () {
    return this.model('Node').find({parent_id: this.id}).count();
};

module.exports = mongoose.model('Node', NodeSchema);
