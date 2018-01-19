var NodeModel = require('./NodeModel.js');

/**
 * NodeController.js
 *
 * @description :: Server-side logic for managing Nodes.
 */
module.exports = {

    /**
     * NodeController.list()
     */
    list: async (req, res, next) => {
        try {
            const Nodes = await NodeModel.find();
            res.json(Nodes);
        } catch (err) {
            res.status(500).json({
                message: 'Error when getting Node.',
                error: err
            });
        }

    },

    /**
     * NodeController.show()
     */
    show: async (req, res, next) => {
        try {

            var id = req.params.id;

            if (id === 'root') {
                id = null;
            }

            const Nodes = await NodeModel.find({parent_id: id});

            if (Nodes.length == 0) {
                return res.status(404).json({
                    message: 'No such Node'
                });
            }

            return res.status(200).json(Nodes);

        } catch (err) {
            return res.status(500).json({
                message: 'Error when getting Node.',
                error: err
            });
        }
    },

    /**
     * NodeController.create()
     */
    create: async (req, res, next) => {
        try {
            const Node = new NodeModel({
                parent_id: req.body.parent_id,
                name: 'New Node',
                isChildren: false
            });


            const parentNode = await NodeModel.findOne({_id: req.body.parent_id});
            if (!parentNode) {
                res.status(400).json();
            }
            let node = await Node.save();
            await parentNode.update({$set: {isChildren: true}});
            res.status(201).json(node);

        } catch (err) {
            res.status(500).json({
                message: 'Error when creating Node',
                error: err
            });
        }
    },

    /**
     * NodeController.update()
     */
    update: async (req, res, next) => {
        try {
            const id = req.params.id;
            let node = await NodeModel.findOne({_id: id});

            if (!node) {
                return res.status(404).json({
                    message: 'No such Node'
                });
            }

            node.name = req.body.name ? req.body.name : node.name;
            res.json(await node.save());

        } catch (err) {
            res.status(500).json({
                message: 'Error when updating Node.',
                error: err
            });
        }
    },

    /**
     * NodeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        console.log(id);
        return res.status(204).json();
    }
};
