'use strict';
'use strict';
const NodeModel = require('./NodeModel');
const mongoose = require('mongoose');
require('../config/connectionDB');

(async () => {
    const node = await NodeModel.findOne({_id: '5a63aa3534558a5eb3e97008'});
    const parent = await node.parent();
    const count = await parent.countChildren();
    console.log(count);
})();