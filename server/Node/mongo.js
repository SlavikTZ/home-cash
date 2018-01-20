'use strict';
const NodeModel = require('./NodeModel');
const mongoose = require('mongoose');
require('../config/connectionDB');


(async (model)=>{

    let count = await model.find().count();
    console.log(count);
    var node = await model.findOne({_id:'5a637ce4573fe6518abb3a0e'});
    if(node){
        await node.findChildren(model);
    }

    /*count = await NodeModel.find().count();
    console.log(count);*/

    await mongoose.disconnect();
    console.log('close mongo DB');
})(NodeModel);

/*(async (model) => {

    const node = await model.findOne({_id: '5a637ce4573fe6518abb3a0e'});

    if (node && node.isChildren) {
        let nodes = await model.find({parent_id: node._id});
        for (let i = 0; i < nodes.length; i++) {
            console.log(nodes[i]._id);
        }
    }


    await mongoose.disconnect();
    console.log('close mongo DB');
})(NodeModel);*/
/*var node = new NodeModel({
    parent_id: '5a58d100aff9857437a5d095',
    name: 'New Node',
    isChildren: false
});*/

/*NodeModel.findOne({_id: '5a58efd5765a433068463f98'})
    .then((node) => {
        if (node) {
            node.remove();
        }
    })

/!*NodeModel.remove({_id:'5a58d100aff9857437a5d095'}).then(function(node){

});*!/

NodeModel.find({name: /test/i, isChildren:true}).then(function (nodes) {
    console.log(nodes, nodes.length);
    mongoose.disconnect().then(() => {
        console.log('close mongo DB');
    });
});*/

/*
let parent_id = '5a55f00c72e2df3fc07b3a5e';

var Node = new Tree({
    parent_id: parent_id,
    name: 'New Node',
    isChildren: false
});

Node.save()
    .then((Node) => {
        Tree.findOne({_id: parent_id})
            .update({$set: {isChildren: true}})
            .then((parentNode) => {
                return;
            })
            .catch((err) => conle.log(err));
        console.log(Node)
    })
    .catch((err) => {
        console.log(errr);
    });*/

