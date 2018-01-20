'use strict';
const NodeModel = require('./NodeModel');
const mongoose = require('mongoose');
require('../config/connectionDB');

(async (model) => {

    var nodes = await model.find();
    for (let i = 0; i < nodes.length; i++) {
        await model.remove({_id:nodes[i]._id});
    }

    await mongoose.disconnect();
    console.log('close mongo DB');
})(NodeModel);