var express = require('express');
var router = express.Router();
var NodeController = require('./NodeController.js');


/*
 * GET
 */
router.get('/', NodeController.list);

/*
 * GET
 */
router.get('/:id', NodeController.show);

/*
 * POST
 */
router.post('/', NodeController.create);

/*
 * PUT
 */
router.put('/:id', NodeController.update);

/*
 * DELETE
 */
router.delete('/:id', NodeController.remove);

module.exports = router;
