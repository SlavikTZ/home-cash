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

NodeSchema.pre('remove', function(next){
    console.log(this.isChildren);
    if (this.isChildren) {
        NodeSchema.find({parent_id: this._id}).then((nodes) => {
            console.log(nodes);
            nodes.forEach((node)=>{

             node.remove().exec();
           })
        });
    }
    next();
});

module.exports = mongoose.model('Node', NodeSchema);
