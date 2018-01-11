const crypto = require('crypto').randomBytes(256).toString('hex');
const db = 'tree';
module.exports = {
    uri: `mongodb://127.0.0.1:27017/${db}`,
    secret: crypto,
    db: `${db}`
}