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
    list: function (req, res) {
        NodeModel.find(function (err, Nodes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Node.',
                    error: err
                });
            }
            return res.json(Nodes);
        });
    },

    /**
     * NodeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        if (id === 'root') {
            id = null;
        }
        NodeModel.find({parent_id: id}, function (err, Nodes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Node.',
                    error: err
                });
            }
            if (Nodes.length == 0) {
                return res.status(404).json({
                    message: 'No such Node'
                });
            }
            return res.status(200).json(Nodes);
        });
    },

    /**
     * NodeController.create()
     */
    create: function (req, res) {
        var Node = new NodeModel({
            parent_id: req.body.parent_id,
            name: req.body.name,
            isChildren: req.body.isChildren

        });

        Node.save(function (err, Node) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Node',
                    error: err
                });
            }
            return res.status(201).json(Node);
        });
    },

    /**
     * NodeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NodeModel.findOne({_id: id}, function (err, Node) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Node',
                    error: err
                });
            }
            if (!Node) {
                return res.status(404).json({
                    message: 'No such Node'
                });
            }
            Node.name = req.body.name ? req.body.name : Node.name;
            Node.save(function (err, Node) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Node.',
                        error: err
                    });
                }
                return res.json(Node);
            });
        });
    },

    /**
     * NodeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NodeModel.findByIdAndRemove(id, function (err, Node) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Node.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};