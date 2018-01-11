'use strict';
const Tree = require('./NodeModel');
const EventEmmiter = require('events').EventEmitter;
require('../config/connectionDB');

let e = new EventEmmiter;
var i = 0;
e.on('addNode', () => {
    if (i < 200) {
        i++;
        Tree.find({}, (err, nodes) => {
            var node = {};
            var parent=null;
            if (nodes.length == 0) {
                node.name = "Корень";
                node.parent_id = null;
                node.isChildren = false
            } else {
                parent = nodes[Math.ceil(Math.random() * nodes.length) - 1];
                node.parent_id = parent._id;
                if(!parent.isChildren){
                    parent.isChildren=true;
                    parent.save(function(err){
                       if(err){
                           console.log(err);
                       }
                    });
                }
                if(parent.name==="Корень"){
                    node.name = `Node.${i}`;
                }else{
                    node.name = `Node.${i}`;
                }

            }

            new Tree(node).save(function (err) {
                if (err) {
                    console.log(err);
                }
                if(parent){
                    Tree.count({parent_id:parent._id}, (err, count)=>{
                    })
                }
                e.emit('addNode');
            });
        });

    }
    return false;
});

e.emit('addNode');
