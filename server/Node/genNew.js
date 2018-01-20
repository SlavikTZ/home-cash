'use strict';
const Tree = require('./NodeModel');
require('../config/connectionDB');

(async (NodeModel) => {
    try {
        for (let i = 0; i < 200; i++) {
            let nodes = await NodeModel.find();
            let node = {};
            let parent;
            if (nodes.length == 0) {
                node.name = "Корень";
                node.parent_id = null;
                node.isChildren = false
            } else {
                parent = nodes[Math.ceil(Math.random() * nodes.length) - 1];
                node.parent_id = parent._id;

                if (!parent.isChildren) {
                    parent.isChildren = true;
                    await parent.save();
                }

                let countChildren = await parent.countChildren();

                if (parent.name === "Корень") {
                    node.name = `Глава ${countChildren + 1}`;
                } else {
                    node.name = `${parent.name}.${countChildren + 1}`;
                }

            }
            await new NodeModel(node).save();
            if (!(i % 100)) {
                console.log(`%${i}`);
            }
        }

    } catch (err) {
        console.log(err);
    }
})(Tree);